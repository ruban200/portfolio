import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const Resume = () => {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-4xl mx-auto">
                {/* Header Actions */}
                <div className="flex justify-between items-center mb-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Portfolio
                    </Link>

                    <a
                        href="/resume.pdf"
                        download="Ruban_Resume.pdf"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg transition-colors shadow-lg shadow-indigo-500/20 font-medium"
                    >
                        <Download className="w-4 h-4" />
                        Download PDF
                    </a>
                </div>

                {/* Resume Paper Layout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Top Accent */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500"></div>

                    {/* Header Details */}
                    <header className="mb-10 border-b border-slate-700/50 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">RUBAN RAJ S</h1>
                            <h2 className="text-xl sm:text-2xl text-cyan-400 font-medium">Full Stack Developer</h2>
                        </div>
                        <div className="flex flex-col gap-2 text-slate-400 text-sm sm:text-right">
                            <a href="mailto:ruban5398@gmail.com" className="flex items-center md:justify-end gap-2 hover:text-white transition-colors">
                                <Mail className="w-4 h-4 text-slate-500" /> ruban5398@gmail.com
                            </a>
                            <a href="tel:+916384640243" className="flex items-center md:justify-end gap-2 hover:text-white transition-colors">
                                <Phone className="w-4 h-4 text-slate-500" /> +91 63846 40243
                            </a>
                            <span className="flex items-center md:justify-end gap-2">
                                <MapPin className="w-4 h-4 text-slate-500" /> Madurai - 626007
                            </span>
                        </div>
                    </header>

                    {/* Professional Summary */}
                    <section className="mb-10">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <span className="w-8 h-px bg-indigo-500 inline-block"></span>
                            Professional Summary
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-justify">
                            Highly motivated Full Stack Developer with hands-on experience in designing, developing, testing, and deploying scalable web applications using React.js, Node.js, Express.js, MongoDB, and MySQL. Strong understanding of Software Development Life Cycle (SDLC), Agile methodology, RESTful API development, database architecture, and object-oriented programming. Demonstrated ability to deliver clean, maintainable, and performance-optimized code in collaborative environments. Seeking Internship or Entry-Level Software Engineer role in a growth-driven organization.
                        </p>
                    </section>

                    {/* Education */}
                    <section className="mb-10">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-indigo-500 inline-block"></span>
                            Education
                        </h3>
                        <div className="space-y-6">
                            <div className="relative pl-6 border-l-2 border-slate-700">
                                <div className="absolute w-3 h-3 bg-cyan-400 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-800"></div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                    <h4 className="text-lg font-medium text-white">Master of Computer Applications (MCA)</h4>
                                    <span className="text-cyan-400 text-sm font-medium">2025 – 2027</span>
                                </div>
                                <p className="text-slate-400">Madurai Kamaraj University</p>
                            </div>

                            <div className="relative pl-6 border-l-2 border-slate-700">
                                <div className="absolute w-3 h-3 bg-slate-600 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-800 border-2 border-slate-800"></div>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                    <h4 className="text-lg font-medium text-white">Bachelor of Science in Computer Science</h4>
                                    <span className="text-slate-400 text-sm">2021 – 2024</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Project Experience */}
                    <section className="mb-10">
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-indigo-500 inline-block"></span>
                            Project Experience
                        </h3>
                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
                                <h4 className="text-lg font-medium text-white">Full Stack Web Application</h4>
                            </div>
                            <p className="text-cyan-400 text-sm mb-4 font-medium">Technologies: React.js, Node.js, Express.js, MongoDB</p>
                            <ul className="list-disc list-outside ml-5 space-y-2 text-slate-300 text-sm leading-relaxed">
                                <li>Designed and developed a scalable full-stack web application from scratch.</li>
                                <li>Built RESTful APIs to handle CRUD operations and server-side logic.</li>
                                <li>Integrated MongoDB database for structured data storage and efficient retrieval.</li>
                                <li>Implemented user authentication and authorization mechanisms.</li>
                                <li>Improved application performance through optimized API handling.</li>
                                <li>Followed modular coding practices to enhance maintainability and scalability.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Skills */}
                    <section>
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <span className="w-8 h-px bg-indigo-500 inline-block"></span>
                            Technical Skills
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                            <div>
                                <h4 className="text-slate-400 text-sm mb-1 uppercase tracking-wider">Programming Languages</h4>
                                <p className="text-slate-200 font-medium">JavaScript (ES6+), HTML5, CSS3</p>
                            </div>
                            <div>
                                <h4 className="text-slate-400 text-sm mb-1 uppercase tracking-wider">Frontend Development</h4>
                                <p className="text-slate-200 font-medium">React.js, Responsive Web Design, UI/UX Implementation, DOM Manipulation</p>
                            </div>
                            <div className="md:col-span-2">
                                <h4 className="text-slate-400 text-sm mb-1 uppercase tracking-wider">Backend Development</h4>
                                <p className="text-slate-200 font-medium">Node.js, Express.js, RESTful APIs, MVC Architecture, Server-Side Logic</p>
                            </div>
                            <div>
                                <h4 className="text-slate-400 text-sm mb-1 uppercase tracking-wider">Databases</h4>
                                <p className="text-slate-200 font-medium">MongoDB, MySQL, Database Design, Query Optimization</p>
                            </div>
                            <div>
                                <h4 className="text-slate-400 text-sm mb-1 uppercase tracking-wider">Cloud & Deployment</h4>
                                <p className="text-slate-200 font-medium">Firebase (Basics), Deployment & Hosting, Environment Config</p>
                            </div>
                            <div className="md:col-span-2">
                                <h4 className="text-slate-400 text-sm mb-1 uppercase tracking-wider">DevOps, Tools & Concepts</h4>
                                <p className="text-slate-200 font-medium leading-relaxed">Git, GitHub, CI/CD Concepts, Postman, VS Code, Data Structures & Algorithms, OOP, SDLC, Agile Methodology, Authentication & Authorization, Debugging, Performance Optimization</p>
                            </div>
                        </div>
                    </section>
                </motion.div>
            </div>
        </div>
    )
}

export default Resume
