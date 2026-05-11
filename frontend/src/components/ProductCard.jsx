import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Copy, Maximize2 } from 'lucide-react'
import '../styles/productcard.css'

function ProductCard({ product, onCopy }) {
  const [expanded, setExpanded] = useState(false)

  const handleCopy = (e) => {
    e.stopPropagation()
    onCopy(product.name)
  }

  return (
    <>
      <motion.div 
        className="product-card"
        whileHover={{ y: -4 }}
        onClick={() => setExpanded(true)}
      >
        <div className="product-card-image">
          <img 
            src={product.screenshot} 
            alt={product.name}
            loading="lazy"
          />
          <div className="product-card-overlay">
            <Maximize2 size={20} />
          </div>
        </div>
        
        <div className="product-card-content">
          <div className="product-card-header">
            <h4>{product.name}</h4>
            <span className="product-card-similarity">
              {product.similarity}% match
            </span>
          </div>
          
          <p className="product-card-description">
            {product.description}
          </p>
          
          <div className="product-card-features">
            {product.features?.slice(0, 3).map((feature, i) => (
              <span key={i} className="tag">{feature}</span>
            ))}
          </div>
          
          <div className="product-card-actions">
            <a 
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="product-card-link"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={14} />
              Visit
            </a>
            <button 
              className="product-card-copy"
              onClick={handleCopy}
            >
              <Copy size={14} />
              Copy
            </button>
          </div>
        </div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {expanded && (
          <motion.div 
            className="product-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(false)}
          >
            <motion.div 
              className="product-modal-content"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="product-modal-close"
                onClick={() => setExpanded(false)}
              >
                ×
              </button>
              
              <img 
                src={product.screenshot} 
                alt={product.name}
                className="product-modal-image"
              />
              
              <div className="product-modal-info">
                <div className="product-modal-header">
                  <h3>{product.name}</h3>
                  <span className="product-card-similarity">
                    {product.similarity}% match
                  </span>
                </div>
                
                <p>{product.description}</p>
                
                <div className="product-modal-features">
                  <h4>Features</h4>
                  <div className="tags">
                    {product.features?.map((feature, i) => (
                      <span key={i} className="tag tag-accent">{feature}</span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <ExternalLink size={16} />
                  Visit Website
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProductCard