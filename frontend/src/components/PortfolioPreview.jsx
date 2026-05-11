import { useState } from 'react'
import { motion } from 'framer-motion'
import { Edit3, Copy, CheckCircle, Clock, Star } from 'lucide-react'
import '../styles/portfoliopreview.css'

function PortfolioPreview({ portfolio, onCopy }) {
  const [editing, setEditing] = useState(null)
  const [editedContent, setEditedContent] = useState('')
  const entries = portfolio?.entries || []

  const handleEdit = (field, value) => {
    setEditing(field)
    setEditedContent(value)
  }

  const handleSave = () => {
    // In a real app, this would update the portfolio data
    setEditing(null)
  }

  return (
    <div className="portfolio-preview">
      {/* Summary */}
      <div className="results-card">
        <div className="results-card-header">
          <h3>Portfolio Summary</h3>
          <button 
            className="btn btn-ghost"
            onClick={() => onCopy(portfolio.summary || '')}
          >
            <Copy size={16} /> Copy
          </button>
        </div>

        <div className="portfolio-summary">
          <p>{portfolio.summary || 'Generate portfolio descriptions based on your experience and the job requirements.'}</p>
        </div>
      </div>

      {/* Project Entries */}
      <div className="portfolio-entries">
        <h3 className="portfolio-entries-title">Portfolio Projects</h3>
        
        {entries.length === 0 ? (
          <div className="portfolio-empty">
            <p>No portfolio entries generated yet.</p>
          </div>
        ) : (
          entries.map((entry, index) => (
            <motion.div 
              key={index}
              className="portfolio-entry"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="portfolio-entry-header">
                <h4>{entry.title}</h4>
                <button 
                  className="btn btn-ghost"
                  onClick={() => onCopy(entry.description)}
                >
                  <Copy size={14} />
                </button>
              </div>

              <div className="portfolio-entry-description">
                <p>{entry.description}</p>
              </div>

              <div className="portfolio-entry-meta">
                <div className="portfolio-meta-item">
                  <Clock size={14} />
                  <span>{entry.duration}</span>
                </div>
              </div>

              <div className="portfolio-entry-tech">
                {entry.technologies?.map((tech, i) => (
                  <span key={i} className="tag tag-accent">{tech}</span>
                ))}
              </div>

              <div className="portfolio-entry-metrics">
                {entry.metrics?.map((metric, i) => (
                  <div key={i} className="portfolio-metric">
                    <CheckCircle size={12} />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))
        )}
      </div>

      {/* Quick Actions */}
      <div className="portfolio-actions">
        <button 
          className="btn btn-secondary"
          onClick={() => onCopy(JSON.stringify(portfolio, null, 2))}
        >
          <Copy size={16} />
          Copy All as JSON
        </button>
      </div>
    </div>
  )
}

export default PortfolioPreview