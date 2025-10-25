import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Banner from '../components/home/Banner'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Testimonial from '../components/home/Testimonial'
import CallToAction from '../components/home/CallToAction'
import Contact from '../components/home/Contact'
import Footer from '../components/home/Footer'

const Home = () => {
  const pageVariants = {
    initial: { 
      opacity: 0,
      y: 20
    },
    in: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    out: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="min-h-screen bg-white antialiased"
    >
      {/* Enhanced Background Pattern with Animation */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-100/40 to-cyan-100/30 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-100/30 to-purple-100/20 rounded-full blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: 0.4, ease: "easeOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-slate-100/10 to-gray-100/10 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(100, 116, 139, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
          }}
        />
      </div>

      {/* Smooth Scrolling Anchor */}
      <div id="top" />
      
      {/* Main Content with Staggered Animation */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <Banner />
        <Hero />
        <Features />
        <Testimonial />
        <CallToAction />
        <Contact />
        <Footer />
      </motion.div>

      {/* Enhanced Scroll to Top Button */}
      <ScrollToTop />

      {/* Floating Particles Background */}
      <FloatingParticles />
    </motion.div>
  )
}

// Enhanced Scroll to Top Component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20
      }}
      whileHover={{ 
        scale: 1.1,
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 p-3.5 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl shadow-2xl shadow-slate-900/30 hover:shadow-slate-900/40 transition-all duration-300 backdrop-blur-md border border-slate-700/50 group"
      aria-label="Scroll to top"
    >
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="group-hover:text-blue-300 transition-colors duration-300"
        >
          <path d="m18 15-6-6-6 6"/>
        </svg>
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-slate-800 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        Scroll to top
        <div className="absolute top-full right-3 -mt-1 border-4 border-transparent border-t-slate-800"></div>
      </div>
    </motion.button>
  )
}

// Floating Particles Component for Background
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    size: 1 + Math.random() * 2
  }))

  return (
    <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-slate-300/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

// Loading Screen Component (Optional - can be used with React Suspense)
export const HomeLoading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            rotate: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" x2="8" y1="13" y2="13"/>
            <line x1="16" x2="8" y1="17" y2="17"/>
            <line x1="10" x2="8" y1="9" y2="9"/>
          </svg>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 font-medium"
        >
          Preparing your resume builder...
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Home