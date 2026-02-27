import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Folder } from 'lucide-react'

const Projects = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "My personal developer portfolio showcasing my skills, projects, and educational background. Built with focus on elegant design and smooth animations.",
            tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
            github: "https://github.com/ruban200",
            live: "#"
        },
        {
            title: "Cyber Hacking",
            description: "A robust full-stack web application featuring user authentication, data management, and a clean user interface.",
            tech: ["Python", "HTML", "CSS"],
            github: "https://github.com/ruban200/cyber-hacking.git",
            live: "#"
        },
        {
            title: "E-commerce Prototype",
            description: "A dynamic prototype featuring product listing, shopping cart functionality, and checkout flow with integrated mock payment gateway.",
            tech: ["React.js", "Context API", "Node.js", "Stripe API"],
            github: "https://github.com/ruban200",
            live: "#"
        },{
            title: "Weather Forecast App in Python",
            description: "A Python-based weather forecasting application that retrieves and displays current weather data for a given location.",
            tech: ["Python", "Requests", "JSON"],
            github: "https://github.com/ruban200/weather-forecast-app.git",
            live: "#"
        }
    ]

    return (
        <section id="projects" className="py-24 bg-slate-900 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Featured <span className="text-indigo-400">Projects</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        A selection of my recent work. These projects demonstrate my ability to solve problems and build functional full-stack applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group bg-slate-800/40 rounded-2xl p-8 border border-slate-700 hover:border-indigo-400 transition-all shadow-xl hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-indigo-400">
                                    <Folder className="w-10 h-10" />
                                </div>
                                <div className="flex gap-4">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                        <Github className="w-6 h-6" />
                                    </a>
                                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 mb-8 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                                {project.tech.map((tech, index) => (
                                    <span key={index} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
