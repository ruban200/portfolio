import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Admin from './pages/Admin'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-50 font-sans selection:bg-indigo-500/30">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
