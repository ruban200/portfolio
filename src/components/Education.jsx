import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Award } from 'lucide-react'

const Education = () => {
    return (
        <section id="education" className="py-24 bg-slate-900 border-t border-slate-800/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">My <span className="text-indigo-400">Education</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 md:-ml-px h-full w-0.5 bg-slate-700 rounded-full"></div>

                    {/* MCA Degree - Top */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8"
                    >
                        {/* Timeline icon */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-900 bg-cyan-500 text-white shadow-xl z-10 shrink-0 md:absolute md:left-1/2 md:-ml-6 group-hover:bg-indigo-400 transition-colors">
                            <Award className="w-5 h-5" />
                        </div>

                        {/* Content box */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-800/50 p-6 rounded-2xl border border-slate-700 ml-6 md:ml-0 group-hover:border-cyan-400 transition-colors shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-cyan-400 font-mono text-sm font-semibold tracking-wider">MASTER'S DEGREE</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Master of Computer Application (MCA)</h3>
                            <h4 className="text-lg text-slate-400 mb-4 font-medium">Advanced Computing & Software Development</h4>

                            <div className="mt-4 pt-4 border-t border-slate-700">
                                <h5 className="flex items-center gap-2 text-white font-medium mb-3">
                                    <BookOpen className="w-4 h-4 text-cyan-400" />
                                    Core Coursework
                                </h5>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>Advanced Algorithms</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>Database Management</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>Software Engineering</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>Cloud Computing</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>Machine Learning</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500"></div>Web Services & APIs</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bachelor's Degree - Bottom */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative flex items-center justify-between md:justify-normal md:flex-row-reverse group mb-8"
                    >
                        {/* Timeline icon */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-900 bg-indigo-500 text-white shadow-xl z-10 shrink-0 md:absolute md:left-1/2 md:-ml-6 group-hover:bg-cyan-400 transition-colors">
                            <GraduationCap className="w-5 h-5" />
                        </div>

                        {/* Content box */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-800/50 p-6 rounded-2xl border border-slate-700 ml-6 md:ml-0 group-hover:border-indigo-400 transition-colors shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-indigo-400 font-mono text-sm font-semibold tracking-wider">BACHELOR'S DEGREE</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Bachelor's Degree in Computer Science(BSC CS)</h3>
                            <h4 className="text-lg text-slate-400 mb-4 font-medium">Foundation in Computing & Programming</h4>

                            <div className="mt-4 pt-4 border-t border-slate-700">
                                <h5 className="flex items-center gap-2 text-white font-medium mb-3">
                                    <BookOpen className="w-4 h-4 text-indigo-400" />
                                    Core Coursework
                                </h5>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400 text-sm">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Data Structures</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Algorithms</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Web Development</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Database Systems</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Object-Oriented Programming</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Computer Networks</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* HSC Degree - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-8"
                    >
                        {/* Timeline icon */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-900 bg-purple-500 text-white shadow-xl z-10 shrink-0 md:absolute md:left-1/2 md:-ml-6 group-hover:bg-pink-400 transition-colors">
                            <GraduationCap className="w-5 h-5" />
                        </div>

                        {/* Content box */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-800/50 p-6 rounded-2xl border border-slate-700 ml-6 md:ml-0 group-hover:border-purple-400 transition-colors shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-purple-400 font-mono text-sm font-semibold tracking-wider">HIGHER SECONDARY (HSC)</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Higher Secondary Certificate in Computer Science</h3>
                            <h4 className="text-lg text-slate-400 mb-4 font-medium">Government HR Sec School, Kuttalam</h4>
                            <p className="text-slate-400 text-sm">2020 - 2021</p>
                        </div>
                    </motion.div>

                    {/* SSLC Degree - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="relative flex items-center justify-between md:justify-normal md:flex-row-reverse group"
                    >
                        {/* Timeline icon */}
                        <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-900 bg-pink-500 text-white shadow-xl z-10 shrink-0 md:absolute md:left-1/2 md:-ml-6 group-hover:bg-purple-400 transition-colors">
                            <GraduationCap className="w-5 h-5" />
                        </div>

                        {/* Content box */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-800/50 p-6 rounded-2xl border border-slate-700 ml-6 md:ml-0 group-hover:border-pink-400 transition-colors shadow-lg">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-pink-400 font-mono text-sm font-semibold tracking-wider">SECONDARY SCHOOL (SSLC)</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">Secondary School Leaving Certificate</h3>
                            <h4 className="text-lg text-slate-400 mb-4 font-medium">Government HR Sec School, Kuttalam</h4>
                            <p className="text-slate-400 text-sm">2018 - 2019</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Education
