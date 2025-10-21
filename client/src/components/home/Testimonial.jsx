import React from 'react'
import Title from './Title'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Star, Quote, Users, Award, TrendingUp } from 'lucide-react'

const Testimonial = () => {
    const testimonials = [
        {
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
            name: 'Briar Martin',
            role: 'Software Engineer',
            company: 'Google',
            rating: 5,
            text: 'ResumeCraft helped me land my dream job at Google. The AI-powered suggestions made my resume stand out from hundreds of applicants.',
            achievement: 'Landed job with 40% salary increase'
        },
        {
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
            name: 'Alex Johnson',
            role: 'Product Manager',
            company: 'Microsoft',
            rating: 5,
            text: 'The ATS optimization feature is incredible. I went from 0 interviews to 5 callbacks in just two weeks after using ResumeCraft.',
            achievement: '5 interviews in 2 weeks'
        },
        {
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
            name: 'Jordan Lee',
            role: 'Data Scientist',
            company: 'Amazon',
            rating: 5,
            text: 'As a career changer, ResumeCraft helped me highlight transferable skills I never knew were valuable. Got my first tech job in 3 months!',
            achievement: 'Career change success'
        },
        {
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
            name: 'Sarah Chen',
            role: 'UX Designer',
            company: 'Meta',
            rating: 5,
            text: 'The design templates are stunning and professional. Recruiters actually complimented my resume format during interviews.',
            achievement: 'Multiple job offers'
        },
        {
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&auto=format&fit=crop&q=60',
            name: 'Michael Torres',
            role: 'DevOps Engineer',
            company: 'Netflix',
            rating: 5,
            text: 'The instant feedback on resume strength saved me weeks of guessing. Knew exactly what to improve to get past automated systems.',
            achievement: 'Hired in 30 days'
        },
        {
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=60',
            name: 'David Kim',
            role: 'Frontend Developer',
            company: 'Spotify',
            rating: 5,
            text: 'Never thought resume building could be this easy. The AI wrote better bullet points than I could have ever written myself.',
            achievement: '2.5x more interviews'
        }
    ];

    const stats = [
        { number: '10K+', label: 'Success Stories', icon: <Users className="w-5 h-5" /> },
        { number: '4.9/5', label: 'Average Rating', icon: <Star className="w-5 h-5" /> },
        { number: '98%', label: 'Interview Rate', icon: <TrendingUp className="w-5 h-5" /> },
        { number: '2.3x', label: 'More Interviews', icon: <Award className="w-5 h-5" /> }
    ];

    const TestimonialCard = ({ testimonial, index }) => (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 w-80 shrink-0 mx-4"
        >
            {/* Quote Icon */}
            <div className="mb-4">
                <Quote className="w-8 h-8 text-blue-500/60" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-slate-700 leading-relaxed mb-4 text-sm">
                "{testimonial.text}"
            </p>

            {/* Achievement Badge */}
            <div className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 rounded-full px-3 py-1 mb-4 text-xs font-medium">
                <TrendingUp className="w-3 h-3" />
                {testimonial.achievement}
            </div>

            {/* User Info */}
            <div className="flex items-center gap-3 pt-4 border-t border-blue-100">
                <img 
                    className="size-12 rounded-full object-cover border-2 border-blue-200" 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                />
                <div className="flex-1">
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-xs text-blue-600 font-medium">{testimonial.company}</div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id='testimonials' className='py-20 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden'>
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className='flex flex-col items-center text-center mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-2 text-sm text-blue-600 bg-blue-400/10 rounded-full px-6 py-2 mb-6 border border-blue-200/50 backdrop-blur-sm"
                    >
                        <Users className="w-4 h-4" />
                        <span className="font-semibold">Success Stories</span>
                    </motion.div>

                    <Title 
                        title="Trusted by Thousands of Professionals" 
                        description="Join 10,000+ job seekers who landed their dream roles with ResumeCraft. See what they have to say about their career transformation."
                    />
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100"
                        >
                            <div className="flex justify-center mb-3">
                                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                            <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Testimonials Marquee */}
                <div className="relative">
                    {/* First Row */}
                    <div className="marquee-row w-full overflow-hidden relative mb-8">
                        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                        <div className="marquee-inner flex transform-gpu py-4">
                            {[...testimonials, ...testimonials].map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial} index={index % testimonials.length} />
                            ))}
                        </div>
                        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
                    </div>

                    {/* Second Row (Reverse) */}
                    <div className="marquee-row w-full overflow-hidden relative">
                        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                        <div className="marquee-inner marquee-reverse flex transform-gpu py-4">
                            {[...testimonials.slice().reverse(), ...testimonials.slice().reverse()].map((testimonial, index) => (
                                <TestimonialCard key={index} testimonial={testimonial} index={index % testimonials.length} />
                            ))}
                        </div>
                        <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marqueeScroll {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-50%); }
                }

                .marquee-inner {
                    animation: marqueeScroll 40s linear infinite;
                    display: flex;
                    width: max-content;
                }

                .marquee-reverse {
                    animation-direction: reverse;
                }

                .marquee-row:hover .marquee-inner {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    )
}

export default Testimonial