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

    const [uploadedFiles, setUploadedFiles] = useState({
        oneLineDiagram: null,
        sitePlan: null,
    });

    const [validationErrors, setValidationErrors] = useState({});
    const [step, setStep] = useState(0);
    const [aiInsights, setAiInsights] = useState("");
    const [loadingInsights, setLoadingInsights] = useState(false);

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

    const renderInput = (key, labelOverride = null, tooltip = null) => (
        <div key={key} className="flex flex-col space-y-1 mb-3 relative">
            <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center">
                {labelOverride || formatLabel(key)}
                {tooltip && (
                    <span className="ml-2 text-xs text-gray-500 dark:text-gray-400 cursor-help" title={tooltip}>
                        ⓘ
                    </span>
                )}
            </label>
            <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
                className={`p-2 border rounded-md ${
                    validationErrors[key] ? "border-red-500" : "border-gray-300"
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

    return (
        <div className="flex h-full overflow-hidden absolute top-0 w-full pt-20 dark:bg-gray-900">
            <div className="w-1/2 p-8 overflow-y-auto pb-32 space-y-6 bg-gray-50 dark:bg-gray-800">
                <form onSubmit={handleSubmit}>
                    {step === 0 && (
                        <div>
                            <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Applicant Info</h2>
                            {renderInput("name")}
                            {renderInput("title")}
                            {renderInput("phoneNumber", "Phone Number", "Enter a phone number in the form (XXX) XXX-XXXX")}
                            {renderInput("email", null, "Enter an email in the form example@website.com")}
                        </div>
                    )}

                    {step === 1 && (
                        <div>
                            <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Mailing Address</h2>
                            {renderInput("mailingAddress", "Street Address")}
                            <div className="grid grid-cols-3 gap-4">
                                {renderInput("mailingCity", "City")}
                                {renderInput("mailingState", "State")}
                                {renderInput("mailingZipCode", "ZIP Code")}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Facility Info</h2>
                            {renderInput("facilityAddress", "Street Address")}
                            <div className="grid grid-cols-3 gap-4">
                                {renderInput("facilityCity", "City")}
                                {renderInput("facilityState", "State")}
                                {renderInput("facilityZipCode", "ZIP Code")}
                            </div>
                            {renderInput("nearestCrossingStreet")}
                        </div>
                    )}

                    {step === 3 && (
                        <div>
                            <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Electrical Info</h2>
                            {renderInput("accountNumber")}
                            {renderInput("meterNumber")}
                            {renderInput("serviceVoltage")}
                            {renderInput("serviceRating")}
                            {renderInput("estimatedInServiceDate")}
                            {renderInput("currentAnnualConsumption")}
                            {renderInput("estimatedGrossAnnualProduction", null, "kWh/year production")}
                        </div>
                    )}

                    {step === 4 && (
                        <div>
                            <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Inverter Details</h2>
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
                    )}

                    {step === 5 && (
                        <div>
                            <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Attachments</h2>
                            {renderInput("accessibleDisconnect")}
                            {renderInput("exportPower")}
                            {renderInput("maxExportPower")}
                            {renderInput("applicationFeeEnclosed")}

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

                            {/* Site Plan */}
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
                            <h2 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">Contractor & Signature</h2>
                            {renderInput("equipmentInstallationContractor")}
                            {renderInput("electricalContractor")}
                            {renderInput("signatureDate")}
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
                        {step < 6 ? (
                            <button
                                type="button"
                                onClick={() => setStep(step + 1)}
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                            >
                                Next
                            </button>
                        ) : (
                            <div className="fixed bottom-0 left-0 w-1/2 p-4 bg-white dark:bg-gray-900 border-t shadow">
                                <button
                                    type="submit"
                                    disabled={loadingInsights}
                                    className={`w-full py-2 rounded-md font-semibold cursor-pointer ${
                                        loadingInsights
                                            ? "bg-gray-300 text-gray-600 dark:bg-gray-600 dark:text-gray-400 cursor-not-allowed"
                                            : "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
                                    }`}
                                >
                                    {loadingInsights ? "Generating AI Insights..." : "Generate AI Insights"}
                                </button>
                            </div>

                        )}
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
                        {loadingInsights ? "Loading AI Insights..." : "AI Insights will appear here!"}
                    </div>
                )}

                <div className="fixed bottom-0 right-0 w-1/2 p-4 bg-white dark:bg-gray-900 border-t shadow">
                    <PDFDownloadLink
                        document={<InterconnectionFormPDF formData={formData} />}
                        fileName="interconnection_form.pdf"
                    >
                        {({ loading }) => (
                            <button
                                className={`w-full py-2 rounded-md cursor-pointer ${
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
