import React, { useEffect, useState } from "react";
import { pdf } from "@react-pdf/renderer";
import InterconnectionFormPDF from "./InterconnectionFormPDF.jsx";

const PDFPreviewer = ({ formData }) => {
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const generatePdf = async () => {
            const blob = await pdf(<InterconnectionFormPDF formData={formData} />).toBlob();
            const blobUrl = URL.createObjectURL(blob);
            setUrl(blobUrl);
        };

        generatePdf();

        return () => {
            if (url) URL.revokeObjectURL(url); 
        };
    }, [formData]);

    return url ? (
        <iframe
            src={url}
            title="PDF Preview"
            width="100%"
            height="800px"
            className="border rounded-md mt-4 shadow"
        />
    ) : (
        <p>Generating preview...</p>
    );
};

export default PDFPreviewer;
