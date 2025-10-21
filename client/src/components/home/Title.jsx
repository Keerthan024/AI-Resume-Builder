import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'

const Title = ({ title, description, centered = true, className = '' }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      {/* Title with Gradient */}
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 via-slate-800 to-blue-700 bg-clip-text text-transparent mb-4 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p 
          className={`text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl ${
            centered ? 'mx-auto' : ''
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}

      {/* Optional Decorative Line */}
      {centered && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mt-6"
        />
      )}
    </motion.div>
  )
}

// Alternative version with icon
export const TitleWithIcon = ({ title, description, icon, centered = true }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : 'text-left'}`}
    >
      {/* Icon */}
      {icon && (
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl text-white shadow-lg shadow-blue-500/25 mb-6"
        >
          {icon}
        </motion.div>
      )}

      {/* Title */}
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 via-slate-800 to-blue-700 bg-clip-text text-transparent mb-4 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p 
          className={`text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl ${
            centered ? 'mx-auto' : ''
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

// Compact version for sections with less emphasis
export const SubTitle = ({ title, description, centered = true }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${centered ? 'text-center' : 'text-left'}`}
    >
      <motion.h3 
        className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h3>

      {description && (
        <motion.p 
          className={`text-slate-600 leading-relaxed max-w-2xl ${
            centered ? 'mx-auto' : ''
          }`}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  )
}

export default Title