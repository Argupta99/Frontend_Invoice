import { useState } from "react";

function Upload({setStep, setUploadId}) {

    const [loading, setLoading] = useState(false);

    const handleFileUpload = async (e) => {
        const selectedFile = e.target.files[0];
        if(!selectedFile) return;

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            setLoading(true);
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/upload`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            throw new Error("File upload failed");
        }

        const result = await response.json();
        setUploadId(result.uploadId);
        setStep(2);
        } catch (error) {
            console.error("Error uploading file:", error);
            alert("Failed to upload file. Please try again.");
        }

        finally {
            setLoading(false);
        }
    };

    return (
        <div classname="text-center p-6 bg-gradient-to-br from-purple-100 via-green-50 to-white rounded-xl shadow-md">
         
         <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Step 1: Upload Your Invoice File
         </h2>

         <input 
         type="file"
         accept=".csv,.json"
         onChange={handleFileUpload}
         className="mb-4 border border-gray-300 p-2 rounded cursor-pointer bg-white hover:bg-gray-50"
         />

         {/**file select box */}
         {loading && <p className="text-sm text-gray-500">Uploading file, please wait...</p>}
        </div>

    );
}

export default Upload;