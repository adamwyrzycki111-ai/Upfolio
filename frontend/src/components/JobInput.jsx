import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Sparkles, AlertCircle } from 'lucide-react'
import '../styles/jobinput.css'

function JobInput({ onAnalyze, isLoading }) {
  const [jobText, setJobText] = useState('')
  const [jobUrl, setJobUrl] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!jobText.trim()) {
      setError('Please paste a job posting to analyze')
      return
    }
    
    if (jobText.length < 50) {
      setError('Job posting seems too short. Please provide more details.')
      return
    }
    
    setError('')
    onAnalyze({ jobText, jobUrl })
  }

  const sampleJobs = [
    "Build a React dashboard with charts and real-time data updates...",
    "Need a full-stack developer for e-commerce web application...",
    "Create a mobile-first booking platform with payment integration..."
  ]

  return (
    <motion.div 
      className="job-input-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <form onSubmit={handleSubmit} className="job-input-form">
        <div className="job-input-header">
          <Sparkles className="job-input-icon" />
          <span>Paste Your Job Posting</span>
        </div>

        <div className="job-input-group">
          <textarea
            value={jobText}
            onChange={(e) => setJobText(e.target.value)}
            placeholder="Paste the full job posting description here...

Example:
We need an experienced React developer to build our SaaS dashboard. 
The app should include:
- User authentication
- Real-time data visualization
- REST API integration
- Responsive design"
            className="job-input-textarea"
            rows={8}
            disabled={isLoading}
          />
          <div className="job-input-counter">
            {jobText.length} characters
          </div>
        </div>

        <div className="job-input-group">
          <input
            type="url"
            value={jobUrl}
            onChange={(e) => setJobUrl(e.target.value)}
            placeholder="Optional: Job posting URL"
            className="job-input-url"
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className="job-input-error">
            <AlertCircle size={16} />
            {error}
          </div>
        )}

        <div className="job-input-samples">
          <span className="job-input-samples-label">Quick fill:</span>
          {sampleJobs.map((sample, index) => (
            <button
              key={index}
              type="button"
              className="job-input-sample-btn"
              onClick={() => setJobText(sample)}
              disabled={isLoading}
            >
              Sample {index + 1}
            </button>
          ))}
        </div>

        <button 
          type="submit" 
          className="btn btn-primary job-input-submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="loading-spinner-small" />
              Analyzing...
            </>
          ) : (
            <>
              <Send size={18} />
              Analyze Job
            </>
          )}
        </button>
      </form>
    </motion.div>
  )
}

export default JobInput