import React from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Templates", href: "#templates" },
        { name: "Pricing", href: "#pricing" },
        { name: "Support", href: "#support" },
        { name: "Affiliate", href: "#affiliate" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#blog" },
        { name: "Community", href: "#community" },
        { name: "Careers", href: "#careers", badge: "We're hiring!" },
        { name: "About Us", href: "#about" },
        { name: "Success Stories", href: "#success" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "Security", href: "#security" }
      ]
    }
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "hello@resumecraft.com",
      href: "mailto:hello@resumecraft.com"
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "San Francisco, CA",
      href: "https://maps.google.com/?q=San+Francisco,CA"
    }
  ]

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://twitter.com/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "YouTube",
      href: "https://youtube.com/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ]

  return (
    <>
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="py-16 border-b border-slate-700/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-2 mb-4"
                >
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold text-sm">Stay Updated</span>
                </motion.div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                  Get Career Tips & Updates
                </h3>
                <p className="text-slate-300 max-w-md">
                  Join 10,000+ professionals receiving resume tips, job search strategies, and industry insights.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 bg-slate-800/50 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-slate-400 backdrop-blur-sm min-w-[280px]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-xl px-8 py-3 font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Main Footer Links */}
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
              {/* Brand Column */}
              <div className="xl:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    ResumeCraft
                  </span>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-slate-300 mb-6 leading-relaxed max-w-md"
                >
                  Creating professional, ATS-friendly resumes that help you land your dream job faster. 
                  Join thousands of successful professionals who trust ResumeCraft.
                </motion.p>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="space-y-3"
                >
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                    >
                      <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                        {contact.icon}
                      </div>
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* Links Columns */}
              {footerSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                >
                  <h4 className="font-semibold text-white mb-6 text-lg">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2 group"
                        >
                          <span>{link.name}</span>
                          {link.badge && (
                            <span className="text-xs bg-cyan-500 text-white rounded-full px-2 py-1">
                              {link.badge}
                            </span>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="py-8 border-t border-slate-700/50"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6 text-slate-300">
                <span>© 2024 ResumeCraft. All rights reserved.</span>
                <div className="flex gap-4">
                  <a href="#privacy" className="hover:text-cyan-400 transition-colors text-sm">
                    Privacy
                  </a>
                  <a href="#terms" className="hover:text-cyan-400 transition-colors text-sm">
                    Terms
                  </a>
                  <a href="#cookies" className="hover:text-cyan-400 transition-colors text-sm">
                    Cookies
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-2 bg-slate-800/50 hover:bg-cyan-500/20 rounded-lg text-slate-300 hover:text-cyan-400 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </>
  )
}

export default Footer