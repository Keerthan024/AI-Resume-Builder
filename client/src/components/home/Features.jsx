import { Zap, Sparkles, Shield, BarChart3, Download, Palette, Users, Rocket, Eye, CheckCircle } from 'lucide-react';
import React, { useState } from 'react'
import Title from './Title';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            icon: <BarChart3 className="size-6" />,
            title: "AI-Powered Analysis",
            description: "Get instant insights into your resume's strength with live AI analysis and improvement suggestions.",
            color: "blue",
            gradient: "from-blue-500 to-cyan-600",
            bg: "bg-blue-50",
            border: "border-blue-200",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
            benefits: ["Real-time scoring", "Keyword optimization", "Skill gap analysis"]
        },
        {
            icon: <Shield className="size-6" />,
            title: "ATS-Optimized Templates",
            description: "Professionally designed templates that pass through Applicant Tracking Systems with 99% success rate.",
            color: "indigo",
            gradient: "from-indigo-500 to-purple-600",
            bg: "bg-indigo-50",
            border: "border-indigo-200",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
            benefits: ["99% ATS success", "Industry-specific", "Mobile-optimized"]
        },
        {
            icon: <Download className="size-6" />,
            title: "One-Click Export",
            description: "Export your resume in multiple formats (PDF, Word) with perfect formatting for any application.",
            color: "sky",
            gradient: "from-sky-500 to-blue-600",
            bg: "bg-sky-50",
            border: "border-sky-200",
            image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=400&fit=crop",
            benefits: ["PDF & Word formats", "Perfect formatting", "Cloud backup"]
        },
        {
            icon: <Palette className="size-6" />,
            title: "Smart Design Tools",
            description: "Customize every aspect of your resume with intelligent design suggestions and color palettes.",
            color: "violet",
            gradient: "from-violet-500 to-purple-600",
            bg: "bg-violet-50",
            border: "border-violet-200",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
            benefits: ["Color customization", "Font selection", "Layout options"]
        },
        {
            icon: <Users className="size-6" />,
            title: "Expert Review",
            description: "Get professional feedback from career experts and industry professionals.",
            color: "cyan",
            gradient: "from-cyan-500 to-blue-600",
            bg: "bg-cyan-50",
            border: "border-cyan-200",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
            benefits: ["Professional feedback", "Industry insights", "24h turnaround"]
        },
    ];

    const stats = [
        { number: "10K+", label: "Resumes Created", color: "from-blue-500 to-cyan-600", icon: <Eye className="w-5 h-5" /> },
        { number: "98%", label: "Interview Rate", color: "from-indigo-500 to-purple-600", icon: <CheckCircle className="w-5 h-5" /> },
        { number: "4.9/5", label: "User Rating", color: "from-sky-500 to-blue-600", icon: <Sparkles className="w-5 h-5" /> },
        { number: "2.3x", label: "More Interviews", color: "from-violet-500 to-purple-600", icon: <Rocket className="w-5 h-5" /> }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id='features' className='py-20 scroll-mt-12 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden'>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full blur-3xl opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 text-sm text-blue-600 bg-blue-400/10 rounded-full px-6 py-2 mb-6 border border-blue-200/50 backdrop-blur-sm"
                    >
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="w-4 h-4" />
                        </motion.div>
                        <span className="font-semibold">AI-Powered Features</span>
                    </motion.div>

                    <Title 
                        title="Everything You Need to Land Your Dream Job" 
                        description="Create professional, ATS-friendly resumes in minutes with our intelligent AI-powered platform designed to land you interviews."
                    />
                </div>

                {/* Features Grid */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 xl:gap-20 mb-20">
                    {/* Feature Image */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative lg:w-1/2"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-100">
                            <motion.img
                                key={activeFeature}
                                src={features[activeFeature].image}
                                alt="Feature preview"
                                className="w-full h-[400px] object-cover"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                            
                            {/* Floating Feature Icon */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-100"
                            >
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${features[activeFeature].gradient} shadow-lg`}>
                                    {React.cloneElement(features[activeFeature].icon, { className: "size-5 text-white" })}
                                </div>
                            </motion.div>
                            
                            {/* Floating Stats */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-100"
                            >
                                <div className="text-sm font-semibold text-slate-800">Success Rate</div>
                                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">98%</div>
                            </motion.div>

                            {/* Benefits List */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-100 max-w-xs"
                            >
                                <div className="text-sm font-semibold text-slate-800 mb-2">Key Benefits:</div>
                                <div className="space-y-1">
                                    {features[activeFeature].benefits.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="flex items-center gap-2 text-xs text-slate-600"
                                        >
                                            <CheckCircle className="w-3 h-3 text-blue-500" />
                                            {benefit}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Features List */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:w-1/2 space-y-4"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    y: -2
                                }}
                                whileTap={{ scale: 0.98 }}
                                onMouseEnter={() => setActiveFeature(index)}
                                onFocus={() => setActiveFeature(index)}
                                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border-2 backdrop-blur-sm ${
                                    activeFeature === index 
                                        ? `bg-white shadow-xl border-${feature.color}-300 scale-105 shadow-blue-500/10` 
                                        : `bg-white/60 border-transparent hover:border-${feature.color}-200 hover:bg-white/80`
                                }`}
                            >
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg flex-shrink-0`}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                    <div className="flex-1">
                                        <motion.h3 
                                            className={`text-lg font-bold mb-2 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                                        >
                                            {feature.title}
                                        </motion.h3>
                                        <motion.p 
                                            className="text-slate-600 leading-relaxed text-sm"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {feature.description}
                                        </motion.p>
                                    </div>
                                    <motion.div
                                        animate={{ 
                                            scale: activeFeature === index ? [1, 1.2, 1] : 1,
                                            opacity: activeFeature === index ? 1 : 0.3
                                        }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${feature.gradient} flex-shrink-0 mt-2`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100 hover:border-blue-200 transition-all duration-300"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: index * 0.1 + 0.6, type: "spring" }}
                                className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} w-12 h-12 mx-auto mb-3 flex items-center justify-center text-white shadow-lg`}
                            >
                                {stat.icon}
                            </motion.div>
                            <motion.div
                                className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-slate-600 font-medium text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-xl px-8 py-4 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/40 flex items-center gap-3 font-semibold text-lg transition-all duration-300 mx-auto"
                    >
                        <Zap className="w-5 h-5" />
                        Start Building Free
                        <motion.svg
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            xmlns="http://www.w3.org/2000/svg" 
                            width="20" 
                            height="20" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </motion.svg>
                    </motion.button>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-slate-500 text-sm mt-4"
                    >
                        No credit card required • Free forever plan
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}

export default Features