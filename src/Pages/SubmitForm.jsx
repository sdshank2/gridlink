import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { fillPdf } from "../components/InterconnectionFormPDF.jsx";
import PDFPreviewer from "../components/PDFPreviewer.jsx";

//ADD PRESETS FOR THINGS LIKE STATES (location), DATES, ETC.
const ApplicationForm = () => {
    const divRef = useRef(null);

    const [activeTab, setActiveTab] = useState("form");
    const [formData, setFormData] = useState({
        "Name": "",
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

    const [uploadedFiles, setUploadedFiles] = useState({
        oneLineDiagram: null,
        sitePlan: null,
    });

    const [validationErrors, setValidationErrors] = useState({});
    const [step, setStep] = useState(0);
    const [aiInsights, setAiInsights] = useState("");
    const [loadingInsights, setLoadingInsights] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const validateField = (name, value) => {
        let error = "";
        if (!value) {
            error = "This field is required.";
        } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
            error = "Invalid email address.";
        } else if (name === "phoneNumber" && !/^\d{10}$/.test(value)) {
            error = "Phone number must be 10 digits.";
        }
        setValidationErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === "checkbox" ? checked : value;
        setFormData((prev) => ({ ...prev, [name]: val }));
        validateField(name, val);
    };

    const handleSubmit = async (e) => {
        const hasErrors = Object.values(validationErrors).some(Boolean);
        if (hasErrors) {
            return;
        }
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

    const renderInput = (key, labelOverride = null, tooltip = null) => (
        <div key={key} className="flex flex-col space-y-1 mb-3 relative">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                {labelOverride || formatLabel(key)}
                {tooltip && (
                    <span
                        className="ml-2 text-xs text-gray-500 dark:text-gray-400 cursor-help"
                        title={tooltip}
                    >
                        ⓘ
                    </span>
                )}
            </label>
            <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
                className={`p-2 border rounded-md ${validationErrors[key] ? "border-red-500" : "border-gray-300"
                } dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
            />
            {validationErrors[key] && (
                <span className="text-sm text-red-500">{validationErrors[key]}</span>
            )}
        </div>
    );

    const formatLabel = (str) =>
        str
            .replace(/([A-Z])/g, " $1")
            .trim()
            .replace(/(?:^|\s)\S/g, (match) => match.toUpperCase());


    const downloadPdf = async (e) => {
        e.target.innerText = "Generating...";
        const blob = await fillPdf(formData);
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'interconnection_form.pdf';
        a.click();
        URL.revokeObjectURL(url);
        e.target.innerText = "Download PDF";
    }

    return (
        <>
            <div className="md:hidden absolute w-full z-25 flex justify-around border-b dark:border-gray-700 bg-white dark:bg-gray-800">
                <button
                    className={`w-1/2 py-2 text-center font-semibold ${activeTab === "form" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("form")}
                >
                    Form
                </button>
                <button
                    className={`w-1/2 py-2 text-center font-semibold ${activeTab === "insights" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("insights")}
                >
                    AI Insights
                </button>
            </div>
            <div style={{ height: "calc(100% - var(--spacing) * 30)" }} className="flex overflow-hidden absolute md:top-12 w-full dark:bg-gray-800">
                <div
                    className={`w-full md:w-1/2 p-8 overflow-y-auto pb-32 space-y-6 mt-8 bg-gray-50 dark:bg-gray-800 ${activeTab !== "form" ? "hidden md:block" : ""
                    }`}
                >
                    <form id="application-form" onSubmit={handleSubmit}>
                        {step === 0 && (
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                                    Legal Name and Mailing Address of Customer-Generator
                                </h2>
                                {renderInput("Name")}
                                {renderInput("Mailing Address")}
                                <div className="grid grid-cols-3 gap-4">
                                    {renderInput("City", "City")}
                                    {renderInput("State", "State")}
                                    {renderInput("Zip Code")}
                                </div>
                                {renderInput("Telephone Daytime", "Telephone (Daytime)")}
                                {renderInput("Email Address")}
                            </div>
                        )}
                        {step === 1 && (
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Alternative Contact Information</h2>
                                {renderInput("Mailing Address", "Street Address")}
                                <div className="grid grid-cols-2 gap-4">
                                    {renderInput("State_2", "State")}
                                    {renderInput("Zip Code_2", "Zip Code")}
                                </div>
                                {renderInput("Email Address_2", "Email Address")}
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Facility Information</h2>
                                {renderInput("Facility Address")}
                                <div className="grid grid-cols-3 gap-4">
                                    {renderInput("City_3", "City")}
                                    {renderInput("State_3", "State")}
                                    {renderInput("Zip Code_3", "Zip Code")}
                                </div>
                                {renderInput("Nearest Crossing Street")}
                                {renderInput("Account", "Account #")}
                                <div className="grid grid-cols-3 gap-4">
                                    {renderInput("Service Voltage 1", "Service Voltage")}
                                    {renderInput("VAC Service Rating", "Service Rating")}
                                    {renderInput("Service Voltage 2", "Estimated In-service Date")}
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {renderInput("Current Annual Consumption")}
                                    {renderInput("kWh  Est Gross Annual Production", "Est. Gross Annual Production")}
                                </div>
                                {renderInput("Total DC Source Rating")}
                                <div className="grid grid-cols-2 gap-4">
                                    {renderInput("Inverter Manufacturer")}
                                    {renderInput("Model Number of Inverter")}
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {renderInput("Number of Phases")}
                                    {renderInput("Number of Inverters1", "Number of Inverters")}
                                    {renderInput("Total of Inverter Ratings")}
                                </div>
                                {renderInput("Inverter Voltage")}
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Equipment Installation Contractor</h2>
                                {renderInput("Name_3", "Name")}
                                {renderInput("Mailing Address_3", "Mailing Address")}
                                <div className="grid grid-cols-3 gap-4">
                                    {renderInput("City_4", "City")}
                                    {renderInput("State_4", "State")}
                                    {renderInput("Zip Code_4", "Zip Code")}
                                </div>
                                {renderInput("Telephone Daytime_3", "Telephone (Daytime)")}
                                {renderInput("Email Address_3", "Email Address")}
                            </div>
                        )}

                        {step === 4 && (
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Electrical Contractor</h2>
                                {renderInput("Name_4", "Name")}
                                {renderInput("Mailing Address_4", "Mailing Address")}
                                <div className="grid grid-cols-3 gap-4">
                                    {renderInput("City_5", "City")}
                                    {renderInput("State_5", "State")}
                                    {renderInput("Zip Code_5", "Zip Code")}
                                </div>
                                {renderInput("Telephone Daytime_4", "Telephone (Daytime)")}
                                {renderInput("Email Address_4", "Email Address")}
                            </div>
                        )}

                        {step === 5 && (
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Attachments</h2>

                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                                        One Line Diagram (PDF)
                                    </label>
                                    <label className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                                        Upload File
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            onChange={(e) =>
                                                setUploadedFiles((prev) => ({
                                                    ...prev,
                                                    oneLineDiagram: e.target.files[0],
                                                }))
                                            }
                                            className="hidden"
                                        />
                                    </label>
                                    {uploadedFiles.oneLineDiagram && (
                                        <span className="text-xs text-gray-500 truncate">{uploadedFiles.oneLineDiagram.name}</span>
                                    )}
                                </div>


                                <div className="flex flex-col space-y-1">
                                    <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-4">
                                        Site Plan (PDF)
                                    </label>
                                    <label className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition">
                                        Upload File
                                        <input
                                            type="file"
                                            accept=".pdf"
                                            onChange={(e) =>
                                                setUploadedFiles((prev) => ({
                                                    ...prev,
                                                    sitePlan: e.target.files[0],
                                                }))
                                            }
                                            className="hidden"
                                        />
                                    </label>
                                    {uploadedFiles.sitePlan && (
                                        <span className="text-xs text-gray-500 truncate">{uploadedFiles.sitePlan.name}</span>
                                    )}
                                </div>
                            </div>
                        )}

                        {step === 6 && (
                            <div>
                                <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Customer-Generator Signature</h2>
                                {renderInput("Date")}
                                {renderInput("Printed Name")}
                                {renderInput("Title")}
                                {renderInput("Email Address_5", "Email Address")}
                            </div>
                        )}

                        <div className="flex justify-between mt-6">
                            {step > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step - 1)}
                                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
                                >
                                    Back
                                </button>
                            )}
                            {step < 6 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(step + 1)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                <div
                    className={`bg-gray-200 dark:bg-gray-900 w-full md:w-1/2 p-8 pb-24 overflow-y-auto flex flex-col justify-between ${activeTab !== "insights" ? "hidden md:flex" : ""
                    } mt-4 md:mt-8`}
                    ref={divRef}
                >
                    {aiInsights ? (
                        <div className="bg-white dark:bg-gray-800 p-6 shadow-md text-gray-800 dark:text-gray-50 flex-1 rounded">
                            <h3 className="text-xl font-semibold mb-4">AI Insights (Live)</h3>
                            <div className="prose">
                                <ReactMarkdown>{aiInsights.replaceAll("\\n", "\n")}</ReactMarkdown>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center flex w-full h-full items-center justify-center text-gray-400 dark:text-gray-500">
                            {loadingInsights ? "Loading AI Insights..." : "AI Insights will appear here!"}
                        </div>
                    )}
                </div>
            </div>
            <div className="md:flex w-full px-4 py-2 h-18 fixed bottom-0 left-0 bg-white dark:bg-gray-900 shadow z-40">
                <div className={`w-full md:w-1/4 py-2 md:mr-4 ${activeTab === "form" ? "block" : "hidden"} md:block`}>
                    <button
                        onClick={downloadPdf}
                        className="w-full py-2 rounded-md cursor-pointer bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700 font-semibold">Download PDF</button>
                </div>

                <div className="md:w-1/4 md:py-2 md:mr-4">
                    <button
                        onClick={() => setShowModal(true)}
                        className="hidden md:block w-full py-2 rounded-md cursor-pointer bg-green-500 hover:bg-green-600 text-white dark:bg-green-600 dark:hover:bg-green-700 font-semibold"
                    >
                        Preview Form PDF
                    </button>
                </div>

                <div className={`w-full md:w-1/2 py-2 ${activeTab === "insights" ? "block" : "hidden"} md:block`}>
                    <button
                        type="submit"
                        form="application-form"
                        disabled={loadingInsights}
                        className={`w-full py-2 rounded-md font-semibold cursor-pointer ${loadingInsights
                            ? "bg-gray-300 text-gray-600 dark:bg-gray-600 dark:text-gray-400 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
                        }`}
                    >
                        {loadingInsights ? "Generating AI Insights..." : "Generate AI Insights"}
                    </button>
                </div>
            </div>
            {showModal && (
                <div className="hidden md:block ">
                    <div className="fixed inset-0 bg-black opacity-50 z-70 " />

                    <div className="fixed top-5 left-0 right-0 bottom-5 z-80 flex items-center justify-center">
                        <div className="flex flex-col bg-white dark:bg-gray-700 p-6 rounded-md max-w-3xl w-full h-full overflow-hidden opacity-100">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl text-black dark:text-white font-semibold">📄 PDF Preview</h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="px-4 py-2 text-black dark:text-white cursor-pointer rounded-full text-xl flex items-center justify-center"
                                >
                                    &#10005;
                                </button>
                            </div>
                            <div className="w-full h-full pb-5 overflow-hidden">
                                <PDFPreviewer formData={formData} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ApplicationForm;
