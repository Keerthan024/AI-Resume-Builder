import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: 'Email Us',
      details: 'hello@resumecraft.com',
      link: 'mailto:hello@resumecraft.com',
      description: 'Send us an email anytime'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Mon to Fri, 9am to 6pm'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: 'Visit Us',
      details: 'San Francisco, CA',
      link: 'https://maps.google.com/?q=San+Francisco,CA',
      description: 'Feel free to visit our office'
    }
  ];

  const features = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: 'Quick Response',
      description: 'We typically reply within 2 hours during business hours'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      title: '24/7 Support',
      description: 'Get help anytime with our comprehensive knowledge base'
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: 'Expert Help',
      description: 'Our career specialists are here to assist you'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-sm text-blue-600 bg-blue-400/10 rounded-full px-6 py-2 mb-6 border border-blue-200/50 backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="font-semibold">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-700 bg-clip-text text-transparent"
          >
            Let's Build Your
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent"> Career Success</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our resume builder? Our team is here to help you create the perfect resume for your dream job.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-blue-600 font-medium mb-1">{item.details}</p>
                    <p className="text-slate-500 text-sm">{item.description}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-4 mt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100"
                >
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">{feature.title}</h4>
                    <p className="text-slate-600 text-xs">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100"
            >
              {[
                { number: '24h', label: 'Avg Response' },
                { number: '100%', label: 'Satisfaction' },
                { number: '500+', label: 'Helped Today' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-lg font-bold text-blue-600">{stat.number}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100 p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl px-6 py-3 font-semibold transition-all duration-300"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Send us a message</h3>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:from-slate-400 disabled:to-slate-500 text-white rounded-xl py-4 px-6 font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;