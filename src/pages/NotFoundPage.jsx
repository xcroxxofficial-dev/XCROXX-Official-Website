import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHome, FaExclamationTriangle } from 'react-icons/fa'

export default function NotFoundPage() {
  return (
    <main className="pt-[104px] pb-20 min-h-[90vh] bg-surface flex items-center justify-center relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red/5 rounded-full mix-blend-multiply filter blur-[100px] animate-floaty"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-ink/5 rounded-full mix-blend-multiply filter blur-[80px] animate-floaty" style={{ animationDelay: '2s' }}></div>

      <div className="container-xc relative z-10 text-center px-4 py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="bg-white/80 backdrop-blur-xl border border-white p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-ink/5 max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-24 h-24 bg-red/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-red transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <FaExclamationTriangle className="text-5xl drop-shadow-sm" />
            </div>
            
            <h1 className="text-8xl md:text-[150px] font-black font-heading text-ink leading-none mb-4 tracking-tighter drop-shadow-sm">
              4<span className="text-red">0</span>4
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-6">
              Page Not Found
            </h2>
            
            <p className="text-charcoal/70 text-lg md:text-xl mb-12 max-w-lg mx-auto font-body">
              Oops! The page you are looking for doesn't exist, has been removed, or is temporarily unavailable.
            </p>
            
            <Link to="/" className="btn-primary inline-flex items-center gap-3 group px-10 py-5 text-lg shadow-lg shadow-red/20">
              <FaHome className="text-xl group-hover:scale-110 group-hover:-translate-y-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
