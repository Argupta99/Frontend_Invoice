import { useState } from "react";

function Analyze({ uploadId, setReport, setStep }) {
    const [loading, setLoading] = useState(false);

    const handleAnalyze = async () => {
        setLoading(true);

        
        try {
           
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/upload/analyze`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    uploadId: uploadId,
                    questionnaire: { webhooks: true, sandbox_env: true, retries: false }
                }),
            });

            if (!res.ok) {
                throw new Error("Analysis failed. The server responded with an error.");
            }

            const data = await res.json();
            setReport(data);
            setStep(3);

        
        } catch (error) {
            console.error("Error during analysis:", error);
            alert("Failed to analyze file. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">
                Step 2: Analyze Your Uploaded File
            </h2>
            <button
                onClick={handleAnalyze}
                disabled={loading}
                className="bg-gradient-to-r from-purple-500 to-green-400 text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90 disabled:opacity-50"
            >
                {loading ? 'Analyzing...' : 'Run Analysis'}
            </button>
            {loading && <p className="text-sm text-gray-500 mt-2">Analyzing file, please wait...</p>}
        </div>
    );
}

export default Analyze;