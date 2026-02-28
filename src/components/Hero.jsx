import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ResumeButton from './ResumeButton'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-0 left-1/2 w-screen -translate-x-1/2 h-full z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px]"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Ruban Raj.S</span>
                    </h1>
                    <p className="mt-4 text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        A passionate Full Stack Developer building scalable and beautiful web applications.
                    </p>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex justify-center my-12"
                >
                    <div className="card mx-auto shadow-2xl shadow-indigo-500/20">
                        <button className="mail cursor-pointer" onClick={() => window.location.href = '#contact'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </button>
                        <div className="profile-pic">
                            <img src="/images/profile.jpg" alt="Ruban Raj.S" />
                        </div>
                        <div className="bottom">
                            <div className="content">
                                <span className="name">Hi, I'm Ruban Raj.S</span>
                                <span className="about-me">
                                    <span className="flex items-start gap-2"><span>💻</span><span>Passionate Full Stack Developer</span></span>
                                    <span className="flex items-start gap-2"><span>🚀</span><span>Build scalable and high-performance web applications</span></span>
                                    <span className="flex items-start gap-2"><span>🎨</span><span>Create dynamic and responsive user interfaces</span></span>
                                    <span className="flex items-start gap-2"><span>🔧</span><span>Develop secure and efficient backend systems</span></span>
                                    <span className="flex items-start gap-2"><span>📊</span><span>Strong problem-solving and logical thinking skills</span></span>
                                    <span className="flex items-start gap-2"><span>🌱</span><span>Continuously learning modern technologies</span></span>
                                    <span className="flex items-start gap-2"><span>🧩</span><span>Focus on clean, maintainable, and optimized code</span></span>
                                    <span className="flex items-start gap-2"><span>🤝</span><span>Team player with good communication skills</span></span>
                                    <span className="flex items-start gap-2"><span>⚡</span><span>Interested in AI integration and innovative solutions</span></span>
                                </span>
                            </div>
                            <div className="bottom-bottom">
                                <div className="social-links-container">
                                    <a href="https://github.com/ruban200" target="_blank" rel="noopener noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                    </a>
                                </div>
                                <button className="button" onClick={() => window.location.href = '#contact'}>Contact Me</button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
                >
                    <a
                        href="#projects"
                        className="group w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-200"
                    >
                        View Projects
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <ResumeButton />
                    <a
                        href="#contact"
                        className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-all duration-200"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
