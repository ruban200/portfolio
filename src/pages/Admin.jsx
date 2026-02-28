import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Lock, Mail, Inbox, RefreshCw, Trash2 } from 'lucide-react'

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [password, setPassword] = useState('')
    const [contacts, setContacts] = useState([])
    const [status, setStatus] = useState('idle') // idle, loading, error, success
    const [errorMsg, setErrorMsg] = useState('')

    const handleLogin = async (e) => {
        e.preventDefault()
        setStatus('loading')
        try {
            // Send the admin key in the header to authenticate
            const res = await fetch((import.meta.env.DEV ? 'http://localhost:5000' : 'https://contact-api-ruban200.vercel.app') + '/api/contact', {
                headers: { 'x-admin-key': password }
            })

            if (res.ok) {
                const data = await res.json()
                setContacts(data)
                setIsAuthenticated(true)
                setStatus('success')
            } else {
                setStatus('error')
                setErrorMsg('Invalid admin password.')
            }
        } catch (err) {
            setStatus('error')
            setErrorMsg('Failed to connect to the server (check if backend is running).')
        }
    }

    const refreshData = async () => {
        setStatus('loading')
        try {
            const res = await fetch((import.meta.env.DEV ? 'http://localhost:5000' : 'https://contact-api-ruban200.vercel.app') + '/api/contact', {
                headers: { 'x-admin-key': password }
            })
            if (res.ok) {
                const data = await res.json()
                setContacts(data)
                setStatus('success')
            }
        } catch {
            setStatus('error')
        }
    }

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to permanently delete this message?')) return;

        try {
            const res = await fetch(`${import.meta.env.DEV ? 'http://localhost:5000' : 'https://contact-api-ruban200.vercel.app'}/api/contact/${id}`, {
                method: 'DELETE',
                headers: { 'x-admin-key': password }
            })
            if (res.ok) {
                // Remove the deleted contact from the UI immediately to make it snappy
                setContacts(contacts.filter(c => c.id !== id));
            } else {
                alert('Failed to delete message. Check your admin key.');
            }
        } catch {
            alert('Network error while trying to delete.');
        }
    }

    // Formatting timestamp securely
    const formatDate = (isoString) => {
        return new Date(isoString).toLocaleString('en-US', {
            month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
        })
    }

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen pt-24 pb-12 px-4 flex items-center justify-center bg-slate-900">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-800/80 p-8 rounded-2xl border border-slate-700 max-w-md w-full shadow-2xl"
                >
                    <div className="flex justify-center mb-6">
                        <div className="p-3 bg-indigo-500/20 rounded-full">
                            <Lock className="w-8 h-8 text-indigo-400" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-center text-white mb-2">Admin Portal</h2>
                    <p className="text-slate-400 text-center mb-8 text-sm">Enter the secret ADMIN_KEY from your .env file to view messages.</p>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Secret Password"
                                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-center tracking-widest"
                                required
                            />
                        </div>
                        {status === 'error' && (
                            <p className="text-red-400 text-center text-sm">{errorMsg}</p>
                        )}
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50"
                        >
                            {status === 'loading' ? 'Verifying...' : 'Unlock Database'}
                        </button>
                    </form>
                </motion.div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-900">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
                            <Inbox className="w-8 h-8 text-cyan-400" />
                            Inbox Database
                        </h1>
                        <p className="text-slate-400 mt-2">Showing all {contacts.length} secure messages from Clever Cloud.</p>
                    </div>
                    <button
                        onClick={refreshData}
                        className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg border border-slate-700 transition"
                    >
                        <RefreshCw className={`w-4 h-4 ${status === 'loading' ? 'animate-spin' : ''}`} />
                        Refresh
                    </button>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-800 border-b border-slate-700 text-slate-300 text-sm font-semibold uppercase tracking-wider">
                                    <th className="py-4 px-6">Date</th>
                                    <th className="py-4 px-6">Sender</th>
                                    <th className="py-4 px-6 min-w-[300px]">Message</th>
                                    <th className="py-4 px-6 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-700/50">
                                {contacts.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="py-12 text-center text-slate-400">
                                            No messages found in the database.
                                        </td>
                                    </tr>
                                ) : (
                                    contacts.map((contact) => (
                                        <motion.tr
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            key={contact.id}
                                            className="hover:bg-slate-800/80 transition-colors group"
                                        >
                                            <td className="py-4 px-6 text-sm text-slate-400 whitespace-nowrap align-top">
                                                {formatDate(contact.created_at)}
                                            </td>
                                            <td className="py-4 px-6 align-top">
                                                <div className="font-medium text-white mb-1">{contact.name}</div>
                                                <a href={`mailto:${contact.email}`} className="text-sm text-cyan-400 hover:underline flex items-center gap-1">
                                                    <Mail className="w-3 h-3" /> {contact.email}
                                                </a>
                                            </td>
                                            <td className="py-4 px-6 text-slate-300 text-sm leading-relaxed whitespace-pre-wrap align-top">
                                                {contact.message}
                                            </td>
                                            <td className="py-4 px-6 align-top text-right">
                                                <div className="w-[140px] flex justify-end ml-auto">
                                                    <button
                                                        onClick={() => handleDelete(contact.id)}
                                                        className="delete-btn"
                                                        title="Delete Message"
                                                    >
                                                        <svg viewBox="0 0 448 512" className="delete-btn-icon" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin
