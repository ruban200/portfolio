import React from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Twitter, Instagram } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Skills', path: '#skills' },
        { name: 'Projects', path: '#projects' },
        { name: 'Education', path: '#education' },
        { name: 'Contact', path: '#contact' },
    ]

    return (
        <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#home" className="flex items-center gap-2">
                            <img src={`${import.meta.env.BASE_URL}images/professional-portfolio.png`} alt="Logo" className="h-14 w-14 md:h-16 md:w-16 object-contain rounded-md shadow-sm border border-slate-700/50 transition-transform hover:scale-105" />
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 hidden sm:block">
                            </span>
                        </a>
                    </div>
                    <div className="hidden md:flex flex-1 justify-center">
                        <div className="nav-container max-w-4xl px-4 py-2 text-slate-300">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="nav-btn hover:text-cyan-400 text-lg px-6 py-2 font-medium transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <svg className="nav-outline w-full h-full" xmlns="http://www.w3.org/2000/svg">
                                <rect className="nav-rect" width="100%" height="100%" rx="8" />
                            </svg>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <a href="https://github.com/ruban200" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="GitHub">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/in/ruban-raj-s-62880836a" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="https://x.com/ruban5398" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="X (Twitter)">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="https://www.instagram.com/ruban_offical/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" title="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="mailto:ruban5398@gmail.com" className="text-slate-400 hover:text-white transition-colors" title="Email">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-slate-900 border-b border-slate-800"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-slate-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex space-x-4 px-3 py-2 mt-4 border-t border-slate-800 items-center justify-between">
                            <div className="flex space-x-4">
                                <a href="https://github.com/ruban200" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/ruban-raj-s-62880836a" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                            <ThemeToggle />
                        </div>
                    </div>
                </motion.div>
            )}
        </nav>
    )
}

export default Navbar
