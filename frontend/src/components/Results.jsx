import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Brain, Package, FileText, Download, Edit3, CheckCircle, 
  ChevronDown, ChevronRight, RefreshCw, Copy, ExternalLink 
} from 'lucide-react'
import ProductCard from './ProductCard'
import PortfolioPreview from './PortfolioPreview'
import PDFGenerator from './PDFGenerator'
import '../styles/results.css'

const STEPS = [
  { id: 1, title: 'Analyze', icon: Brain },
  { id: 2, title: 'Research', icon: Package },
  { id: 3, title: 'Generate', icon: FileText },
  { id: 4, title: 'Export', icon: Download },
]

function Results({ jobData, result, onReset }) {
  const [activeTab, setActiveTab] = useState('analysis')
  const [currentStep, setCurrentStep] = useState(4)
  const [editingField, setEditingField] = useState(null)
  const [editedContent, setEditedContent] = useState({})
  const [showPDF, setShowPDF] = useState(false)

  const analysis = result?.analysis || {}
  const products = result?.products || []
  const features = result?.features || []
  const portfolio = result?.portfolio || {}

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
  }

  const tabs = [
    { id: 'analysis', label: 'Analysis' },
    { id: 'products', label: 'Products' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'export', label: 'Export' },
  ]

  return (
    <section className="results">
      {/* Progress Steps */}
      <div className="results-progress">
        {STEPS.map((step, index) => (
          <div 
            key={step.id} 
            className={`results-step ${index + 1 <= currentStep ? 'active' : ''}`}
          >
            <div className="results-step-icon">
              <step.icon size={18} />
            </div>
            <span className="results-step-title">{step.title}</span>
            {index < STEPS.length - 1 && (
              <div className="results-step-line" />
            )}
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="results-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`results-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="results-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {/* Analysis Tab */}
          {activeTab === 'analysis' && (
            <div className="results-section">
              <div className="results-card">
                <div className="results-card-header">
                  <h3>Job Analysis</h3>
                  <button 
                    className="btn btn-ghost"
                    onClick={() => setEditingField('analysis')}
                  >
                    <Edit3 size={16} /> Edit
                  </button>
                </div>
                
                <div className="results-analysis-grid">
                  <div className="results-analysis-item">
                    <span className="results-label">Title</span>
                    <h4 className="results-value">{analysis.title || 'Frontend Developer'}</h4>
                  </div>
                  
                  <div className="results-analysis-item">
                    <span className="results-label">Timeline</span>
                    <h4 className="results-value">{analysis.timeline || '2-4 weeks'}</h4>
                  </div>
                  
                  <div className="results-analysis-item full-width">
                    <span className="results-label">Requirements</span>
                    <ul className="results-list">
                      {(analysis.requirements || []).map((req, i) => (
                        <li key={i}>
                          <CheckCircle size={14} className="check-icon" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="results-analysis-item full-width">
                    <span className="results-label">Skills Needed</span>
                    <div className="results-tags">
                      {(analysis.skills || []).map((skill, i) => (
                        <span key={i} className="tag tag-accent">{skill}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="results-analysis-item full-width">
                    <span className="results-label">Deliverables</span>
                    <ul className="results-list">
                      {(analysis.deliverables || []).map((del, i) => (
                        <li key={i}>
                          <Package size={14} className="package-icon" />
                          {del}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Products Tab */}
          {activeTab === 'products' && (
            <div className="results-section">
              <div className="results-card">
                <div className="results-card-header">
                  <h3>Similar Products</h3>
                  <span className="results-count">{products.length} found</span>
                </div>
                
                <div className="results-products-grid">
                  {products.map((product, index) => (
                    <ProductCard 
                      key={index} 
                      product={product} 
                      onCopy={handleCopy}
                    />
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="results-card">
                <div className="results-card-header">
                  <h3>Extracted Features</h3>
                </div>
                
                <div className="results-features-list">
                  {features.map((feature, index) => (
                    <div key={index} className="results-feature-item">
                      <div className="results-feature-name">{feature.name}</div>
                      <div className="results-feature-match">
                        <span className="results-feature-requirement">
                          → {feature.job_requirement}
                        </span>
                        <span className={`tag ${feature.priority === 'must-have' ? 'tag-accent' : ''}`}>
                          {feature.priority}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Portfolio Tab */}
          {activeTab === 'portfolio' && (
            <div className="results-section">
              <PortfolioPreview 
                portfolio={portfolio}
                onCopy={handleCopy}
              />
            </div>
          )}

          {/* Export Tab */}
          {activeTab === 'export' && (
            <div className="results-section">
              <PDFGenerator 
                portfolio={portfolio}
                products={products}
                onReset={onReset}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  )
}

export default Results