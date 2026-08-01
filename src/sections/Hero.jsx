import { motion } from 'framer-motion'
import { FaPlay, FaArrowRight, FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  const scrollTo = (href) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-ink">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-ink via-ink/90 to-transparent" />
      </div>

      {/* floating accent shapes */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:block absolute top-1/4 right-1/2 w-40 h-40 rounded-full bg-red/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:block absolute bottom-1/4 left-1/4 w-56 h-56 rounded-full bg-gold/10 blur-3xl"
      />

      <div className="relative z-10 container-xc px-6 md:px-10 lg:px-16 pt-32 pb-24 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Text Content */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="eyebrow !text-white/90 inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            Since 2075 &middot; Rupandehi, Nepal
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-white font-extrabold leading-[1.1] text-4xl sm:text-5xl md:text-6xl max-w-2xl"
          >
            Crafting Quality Footwear
            <span className="block text-red">with Precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-7 text-white/70 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Universal Shoes Industries (XCroxx) manufactures sports, casual, school,
            industrial and kids' footwear at scale — trusted by dealers, distributors
            and institutions across Nepal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button onClick={() => scrollTo('#products')} className="btn-primary shadow-lg shadow-red/20 hover:shadow-red/40 hover:-translate-y-1 transition-all">
              Explore Products <FaArrowRight size={14} />
            </button>
            <button onClick={() => scrollTo('#factory')} className="inline-flex items-center gap-3 text-white group px-4 py-3 rounded-full hover:bg-white/5 transition-colors">
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-red group-hover:border-red transition-all">
                <FaPlay size={12} className="ml-0.5 text-white/90 group-hover:text-white" />
              </span>
              <span className="text-sm font-semibold tracking-wide">Watch Factory</span>
            </button>
          </motion.div>
        </div>

        {/* Right 3D Video Frame */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 20, rotateX: 10 }}
          animate={{ opacity: 1, x: 0, rotateY: -15, rotateX: 5 }}
          whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          style={{ transformPerspective: 1200 }}
          className="relative mx-auto w-full max-w-lg lg:max-w-xl xl:max-w-2xl mt-10 lg:mt-0 cursor-pointer group"
        >
          {/* 3D Frame Styling */}
          <div className="relative p-3 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-white/5 to-white/0 border border-white/20 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md">
            
            {/* Background Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-red/30 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none" />
            
            {/* Inner Frame */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-black shadow-inner">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 scale-105 group-hover:scale-100"
              >
                <source src="/video/video.mp4" type="video/mp4" />
                <img
                  src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80"
                  alt="XCroxx footwear manufacturing factory floor"
                  className="w-full h-full object-cover"
                />
              </video>
              
              {/* Glass reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none mix-blend-overlay" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-red/90 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-xl shadow-red/50 backdrop-blur-md">
                  <FaPlay size={20} className="ml-1" />
                </div>
              </div>
              
              {/* Decorative hardware accents */}
              <div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-red shadow-[0_0_12px_rgba(255,0,0,0.8)]" />
              <div className="absolute top-5 right-5 w-1.5 h-1.5 rounded-full bg-white/40" />
              <div className="absolute bottom-5 left-5 w-1.5 h-1.5 rounded-full bg-white/40" />
              <div className="absolute bottom-5 right-5 w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
            
            {/* Base shadow for 3D grounding effect */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-black/80 blur-2xl rounded-[100%] pointer-events-none" />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="text-[11px] tracking-[0.2em] uppercase font-semibold">Scroll</span>
        <motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <FaChevronDown />
        </motion.span>
      </motion.button>
    </section>
  )
}
