import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isPulsing, setIsPulsing] = useState(true)

  useEffect(() => {
    // Auto-hide banner after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 8000)

    // Pulsing effect for the badge
    const pulseInterval = setInterval(() => {
      setIsPulsing(prev => !prev)
    }, 2000)

    return () => {
      clearTimeout(timer)
      clearInterval(pulseInterval)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const handleTryNow = () => {
    // Scroll to AI features section or open AI builder
    const aiSection = document.getElementById('ai-features')
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 30 
          }}
          className="relative w-full py-3 font-medium text-sm text-center bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border-b border-blue-200/50 shadow-sm backdrop-blur-sm"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                x: [0, 100, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-blue-200/20 to-transparent"
            />
            {/* Floating Particles */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-50"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full opacity-40"
            />
          </div>

          <div className="relative z-10 flex items-center justify-center gap-3 px-4 flex-wrap">
            {/* Animated Badge */}
            <motion.span
              animate={{
                scale: isPulsing ? [1, 1.05, 1] : 1,
                boxShadow: isPulsing 
                  ? ['0 0 0 0 rgba(59, 130, 246, 0.4)', '0 0 0 10px rgba(59, 130, 246, 0)', '0 0 0 0 rgba(59, 130, 246, 0)']
                  : '0 0 0 0 rgba(59, 130, 246, 0)'
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="px-3 py-1.5 rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold text-xs shadow-lg flex items-center gap-1.5 border border-blue-400/30"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-1.5 h-1.5 bg-white rounded-full"
              />
              <span>NEW FEATURE</span>
            </motion.span>

            {/* Main Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-blue-800 font-semibold flex items-center gap-2 flex-wrap justify-center"
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 3 
                }}
                className="text-base"
              >
                🤖
              </motion.span>
              <span className="text-center">
                AI-Powered Resume Builder Just Launched!
              </span>
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatDelay: 3,
                  delay: 1 
                }}
                className="text-base"
              >
                ⚡
              </motion.span>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex items-center gap-4 text-xs text-blue-600"
            >
              <span className="flex items-center gap-1">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ✨
                </motion.span>
                Smart Content
              </span>
              <span className="flex items-center gap-1">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                >
                  🎯
                </motion.span>
                ATS Optimized
              </span>
              <span className="flex items-center gap-1">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                >
                  ⚡
                </motion.span>
                Instant Generation
              </span>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={handleTryNow}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-1.5 rounded-lg border border-blue-300 text-blue-700 hover:text-blue-800 font-medium text-xs transition-all duration-200 backdrop-blur-sm bg-white/50 hover:bg-blue-50 flex items-center gap-2"
            >
              <span>Try AI Builder</span>
              <motion.svg
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                width="12" 
                height="12" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </motion.svg>
            </motion.button>

            {/* Close Button */}
            <motion.button
              onClick={handleClose}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                color: "rgb(30, 64, 175)"
              }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 rounded-full text-blue-500 hover:text-blue-700 transition-colors duration-200"
              aria-label="Close banner"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
              </svg>
            </motion.button>
          </div>

          {/* Progress Bar */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 8, ease: "linear" }}
            className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-sky-500 to-indigo-500 origin-left rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Banner