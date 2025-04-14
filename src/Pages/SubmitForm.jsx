import React, { useState, useEffect, useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ReactMarkdown from "react-markdown";
import InterconnectionFormPDF from "./InterconnectionFormPDF";
import "./form.css";

const ApplicationForm = () => {
    const divRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        mailingAddress: "",
        mailingCity: "",
        mailingState: "",
        mailingZipCode: "",
        phoneNumber: "",
        email: "",
        applicationType: [],
        facilityAddress: "",
        facilityCity: "",
        facilityState: "",
        facilityZipCode: "",
        nearestCrossingStreet: "",
        accountNumber: "",
        meterNumber: "",
        serviceVoltage: "",
        serviceRating: "",
        estimatedInServiceDate: "",
        currentAnnualConsumption: "",
        estimatedGrossAnnualProduction: "",
        energySource: "",
        totalDCSourceRating: "",
        inverterManufacturer: "",
        inverterModelNumber: "",
        numberOfPhases: "",
        numberOfInverters: "",
        totalInverterRatings: "",
        inverterCertifications: "",
        inverterVoltage: "",
        oneLineDiagAttached: "",
        sitePlanAttached: "",
        accessibleDisconnect: "",
        exportPower: "",
        maxExportPower: "",
        applicationFeeEnclosed: "",
        equipmentInstallationContractor: "",
        electricalContractor: "",
        signatureDate: "",
    });

    const [aiInsights, setAiInsights] = useState("");  // Store the insights as a string
    const [loadingInsights, setLoadingInsights] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAiInsights(""); // Clear previous insights
        setLoadingInsights(true);

        const eventSource = new EventSource(`https://gridlink-11f80fba2da2.herokuapp.com/stream-insights?formData=${encodeURIComponent(JSON.stringify(formData))}`);

        eventSource.onmessage = (event) => {
            setAiInsights((prev) => prev + event.data); // Append new chunks
        };

        eventSource.onerror = () => {
            setLoadingInsights(false);
            eventSource.close();
        };

        eventSource.onopen = () => setLoadingInsights(false);
    };

    useEffect(() => {
        divRef.current.scrollTop = divRef.current.scrollHeight;
    }, [aiInsights])

    return (
        //Fix fields by combining address fields & fixing keys
        <div className="flex h-full overflow-hidden top-0 absolute w-full pt-24">
            <div className="w-1/2 p-8 pb-24 overflow-y-auto">
                <form onSubmit={handleSubmit}>
                    {Object.keys(formData).map((key) => (
                        <div key={key} className="flex flex-col space-y-2 mb-4">
                            <label className="text-lg font-medium text-gray-700">{key.replace(/([A-Z])/g, " $1").toUpperCase().trim()}:</label>
                            <input
                                type="text"
                                name={key}
                                value={formData[key]}
                                onChange={handleInputChange}
                                className="p-2 w-full border border-gray-300 rounded-md"
                            />
                        </div>
                    ))}
                    <div className="fixed bottom-0 left-0 w-1/2 p-4">
                        <button type="submit" className="cursor-pointer w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white">
                            Submit for AI Insights
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-1/2 p-8 pb-24 overflow-y-auto flex flex-col justify-between" ref={divRef}> 
                {aiInsights ? (
                    <div className="bg-white p-6 shadow-md text-gray-800 flex-1">
                        <h3 className="text-xl font-medium mb-4">AI Insights (Live):</h3>
                        <div className="prose">
                            <ReactMarkdown>{aiInsights.replaceAll("\\n", "\n")}</ReactMarkdown>
                        </div>
                    </div>
                ) : <div className="text-center flex w-full h-full items-center justify-center text-gray-300">AI Insights will appear here!</div>}
                <div className="fixed bottom-0 right-0 w-1/2 p-4">
                    <PDFDownloadLink document={<InterconnectionFormPDF formData={formData} />} fileName="interconnection_form.pdf">
                        {({ loading }) => (
                            <button className={`cursor-pointer w-full py-2 rounded-md ${loading ? 'bg-gray-300' : 'bg-green-500 hover:bg-green-600 text-white'}`}>
                                {loading ? 'Generating PDF...' : 'Download Filled Form as PDF'}
                            </button>
                        )}
                    </PDFDownloadLink>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;