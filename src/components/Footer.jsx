import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <p className="text-slate-400 text-sm mb-4">
                    Built with React, Tailwind CSS, and Framer Motion.
                </p>
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} Ruban Raj.S. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
