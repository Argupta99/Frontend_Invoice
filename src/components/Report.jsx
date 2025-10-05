function Report({ report }) {
  // Function to copy the shareable link
  const copyLink = () => {
    
    const link = `${import.meta.env.VITE_API_BASE_URL}/upload/report/${report.reportId}`;
    navigator.clipboard.writeText(link).then(() => {
      alert("Link copied to clipboard!");
    });
  };

  return (
    <div className="text-left space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Step 3: Report Summary</h2>
        <div className="space-y-3 text-gray-800">
            <p>📊 <b>Data Score:</b> {report.scores.data}%</p>
            <p>📋 <b>Coverage Score:</b> {report.scores.coverage}%</p>
            <p>🧠 <b>Rules Score:</b> {report.scores.rules}%</p>
            <p>🧩 <b>Posture Score:</b> {report.scores.posture}%</p>
            <p className="font-bold">⭐ <b>Overall Score:</b> {report.scores.overall}%</p>
        </div>
      </div>
      
      
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Field Coverage</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-green-700">Matched</h4>
            <ul className="list-disc list-inside">{report.coverage.matched.map(f => <li key={f}>{f}</li>)}</ul>
          </div>
          <div>
            <h4 className="font-semibold text-amber-700">Close Matches</h4>
            <ul className="list-disc list-inside">{report.coverage.close.map(c => <li key={c.target}>{c.candidate} → {c.target}</li>)}</ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-700">Missing</h4>
            <ul className="list-disc list-inside">{report.coverage.missing.map(f => <li key={f}>{f}</li>)}</ul>
          </div>
        </div>
      </div>

      {/*Rule Findings panel  */}
      <div>
        <h3 className="text-lg font-semibold mb-2 text-gray-700">Rule Findings</h3>
        <ul className="space-y-1 text-sm">
          {report.ruleFindings.map((finding, index) => (
            <li key={index} className={finding.ok ? 'text-green-800' : 'text-red-800'}>
              {finding.ok ? 'PASS:' : 'FAIL:'} {finding.rule}
            </li>
          ))}
        </ul>
      </div>

      {/*Action Buttons added*/}
      <div className="mt-6 flex space-x-4">
        <a
          href={`${import.meta.env.VITE_API_BASE_URL}/upload/report/${report.reportId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-purple-700"
        >
          View Full JSON Report
        </a>
        <button onClick={copyLink} className="underline text-purple-700">
            Copy Shareable Link
        </button>
      </div>
    </div>
  );
}

export default Report;
