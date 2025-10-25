import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    try {
      const form = new FormData();
      form.append('access_key', '92372b71-cf15-4393-b85f-c01c757e7c7f');
      form.append('name', formData.name);
      form.append('email', formData.email);
      form.append('phone', formData.phone);
      form.append('subject', formData.subject);
      form.append('message', formData.message);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully!');
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setResult(data.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setResult('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, title: 'Email Us', details: 'hello@krytil.com', link: 'mailto:hello@krytil.com', description: 'Send us an email anytime.' },
    { icon: <Phone className="w-5 h-5" />, title: 'Call Us', details: '+91 9663515839', link: 'tel:+919663515839', description: 'Mon to Fri, 9am to 6pm' },
    { icon: <MapPin className="w-5 h-5" />, title: 'Visit Us', details: 'Bengaluru', link: '', description: 'Feel free to contact our office.' }
  ];

  const features = [
    { icon: <Clock className="w-5 h-5" />, title: 'Quick Response', description: 'We typically reply within 24 hours.' },
    { icon: <MessageCircle className="w-5 h-5" />, title: '24/7 Support', description: 'Get help anytime with our comprehensive knowledge base' },
    { icon: <CheckCircle className="w-5 h-5" />, title: 'Expert Help', description: 'Our career specialists are here to assist you' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 text-sm text-blue-600 bg-blue-400/10 rounded-full px-6 py-2 mb-6 border border-blue-200/50 backdrop-blur-sm">
            <MessageCircle className="w-4 h-4" /> <span className="font-semibold">Get In Touch</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-700 bg-clip-text text-transparent">
            Let's Build Your <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">Career Success</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Have questions about our resume builder? Our team is here to help you create the perfect resume for your dream job.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info + Features */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
            {contactInfo.map((item, index) => (
              <motion.a key={index} href={item.link} variants={itemVariants} whileHover={{ scale: 1.02, y: -2 }} className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300 group">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-800 mb-1">{item.title}</h3>
                  <p className="text-blue-600 font-medium mb-1">{item.details}</p>
                  <p className="text-slate-500 text-sm">{item.description}</p>
                </div>
              </motion.a>
            ))}

            {/* Features */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }} className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-blue-100">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-slate-800 text-sm">{feature.title}</h4>
                    <p className="text-slate-600 text-xs">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-blue-100 p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => setIsSubmitted(false)} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl px-6 py-3 font-semibold transition-all duration-300">Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name *" required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email *" required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone *" required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm" />
                </div>
                <select name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm">
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feature">Feature Request</option>
                  <option value="partnership">Partnership</option>
                </select>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Your Message *" className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm resize-none" />

                <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 disabled:from-slate-400 disabled:to-slate-500 text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-3">
                  {isSubmitting ? 'Sending...' : <><Send className="w-5 h-5" /> Send Message</>}
                </button>
                {result && <p className="text-sm text-center text-slate-600 mt-2">{result}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;