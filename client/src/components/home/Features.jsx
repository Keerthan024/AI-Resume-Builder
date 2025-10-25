import { Zap, Sparkles, Shield, BarChart3, Download, Palette, Users, Rocket, Eye, CheckCircle, ArrowRight, Star } from 'lucide-react';
import React, { useState } from 'react'
import Title from './Title';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Features = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [hoveredFeature, setHoveredFeature] = useState(null);

    const features = [
        {
            icon: <BarChart3 className="size-6" />,
            title: "AI-Powered Analysis",
            description: "Get instant insights into your resume's strength with live AI analysis and improvement suggestions.",
            color: "blue",
            gradient: "from-blue-500 to-cyan-600",
            lightGradient: "from-blue-50 to-cyan-50",
            bg: "bg-blue-50",
            border: "border-blue-200",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=500&fit=crop",
            benefits: ["Real-time scoring", "Keyword optimization", "Skill gap analysis", "Industry insights"],
            stats: "98% Match Rate"
        },
        {
            icon: <Shield className="size-6" />,
            title: "ATS-Optimized Templates",
            description: "Professionally designed templates that pass through Applicant Tracking Systems with 99% success rate.",
            color: "indigo",
            gradient: "from-indigo-500 to-purple-600",
            lightGradient: "from-indigo-50 to-purple-50",
            bg: "bg-indigo-50",
            border: "border-indigo-200",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop",
            benefits: ["99% ATS success", "Industry-specific", "Mobile-optimized", "HR-approved"],
            stats: "99% Success"
        },
        {
            icon: <Download className="size-6" />,
            title: "One-Click Export",
            description: "Export your resume in multiple formats (PDF, Word) with perfect formatting for any application.",
            color: "emerald",
            gradient: "from-emerald-500 to-green-600",
            lightGradient: "from-emerald-50 to-green-50",
            bg: "bg-emerald-50",
            border: "border-emerald-200",
            image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=500&fit=crop",
            benefits: ["PDF & Word formats", "Perfect formatting", "Cloud backup", "Auto-sync"],
            stats: "Instant Export"
        },
        {
            icon: <Palette className="size-6" />,
            title: "Smart Design Tools",
            description: "Customize every aspect of your resume with intelligent design suggestions and color palettes.",
            color: "violet",
            gradient: "from-violet-500 to-purple-600",
            lightGradient: "from-violet-50 to-purple-50",
            bg: "bg-violet-50",
            border: "border-violet-200",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=500&fit=crop",
            benefits: ["Color customization", "Font selection", "Layout options", "Auto-spacing"],
            stats: "50+ Templates"
        },
        {
            icon: <Users className="size-6" />,
            title: "Expert Review",
            description: "Get professional feedback from career experts and industry professionals.",
            color: "amber",
            gradient: "from-amber-500 to-orange-600",
            lightGradient: "from-amber-50 to-orange-50",
            bg: "bg-amber-50",
            border: "border-amber-200",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop",
            benefits: ["Professional feedback", "Industry insights", "24h turnaround", "Career advice"],
            stats: "24h Review"
        },
    ];

    const stats = [
        { 
            number: "10K+", 
            label: "Resumes Created", 
            gradient: "from-blue-500 to-cyan-600",
            icon: <Eye className="w-5 h-5" />,
            description: "Professionals trust our platform"
        },
        { 
            number: "98%", 
            label: "Interview Rate", 
            gradient: "from-indigo-500 to-purple-600",
            icon: <CheckCircle className="w-5 h-5" />,
            description: "Success rate with employers"
        },
        { 
            number: "4.9/5", 
            label: "User Rating", 
            gradient: "from-emerald-500 to-green-600",
            icon: <Star className="w-5 h-5" />,
            description: "Based on 2,000+ reviews"
        },
        { 
            number: "2.3x", 
            label: "More Interviews", 
            gradient: "from-violet-500 to-purple-600",
            icon: <Rocket className="w-5 h-5" />,
            description: "Compared to traditional resumes"
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
        hidden: { 
            y: 30, 
            opacity: 0,
            scale: 0.9
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const imageVariants = {
        hidden: { 
            scale: 0.8, 
            opacity: 0,
            rotateX: 10 
        },
        visible: {
            scale: 1,
            opacity: 1,
            rotateX: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const floatingAnimation = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id='features' className='py-24 scroll-mt-12 bg-gradient-to-b from-slate-50/50 to-white relative overflow-hidden'>
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-indigo-200/20 to-purple-200/15 rounded-full blur-3xl"
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2,
                    }}
                />
                
                {/* Grid Pattern */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(rgba(100, 116, 139, 0.1) 1px, transparent 1px),
                                         linear-gradient(90deg, rgba(100, 116, 139, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)'
                    }}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Enhanced Header Section */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="inline-flex items-center gap-3 text-sm text-blue-600 bg-white/80 backdrop-blur-xl rounded-2xl px-6 py-3 mb-8 border border-blue-200/50 shadow-lg shadow-blue-500/5"
                    >
                        <motion.div
                            animate={{ 
                                rotate: [0, 360],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ 
                                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2, repeat: Infinity }
                            }}
                            className="p-1.5 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg"
                        >
                            <Sparkles className="w-4 h-4 text-white" />
                        </motion.div>
                        <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            AI-Powered Features
                        </span>
                    </motion.div>

                    <Title 
                        title="Designed to Get You Hired Faster" 
                        description="Our intelligent platform combines cutting-edge AI with professional design to create resumes that stand out and get results."
                    />
                </div>

                {/* Enhanced Features Grid */}
                <div className="flex flex-col lg:flex-row items-start justify-center gap-16 xl:gap-24 mb-24">
                    {/* Feature Image with Enhanced Effects */}
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative lg:w-1/2"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-slate-200/60 bg-white/5 backdrop-blur-sm">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFeature}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative"
                                >
                                    <img
                                        src={features[activeFeature].image}
                                        alt={features[activeFeature].title}
                                        className="w-full h-[480px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    
                                    {/* Floating Feature Icon */}
                                    <motion.div
                                        variants={floatingAnimation}
                                        animate="animate"
                                        className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-slate-200/60"
                                    >
                                        <div className={`p-3 rounded-xl bg-gradient-to-r ${features[activeFeature].gradient} shadow-lg`}>
                                            {React.cloneElement(features[activeFeature].icon, { className: "size-6 text-white" })}
                                        </div>
                                    </motion.div>
                                    
                                    {/* Floating Stats */}
                                    <motion.div
                                        variants={floatingAnimation}
                                        animate="animate"
                                        transition={{ delay: 0.5 }}
                                        className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-slate-200/60"
                                    >
                                        <div className="text-sm font-semibold text-slate-500">Success Rate</div>
                                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                                            {features[activeFeature].stats}
                                        </div>
                                    </motion.div>

                                    {/* Enhanced Benefits List */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-slate-200/60 max-w-xs"
                                    >
                                        <div className="text-sm font-semibold text-slate-800 mb-3">Key Benefits:</div>
                                        <div className="space-y-2">
                                            {features[activeFeature].benefits.map((benefit, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.5 + index * 0.1 }}
                                                    className="flex items-center gap-3 text-sm text-slate-700"
                                                >
                                                    <div className={`p-1 bg-gradient-to-r ${features[activeFeature].gradient} rounded-full flex-shrink-0`}>
                                                        <CheckCircle className="w-3 h-3 text-white" />
                                                    </div>
                                                    <span className="font-medium">{benefit}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Background Glow */}
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${features[activeFeature].gradient} opacity-5 blur-xl -z-10 transition-all duration-500`} />
                    </motion.div>

                    {/* Enhanced Features List */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="lg:w-1/2 space-y-4"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ 
                                    scale: 1.02,
                                    y: -4,
                                    transition: { type: "spring", stiffness: 400, damping: 25 }
                                }}
                                whileTap={{ scale: 0.98 }}
                                onMouseEnter={() => {
                                    setActiveFeature(index);
                                    setHoveredFeature(index);
                                }}
                                onMouseLeave={() => setHoveredFeature(null)}
                                onFocus={() => setActiveFeature(index)}
                                className={`relative p-8 rounded-3xl cursor-pointer transition-all duration-500 backdrop-blur-sm border-2 ${
                                    activeFeature === index 
                                        ? `bg-white shadow-2xl scale-105 shadow-blue-500/10 border-${feature.color}-300/50` 
                                        : `bg-white/60 border-transparent hover:bg-white/80 hover:border-${feature.color}-200/30`
                                }`}
                            >
                                {/* Hover Gradient Background */}
                                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.lightGradient} opacity-0 hover:opacity-100 transition-opacity duration-500 -z-10`} />
                                
                                <div className="flex items-start gap-6">
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg flex-shrink-0 relative overflow-hidden`}
                                    >
                                        {feature.icon}
                                        {/* Shine Effect */}
                                        <div className="absolute inset-0 -skew-x-12 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                                    </motion.div>
                                    
                                    <div className="flex-1 min-w-0">
                                        <motion.h3 
                                            className={`text-xl font-bold mb-3 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                                        >
                                            {feature.title}
                                        </motion.h3>
                                        <motion.p 
                                            className="text-slate-600 leading-relaxed text-[15px]"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            {feature.description}
                                        </motion.p>
                                    </div>
                                    
                                    <motion.div
                                        animate={{ 
                                            scale: activeFeature === index ? [1, 1.3, 1] : hoveredFeature === index ? 1.1 : 0.8,
                                            opacity: activeFeature === index ? 1 : hoveredFeature === index ? 0.8 : 0.4
                                        }}
                                        transition={{ duration: 2, repeat: activeFeature === index ? Infinity : 0 }}
                                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.gradient} flex-shrink-0 mt-2`}
                                    />
                                </div>

                                {/* Active Indicator */}
                                {activeFeature === index && (
                                    <motion.div
                                        layoutId="activeFeature"
                                        className={`absolute -left-2 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b ${feature.gradient} rounded-full`}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Enhanced Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ 
                                scale: 1.05, 
                                y: -8,
                                transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            className="relative text-center p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-200/60 hover:border-slate-300/80 transition-all duration-500 group"
                        >
                            {/* Hover Gradient */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
                            
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{ delay: index * 0.1 + 0.6, type: "spring", stiffness: 200 }}
                                className={`p-3 rounded-2xl bg-gradient-to-r ${stat.gradient} w-14 h-14 mx-auto mb-4 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                            >
                                {stat.icon}
                            </motion.div>
                            
                            <motion.div
                                className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                                whileInView={{ scale: [0.5, 1.1, 1] }}
                                transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
                            >
                                {stat.number}
                            </motion.div>
                            
                            <div className="text-slate-700 font-semibold text-[15px] mb-2">{stat.label}</div>
                            <div className="text-slate-500 text-sm">{stat.description}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Enhanced CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.8 }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ 
                            scale: 1.05, 
                            y: -2,
                            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-2xl px-12 py-5 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/40 flex items-center gap-4 font-semibold text-lg transition-all duration-300 mx-auto group relative overflow-hidden"
                    >
                        {/* Shine effect */}
                        <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Zap className="w-6 h-6" />
                        </motion.div>
                        
                        Start Building Free
                        
                        <motion.div
                            animate={{ x: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.div>
                    </motion.button>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-slate-500 text-sm mt-6 flex items-center justify-center gap-2"
                    >
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                        No credit card required • Free forever plan
                    </motion.p>
                </motion.div>
            </div>
        </section>
    )
}

export default Features