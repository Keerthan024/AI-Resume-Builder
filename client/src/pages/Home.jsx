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
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  }

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-white"
    >
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Smooth Scrolling Anchor */}
      <div id="top" />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Banner />
        <Hero />
        <Features />
        <Testimonial />
        <CallToAction />
        <Contact />
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </motion.div>
  )
}

// Scroll to Top Component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
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
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 backdrop-blur-sm border border-blue-400/30"
      aria-label="Scroll to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </motion.button>
  )
}

export default Home