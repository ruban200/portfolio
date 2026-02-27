import React from 'react'
import { motion } from 'framer-motion'
import { Terminal, Code2, Database, Layout } from 'lucide-react'

const About = () => {
    const features = [
        {
            icon: <Layout className="w-6 h-6 text-cyan-400" />,
            title: "Frontend Development",
            description: "Building responsive, accessible, and dynamic user interfaces using modern tools like React and Tailwind CSS."
        },
        {
            icon: <Terminal className="w-6 h-6 text-indigo-400" />,
            title: "Backend Development",
            description: "Creating robust RESTful APIs and servers with Node.js and Express to power modern web applications."
        },
        {
            icon: <Database className="w-6 h-6 text-purple-400" />,
            title: "Database Management",
            description: "Designing schemas and managing data efficiently utilizing both NoSQL (MongoDB) and SQL (MySQL) solutions."
        },
        {
            icon: <Code2 className="w-6 h-6 text-emerald-400" />,
            title: "Clean Code",
            description: "Committed to writing maintainable, scalable, and well-documented code with a strong problem-solving mindset."
        }
    ]

    return (
        <section id="about" className="py-24 bg-slate-900 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">About <span className="text-indigo-400">Me</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        I am Ruban Raj.S, currently pursuing MCA at Madurai Kamaraj University with a strong interest in full-stack web development. I enjoy building responsive and scalable web applications and solving real-world problems through code.
                    </p>
                    <p className="mt-4 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Skilled in HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, and MySQL. I am actively seeking internship or entry-level opportunities to enhance my skills and contribute to a growing tech team.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-indigo-500/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About
