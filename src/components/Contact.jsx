import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send, Twitter, Instagram } from 'lucide-react'
import BubblesButton from './BubblesButton'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState('')
    return (
        <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4 inline-block">What's Next?</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get In <span className="text-indigo-400">Touch</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto rounded-full mb-8"></div>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 flex flex-col items-center sm:items-start text-center sm:text-left hover:border-indigo-500/30 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
                            <div className="flex flex-col space-y-4 w-full">
                                <a href="https://github.com/ruban200" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white bg-slate-800/50 p-4 rounded-xl transition-all hover:translate-x-1">
                                    <div className="bg-slate-700 p-3 rounded-lg text-cyan-400">
                                        <Github className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-lg">GitHub</span>
                                        <span className="text-sm text-slate-400">github.com/ruban200</span>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/ruban-raj-s-62880836a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white bg-slate-800/50 p-4 rounded-xl transition-all hover:translate-x-1">
                                    <div className="bg-slate-700 p-3 rounded-lg text-indigo-400">
                                        <Linkedin className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-lg">LinkedIn</span>
                                        <span className="text-sm text-slate-400">Ruban Raj.S</span>
                                    </div>
                                </a>
                                <a href="https://x.com/ruban5398" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white bg-slate-800/50 p-4 rounded-xl transition-all hover:translate-x-1">
                                    <div className="bg-slate-700 p-3 rounded-lg text-blue-400">
                                        <Twitter className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-lg">X (Twitter)</span>
                                        <span className="text-sm text-slate-400">@ruban5398</span>
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/ruban_offical/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white bg-slate-800/50 p-4 rounded-xl transition-all hover:translate-x-1">
                                    <div className="bg-slate-700 p-3 rounded-lg text-pink-400">
                                        <Instagram className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-lg">Instagram</span>
                                        <span className="text-sm text-slate-400">@ruban_offical</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700"
                    >
                        <form className="space-y-6" onSubmit={async (e) => {
                            e.preventDefault()
                        }}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Your Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="name" autoComplete="name" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Your Email</label>
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" autoComplete="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} id="message" rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none" placeholder="Hello Ruban..."></textarea>
                            </div>
                            <div>
                                <BubblesButton type="button" onClick={async (e) => {
                                    e.preventDefault()
                                    setStatus('sending')
                                    try {
                                        const res = await fetch((import.meta.env.DEV ? 'http://localhost:5000' : 'https://contact-api-ruban200.vercel.app') + '/api/contact', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({ name, email, message })
                                        })
                                        if (res.ok) {
                                            setStatus('sent')
                                            setName('')
                                            setEmail('')
                                            setMessage('')
                                        } else {
                                            const data = await res.json()
                                            setStatus('error')
                                            setError(data.error || 'Submission failed')
                                        }
                                    } catch (err) {
                                        setStatus('error')
                                        setError('Network error')
                                    }
                                }} className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 border-none">
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                    <Send className="w-5 h-5" />
                                </BubblesButton>
                            </div>
                            {status === 'sent' && <p className="text-sm text-emerald-400">Thanks — your message was sent.</p>}
                            {status === 'error' && <p className="text-sm text-red-400">{error}</p>}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
