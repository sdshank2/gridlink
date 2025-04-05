import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import "./form.css";

const generatePdf = async (formData) => {
    console.log("Generating PDF with data:", formData);
    const existingPdfBytes = await fetch("/src/assets/nj-level-1.pdf").then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const form = pdfDoc.getForm();

    form.getTextField("Name").setText(formData.name);
    form.getTextField("Title").setText(formData.title);
    form.getTextField("Mailing Address").setText(formData.mailingAddress);
    form.getTextField("State").setText(formData.mailingState);
    form.getTextField("City").setText(formData.mailingCity);
    form.getTextField("Zip Code").setText(formData.mailingZipCode);
    form.getTextField("Telephone Daytime").setText(formData.phoneNumber);
    form.getTextField("Email Address").setText(formData.email);
    //form.getTextField("ApplicationType").setText(formData.applicationType);
    form.getTextField("Facility Address").setText(formData.facilityAddress);
    form.getTextField("City_3").setText(formData.facilityCity);
    form.getTextField("State_3").setText(formData.facilityState);
    form.getTextField("Zip Code_3").setText(formData.facilityZipCode);
    form.getTextField("Nearest Crossing Street").setText(formData.nearestCrossingStreet);
    form.getTextField("Account").setText(formData.accountNumber);
    form.getTextField("Meter").setText(formData.meterNumber);
    form.getTextField("Service Voltage 1").setText(formData.serviceVoltage);
    form.getTextField("VAC Service Rating").setText(formData.serviceRating);
    form.getTextField("Service Voltage 2").setText(formData.estimatedInServiceDate);
    form.getTextField("Current Annual Consumption").setText(formData.currentAnnualConsumption);
    form.getTextField("kWh  Est Gross Annual Production").setText(formData.estimatedGrossAnnualProduction);
    form.getTextField("Dropdown6").setText(formData.energySource);
    form.getTextField("Total DC Source Rating").setText(formData.totalDCSourceRating);
    form.getTextField("Inverter Manufacturer").setText(formData.inverterManufacturer);
    form.getTextField("Model Number of Inverter").setText(formData.inverterModelNumber);
    form.getTextField("Number Of Phases").setText(formData.numberOfPhases);
    form.getTextField("Number Of Inverters").setText(formData.numberOfInverters);
    form.getTextField("Total of Inverter Ratings").setText(formData.totalInverterRatings);
    //form.getTextField("InverterCertifications").setText(formData.inverterCertifications);
    form.getTextField("Inverter Voltage").setText(formData.inverterVoltage);
    form.getTextField("Dropdown1").setText(formData.oneLineDiagAttached);
    form.getTextField("Dropdown2").setText(formData.sitePlanAttached);
    form.getTextField("Dropdown3").setText(formData.accessibleDisconnect);
    form.getTextField("Dropdown4").setText(formData.exportPower);
    form.getTextField("If Yes Estimated Maximum").setText(formData.maxExportPower);
    form.getTextField("Dropdown5").setText(formData.applicationFeeEnclosed);
    //form.getTextField("EquipmentInstallationContractor").setText(formData.equipmentInstallationContractor);
    //form.getTextField("ElectricalContractor").setText(formData.electricalContractor);
    //form.getTextField("SignatureDate").setText(formData.signatureDate);

    const pdfBytes = await pdfDoc.save();

    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Completed_Application_Form.pdf";
    link.click();
};

