import React from 'react'
import { motion } from 'framer-motion'

const InfoCard = ({ icon, title, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="info-card h-full"
        >
            <div className="h-full bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 flex flex-col items-start transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-slate-900/80 flex items-center justify-center mb-6 shadow-inner pointer-events-none text-white">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-slate-300 leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default InfoCard
