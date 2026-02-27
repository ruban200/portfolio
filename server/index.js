import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createClient } from '@supabase/supabase-js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY
const ADMIN_KEY = process.env.ADMIN_KEY

app.use(cors())
app.use(express.json())

// Initialize Supabase client
let supabase = null
let dbConnected = false

if (SUPABASE_URL && SUPABASE_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
  dbConnected = true
  console.log('Connected to Supabase')
} else {
  console.warn('SUPABASE_URL or SUPABASE_KEY not set. Running server without database connection.')
}

// Health
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// Contact endpoint (submission)
app.post('/api/contact', async (req, res) => {
  try {
    if (!dbConnected) return res.status(503).json({ error: 'Database not configured. Set SUPABASE_URL and SUPABASE_KEY to enable saving messages.' })
    const { name, email, message } = req.body
    if (!name || !email || !message) return res.status(400).json({ error: 'All fields are required' })

    const { data, error } = await supabase
      .from('contacts')
      .insert([{ name, email, message }])
    
    if (error) throw error
    return res.status(201).json({ message: 'Message saved' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Server error' })
  }
})

// Admin endpoint to list submissions (protected by ADMIN_KEY env variable)
app.get('/api/contact', async (req, res) => {
  try {
    if (!dbConnected) return res.status(503).json({ error: 'Database not configured.' })
    const key = req.headers['x-admin-key'] || req.query.key
    if (key !== ADMIN_KEY) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return res.json(data || [])
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Server error' })
  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
