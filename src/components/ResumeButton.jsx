import React from 'react'
import { Download, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

const ResumeButton = () => {
    return (
        <Link to="/resume" className="relative group w-full sm:w-auto inline-flex items-center justify-center h-24 sm:h-auto sm:py-4 px-8 decoration-transparent">
            {/* The standard text download for mobile or fallback */}
            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:opacity-0 transition-opacity bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg px-8 py-4 sm:hidden md:hidden lg:hidden">
                Resume <ExternalLink className="w-5 h-5" />
            </span>

            {/* Hidden on small screens, the envelope replaces the button visually */}
            <div className="hidden sm:block">
                <div className="group w-full inline-flex justify-center items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-200">
                    Resume
                    <ExternalLink className="w-5 h-5" />
                </div>
            </div>

            {/* The Envelope Animation Wrapper - positioned absolutely inside or outside */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] scale-50 sm:scale-[0.4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="letter-image">
                    <div className="animated-mail">
                        <div className="back-fold"></div>
                        <div className="letter">
                            <div className="letter-border"></div>
                            <div className="letter-title">Resume</div>
                            <div className="letter-context"></div>
                            <div className="letter-stamp">
                                <div className="letter-stamp-inner"></div>
                            </div>
                        </div>
                        <div className="top-fold"></div>
                        <div className="body"></div>
                        <div className="left-fold"></div>
                    </div>
                    <div className="shadow"></div>
                </div>
            </div>
            {/* Text that shows when hovering (instead of original button) */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-16 text-cyan-400 font-bold whitespace-nowrap z-20 pointer-events-none">
                View Resume!
            </div>
        </Link>
    )
}

export default ResumeButton
