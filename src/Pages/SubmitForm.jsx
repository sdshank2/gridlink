import React, { useState, useEffect, useRef } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ReactMarkdown from "react-markdown";
import InterconnectionFormPDF from "./InterconnectionFormPDF";

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

    const [aiInsights, setAiInsights] = useState("");
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
        setAiInsights("");
        setLoadingInsights(true);

        const eventSource = new EventSource(
            `https://gridlink-11f80fba2da2.herokuapp.com/stream-insights?formData=${encodeURIComponent(
                JSON.stringify(formData)
            )}`
        );

        eventSource.onmessage = (event) => {
            setAiInsights((prev) => prev + event.data);
        };

        eventSource.onerror = () => {
            setLoadingInsights(false);
            eventSource.close();
        };

        eventSource.onopen = () => setLoadingInsights(false);
    };

    useEffect(() => {
        divRef.current.scrollTop = divRef.current.scrollHeight;
    }, [aiInsights]);

    const renderInput = (key, labelOverride = null) => (
        <div key={key} className="flex flex-col space-y-1 mb-3">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {labelOverride ||
                    key
                        .replace(/([A-Z])/g, " $1")
                        .trim()
                        .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase())}
            </label>
            <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
                className="p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
        </div>
    );

    return (
        <div className="flex h-full overflow-hidden absolute top-0 w-full pt-20 dark:bg-gray-900">
            <div className="w-1/2 p-8 overflow-y-auto pb-24 space-y-6 bg-gray-50 dark:bg-gray-800">
                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Applicant Info</h2>
                        {renderInput("name")}
                        {renderInput("title")}
                        {renderInput("phoneNumber", "Phone Number")}
                        {renderInput("email")}
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-white">Mailing Address</h2>
                        {renderInput("mailingAddress", "Street Address")}
                        <div className="grid grid-cols-3 gap-4">
                            {renderInput("mailingCity", "City")}
                            {renderInput("mailingState", "State")}
                            {renderInput("mailingZipCode", "ZIP Code")}
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-white">Facility Address</h2>
                        {renderInput("facilityAddress", "Street Address")}
                        <div className="grid grid-cols-3 gap-4">
                            {renderInput("facilityCity", "City")}
                            {renderInput("facilityState", "State")}
                            {renderInput("facilityZipCode", "ZIP Code")}
                        </div>
                        {renderInput("nearestCrossingStreet")}
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-white">Electrical & Meter Info</h2>
                        {renderInput("accountNumber")}
                        {renderInput("meterNumber")}
                        {renderInput("serviceVoltage")}
                        {renderInput("serviceRating")}
                        {renderInput("estimatedInServiceDate")}
                        {renderInput("currentAnnualConsumption")}
                        {renderInput("estimatedGrossAnnualProduction")}
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-white">Inverter Details</h2>
                        {renderInput("energySource")}
                        {renderInput("totalDCSourceRating")}
                        {renderInput("inverterManufacturer")}
                        {renderInput("inverterModelNumber")}
                        {renderInput("numberOfPhases")}
                        {renderInput("numberOfInverters")}
                        {renderInput("totalInverterRatings")}
                        {renderInput("inverterCertifications")}
                        {renderInput("inverterVoltage")}
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-white">Attachments & Export</h2>
                        {renderInput("oneLineDiagAttached", "One Line Diagram Attached")}
                        {renderInput("sitePlanAttached")}
                        {renderInput("accessibleDisconnect")}
                        {renderInput("exportPower")}
                        {renderInput("maxExportPower")}
                        {renderInput("applicationFeeEnclosed")}
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-white">Contractor & Signature</h2>
                        {renderInput("equipmentInstallationContractor")}
                        {renderInput("electricalContractor")}
                        {renderInput("signatureDate")}
                    </div>

                    <div className="fixed bottom-0 left-0 w-1/2 p-4 bg-white dark:bg-gray-900 border-t shadow">
                        <button
                            type="submit"
                            className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold dark:bg-blue-700 dark:hover:bg-blue-800"
                        >
                            Submit for AI Insights
                        </button>
                    </div>
                </form>
            </div>

            <div className="w-1/2 p-8 pb-24 overflow-y-auto flex flex-col justify-between" ref={divRef}>
                {aiInsights ? (
                    <div className="bg-white dark:bg-gray-700 p-6 shadow-md text-gray-800 dark:text-white flex-1 rounded border">
                        <h3 className="text-xl font-semibold mb-4">AI Insights (Live)</h3>
                        <div className="prose">
                            <ReactMarkdown>{aiInsights.replaceAll("\\n", "\n")}</ReactMarkdown>
                        </div>
                    </div>
                ) : (
                    <div className="text-center flex w-full h-full items-center justify-center text-gray-400 dark:text-gray-500">
                        AI Insights will appear here!
                    </div>
                )}

                <div className="fixed bottom-0 right-0 w-1/2 p-4 bg-white dark:bg-gray-900 border-t shadow">
                    <PDFDownloadLink
                        document={<InterconnectionFormPDF formData={formData} />}
                        fileName="interconnection_form.pdf"
                    >
                        {({ loading }) => (
                            <button
                                className={`w-full py-2 rounded-md ${
                                    loading
                                        ? "bg-gray-300 text-gray-600 dark:bg-gray-600 dark:text-gray-400"
                                        : "bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700"
                                } font-semibold`}
                            >
                                {loading ? "Generating PDF..." : "Download Filled Form as PDF"}
                            </button>
                        )}
                    </PDFDownloadLink>
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;