const ApplicationForm = () => {
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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
            setFormData({...formData, [name]: value,});
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        await generatePdf(formData);
    };

    return (
        <form className="form-bg" onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input className="form-field" type="text" name="name" value={formData.name} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Title:</label>
                <input className="form-field" type="text" name="title" value={formData.title} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Mailing Address:</label>
                <input className="form-field" type="text" name="mailingAddress" value={formData.mailingAddress} onChange={handleInputChange}/>
            </div>
            <div>
                <label>City:</label>
                <input className="form-field" type="text" name="mailingCity" value={formData.mailingCity} onChange={handleInputChange}/>
                <label>State:</label>
                <input className="form-field" type="text" name="mailingState" value={formData.mailingState} onChange={handleInputChange}/>
                <label>Zip Code:</label>
                <input className="form-field" type="text" name="mailingZipCode" value={formData.mailingZipCode} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Phone #:</label>
                <input className="form-field"  type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Email Address:</label>
                <input className="form-field" type="email" name="email" value={formData.email} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Application Type</label>
                <select className="form-field" name="applicationType" value={formData.energySource} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="solarPv">New</option>
                    <option value="wind">Revision to Open Application</option>
                    <option value="hydro">Addition to Existing Generation</option>
                    <option value="biogas">Community Solar</option>
                </select>
            </div>
            <div>
                <label>Facility Address:</label>
                <input className="form-field" type="text" name="facilityAddress" value={formData.facilityAddress} onChange={handleInputChange}/>
            </div>
            <div>
                <label>City:</label>
                <input className="form-field" type="text" name="facilityCity" value={formData.facilityCity} onChange={handleInputChange}/>
                <label>State:</label>
                <input className="form-field" type="text" name="facilityState" value={formData.facilityState} onChange={handleInputChange}/>
                <label>Zip Code:</label>
                <input className="form-field" type="text" name="facilityZipCode" value={formData.facilityZipCode} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Nearest Crossing Street:</label>
                <input className="form-field" type="text" name="nearestCrossingStreet" value={formData.nearestCrossingStreet} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Account #:</label>
                <input className="form-field" type="text" name="accountNumber" value={formData.accountNumber} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Meter #:</label>
                <input className="form-field" type="text" name="meterNumber" value={formData.meterNumber} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Service Voltage (V):</label>
                <input className="form-field" type="text" name="serviceVoltage" value={formData.serviceVoltage} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Service Rating (A):</label>
                <input className="form-field" type="text" name="serviceRating" value={formData.serviceRating} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Estimated In Service Date:</label>
                <input className="form-field" type="date" name="estimatedInServiceDate" value={formData.estimatedInServiceDate} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Current Annual Consumption (kWh):</label>
                <input className="form-field" type="number" name="currentAnnualConsumption" value={formData.currentAnnualConsumption} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Estimated Gross Annual Production (kWh):</label>
                <input className="form-field"  type="number" name="estimatedGrossAnnualProduction" value={formData.estimatedGrossAnnualProduction} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Energy Source:</label>
                <select className="form-field" name="energySource" value={formData.energySource} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="solarPv">Solar PV</option>
                    <option value="wind">Wind</option>
                    <option value="hydro">Hydro</option>
                    <option value="biogas">Biogas</option>
                    <option value="otherRenewable">Other Class 1 Renewable</option>
                    <option value="otherNonRenewable">Other Non-Class 1 Fuel</option>
                </select>
            </div>
            <div>
                <label>Total DC Source Rating (kW):</label>
                <input className="form-field" type="number" name="totalDCSourceRating" value={formData.totalDCSourceRating} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Inverter Manufacturer:</label>
                <input className="form-field" type="text" name="inverterManufacturer" value={formData.inverterManufacturer} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Model Number of Inverter:</label>
                <input className="form-field" type="text" name="inverterModelNumber" value={formData.inverterModelNumber} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Number of Phases:</label>
                <input className="form-field" type="number" name="numberOfPhases" value={formData.numberOfPhases} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Number of Inverters:</label>
                <input className="form-field" type="number" name="numberOfInverters" value={formData.numberOfInverters} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Total of Inverter Ratings (kW):</label>
                <input className="form-field" type="number" name="totalInverterRatings" value={formData.totalInverterRatings} onChange={handleInputChange}/>
            </div>
            <div>
                <label>Inverter Certifications:</label>
                <select className="form-field" name="inverterCertifications" value={formData.inverterCertifications} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="UL1741sa">UL1741SA</option>
                    <option value="UL1741SB">UL1741SB</option>
                    <option value="Other">Other (Attach Explanation)</option>
                </select>
            </div>
            <div>
                <label>Inverter Voltage (V):</label>
                <input className="form-field" type="number" name="inverterVoltage" value={formData.inverterVoltage} onChange={handleInputChange}/>
            </div>
            <div>
                <label>One-Line Diagram Attached?</label>
                <select className="form-field" name="oneLineDiagAttached" value={formData.oneLineDiagAttached} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </select>
            </div>
            <div>
                <label>Site Plan Attached?</label>
                <select className="form-field" name="sitePlanAttached" value={formData.sitePlanAttached} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </select>
            </div>
            <div>
                <label>Accessible Disconnect?</label>
                <select className="form-field" name="accessibleDisconnect" value={formData.accessibleDisconnect} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </select>
            </div>
            <div>
                <label>Do you plan to export power?</label>
                <select className="form-field" name="exportPower" value={formData.exportPower} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </select>
            </div>
            {formData.exportPower === 'Y' && (
                <div>
                    <label>Estimated Maximum Export Power (kW):</label>
                    <input className="form-field" type="number" name="maxExportPower" value={formData.maxExportPower} onChange={handleInputChange}/>
                </div>
            )}
            <div>
                <label>Application Fee Enclosed?</label>
                <select className="form-field" name="applicationFeeEnclosed" value={formData.applicationFeeEnclosed} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </select>
            </div>
            <div>
                <label>Equipment Installation Contractor Applicable?</label>
                <select className="form-field" name="equipmentInstallationContractor" value={formData.equipmentInstallationContractor} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </select>
            </div>
            <div>
                <label>Electrical Contractor Applicable?</label>
                <select className="form-field" name="electricalContractor" value={formData.electricalContractor} onChange={handleInputChange}>
                    <option value="">Select</option>
                    <option value="Y">Yes</option>
                    <option value="N">No</option>
                </select>
            </div>
            <div>
                <label>Attach Signature File: </label>
                <input className="form-field" type="file" name="signatureFile" onChange={(e) => setFormData({ ...formData, signatureFile: e.target.files[0] })}/>
            </div>
            <div>
                <label>Signature Date:</label>
                <input className="form-field" type="date" name="signatureDate" value={formData.signatureDate} onChange={handleInputChange}/>
            </div>
            <button className="border-2 p-2 rounded-3xl" type="submit">Submit</button>
        </form>
    );
};

export default ApplicationForm;
