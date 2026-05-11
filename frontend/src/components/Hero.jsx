import { motion } from 'framer-motion'
import { ArrowRight, Zap, Target, FileText } from 'lucide-react'
import '../styles/hero.css'

function Hero({ children }) {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-gradient" />
        <div className="hero-glow" />
      </div>
      
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="hero-title">
            Turn Any Upwork Job Into a
            <span className="text-gradient"> Professional Portfolio</span>
          </h1>
          <p className="hero-subtitle">
            Paste a job posting and let AI analyze requirements, find similar products, 
            and generate portfolio descriptions that win客户端s.
          </p>
        </motion.div>

        <motion.div
          className="hero-features"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="hero-feature">
            <Zap className="hero-feature-icon" />
            <span>AI Analysis</span>
          </div>
          <div className="hero-feature">
            <Target className="hero-feature-icon" />
            <span>Similar Products</span>
          </div>
          <div className="hero-feature">
            <FileText className="hero-feature-icon" />
            <span>PDF Export</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero