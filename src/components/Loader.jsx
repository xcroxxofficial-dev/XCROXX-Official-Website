import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center gap-8"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Logo Image */}
            <motion.img 
              src="/logo.png" 
              alt="XCroxx Logo" 
              className="h-16 md:h-24 w-auto drop-shadow-2xl z-10 relative"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Glow effect behind logo */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-red/20 blur-3xl rounded-full z-0"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <div className="flex flex-col items-center gap-4">
            <div className="w-56 h-[3px] bg-white/10 overflow-hidden rounded-full relative">
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-red to-transparent"
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-semibold"
            >
              Loading Experience
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
