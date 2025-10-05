import { useState } from 'react'
import Upload from './components/Upload';
import Analyze from './components/Analyze';
import Report from './components/Report'; 
import './App.css'

function App() {
  
  const [step, setStep] = useState(1);
  const [uploadId, setUploadId] = useState("");
  const [report, setReport] = useState(null);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-green-300 to-blue-100 text-gray-800'>
      <h1 className='text-4xl font-bold mb-8 text-white drop-shadow-lg'>
        Invoice Report Analyzer
      </h1>
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        

        {step === 1 && (
          <Upload setStep={setStep} setUploadId={setUploadId} />
        )}
        
        {step === 2 && (
          <Analyze uploadId={uploadId} setStep={setStep} setReport={setReport} />
        )}
        

        {step === 3 && report && <Report report={report} />}
        
      </div>
    

    </div>
  )
}

export default App
