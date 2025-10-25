import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { FileTextIcon, SparklesIcon } from 'lucide-react'

const Loader = ({ 
  size = 'default', 
  text = 'Loading...',
  type = 'spinner'
}) => {
  // Size variants
  const sizeVariants = {
    small: {
      container: 'h-40',
      spinner: 'size-8 border-2',
      icon: 'size-4',
      text: 'text-sm'
    },
    default: {
      container: 'h-screen',
      spinner: 'size-12 border-3',
      icon: 'size-6',
      text: 'text-base'
    },
    large: {
      container: 'h-screen',
      spinner: 'size-16 border-4',
      icon: 'size-8',
      text: 'text-lg'
    }
  }

  // Loading messages for variety
  const loadingMessages = [
    "Crafting your resume...",
    "Optimizing content...",
    "Applying professional formatting...",
    "Almost ready...",
    "Preparing your masterpiece..."
  ]

  const [currentMessage, setCurrentMessage] = React.useState(text)

  React.useEffect(() => {
    if (text === 'Loading...') {
      const interval = setInterval(() => {
        setCurrentMessage(loadingMessages[Math.floor(Math.random() * loadingMessages.length)])
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [text])

  if (type === 'spinner') {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex flex-col items-center justify-center ${sizeVariants[size].container} bg-gradient-to-br from-slate-50 to-blue-50/30`}
      >
        {/* Animated Spinner */}
        <div className="relative mb-6">
          {/* Outer rotating ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className={`${sizeVariants[size].spinner} border-blue-500/20 border-t-blue-600 rounded-full`}
          />
          
          {/* Inner pulsing circle */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className={`${sizeVariants[size].spinner.split(' ')[0]} border-transparent bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center`}>
              <motion.div
                animate={{ 
                  rotate: [-10, 10, -10],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <FileTextIcon className={`${sizeVariants[size].icon} text-white`} />
              </motion.div>
            </div>
          </motion.div>

          {/* Floating particles */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                x: [
                  [0, 20, 0][i % 3],
                  [0, -20, 0][i % 3],
                  0
                ],
                y: [
                  [0, -20, 0][i % 3],
                  [0, 20, 0][i % 3],
                  0
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.6,
                ease: "easeInOut"
              }}
              style={{
                left: '50%',
                top: '50%',
                marginLeft: -2,
                marginTop: -2
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center"
        >
          <motion.p
            key={currentMessage}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`font-medium text-slate-700 ${sizeVariants[size].text} mb-2`}
          >
            {currentMessage}
          </motion.p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-slate-400 text-sm"
          >
            This will just take a moment
          </motion.div>
        </motion.div>

        {/* Progress bar for larger loaders */}
        {size === 'large' && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60%" }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full max-w-xs"
          />
        )}
      </motion.div>
    )
  }

  // Pulse loader variant
  if (type === 'pulse') {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`flex flex-col items-center justify-center ${sizeVariants[size].container} bg-white/50 backdrop-blur-sm`}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl shadow-2xl shadow-blue-500/25 mb-4`}
        >
          <SparklesIcon className={`${sizeVariants[size].icon} text-white`} />
        </motion.div>
        
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className={`font-medium text-slate-700 ${sizeVariants[size].text}`}
        >
          {currentMessage}
        </motion.p>
      </motion.div>
    )
  }

  // Skeleton loader variant
  if (type === 'skeleton') {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`flex items-center justify-center ${sizeVariants[size].container} bg-slate-50`}
      >
        <div className="flex items-center gap-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
              className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
            />
          ))}
        </div>
      </motion.div>
    )
  }

  // Default spinner (fallback)
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`flex items-center justify-center ${sizeVariants[size].container} bg-slate-50`}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className={`${sizeVariants[size].spinner} border-slate-400 border-t-transparent rounded-full`}
      />
    </motion.div>
  )
}

// Quick loader components for common use cases
export const PageLoader = () => <Loader type="spinner" size="large" />
export const InlineLoader = () => <Loader type="spinner" size="small" />
export const CardLoader = () => <Loader type="pulse" size="small" text="Loading content..." />
export const ButtonLoader = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    className="size-4 border-2 border-white border-t-transparent rounded-full"
  />
)

export default Loader