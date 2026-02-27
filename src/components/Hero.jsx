import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

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
                    <span className="inline-block py-1 px-3 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-medium mb-6 tracking-wide">
                        Available for opportunities
                    </span>
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
                    <div className="relative w-106 h-56 md:w-164 md:h-214">
                        <img 
                            src="/images/ruban.jpg" 
                            alt="Ruban Raj.S" 
                            className="w-full h-full object-cover rounded-full border-4 border-indigo-500 shadow-2xl shadow-indigo-500/50 ring-4 ring-indigo-600/20"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent"></div>
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
                    <a
                        href="/resume.csv"
                        download="Ruban_Resume.csv"
                        className="group w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-200"
                    >
                        Download Resume
                        <Download className="w-5 h-5" />
                    </a>
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
