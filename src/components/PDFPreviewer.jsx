import React, { useEffect, useState } from "react";
import { fillPdf } from "./InterconnectionFormPDF.jsx";

const PDFPreviewer = ({ formData }) => {
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const generatePdf = async () => {
            const blob = await fillPdf(formData);
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
            className="w-full h-full border rounded-md mt-4 shadow"
        />
    ) : (
        <p className="text-gray-200">Generating preview...</p>
    );
};

export default PDFPreviewer;
