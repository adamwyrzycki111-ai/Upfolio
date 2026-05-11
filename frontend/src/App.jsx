import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import JobInput from './components/JobInput'
import Results from './components/Results'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [jobData, setJobData] = useState(null)
  const [analysisResult, setAnalysisResult] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleAnalyze = async (data) => {
    setIsLoading(true)
    setJobData(data)
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ job_text: data.jobText, job_url: data.jobUrl })
      })
      
      const result = await response.json()
      setAnalysisResult(result)
      setShowResults(true)
    } catch (error) {
      console.error('Analysis failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setShowResults(false)
    setJobData(null)
    setAnalysisResult(null)
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        {!showResults ? (
          <Hero>
            <JobInput onAnalyze={handleAnalyze} isLoading={isLoading} />
          </Hero>
        ) : (
          <Results 
            jobData={jobData}
            result={analysisResult}
            onReset={handleReset}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App