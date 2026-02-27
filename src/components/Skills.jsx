import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "TailwindCSS", "Bootstrap", "Responsive Design"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB"]
        }
    ]

    return (
        <section id="skills" className="py-24 bg-slate-900 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Technical <span className="text-indigo-400">Skills</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        A comprehensive list of the technologies and tools I've mastered to build scalable, full-stack applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-indigo-500/50 transition-colors shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold text-white mb-6 text-center border-b border-slate-700 pb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-slate-700/50 hover:bg-indigo-500/20 hover:text-cyan-300 border border-slate-600/50 rounded-lg text-slate-300 text-sm font-medium transition-all cursor-default"
                                    >
                                        {skill}
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

export default Skills
