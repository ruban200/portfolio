import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
const MYSQL_URI = process.env.MYSQL_URI

app.use(cors())
app.use(express.json())

let pool;

async function initDB() {
    try {
        if (!MYSQL_URI) {
            console.warn('MYSQL_URI not set. Running server without database connection.')
            return
        }

        // Create the connection pool with a connection limit for free-tier DB
        pool = mysql.createPool({
            uri: MYSQL_URI,
            connectionLimit: 2
        })

        // Ensure the contacts table exists
        await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `)
        console.log('Connected to MySQL and verified contacts table')
    } catch (error) {
        console.error('MySQL connection error:', error)
    }
}

initDB()

// Health
app.get('/api/health', (req, res) => res.json({ status: 'ok' }))

// Admin endpoint to list submissions (protected by ADMIN_KEY env variable)
app.get('/api/contact', async (req, res) => {
    try {
        if (!pool) return res.status(503).json({ error: 'Database not configured.' })
        const key = req.headers['x-admin-key'] || req.query.key
        if (process.env.ADMIN_KEY && key !== process.env.ADMIN_KEY) {
            return res.status(401).json({ error: 'Unauthorized credentials' })
        }

        const [rows] = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC')
        return res.json(rows)
    } catch (err) {
        console.error('Error fetching contacts:', err)
        return res.status(500).json({ error: 'Server error: ' + err.message })
    }
})

// Admin endpoint to delete a submission (protected by ADMIN_KEY env variable)
app.delete('/api/contact/:id', async (req, res) => {
    try {
        if (!pool) return res.status(503).json({ error: 'Database not configured.' })
        const key = req.headers['x-admin-key'] || req.query.key
        if (process.env.ADMIN_KEY && key !== process.env.ADMIN_KEY) {
            return res.status(401).json({ error: 'Unauthorized credentials' })
        }

        const { id } = req.params;
        const [result] = await pool.query('DELETE FROM contacts WHERE id = ?', [id])

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Message not found' })
        }
        return res.json({ message: 'Message deleted successfully' })
    } catch (err) {
        console.error('Error deleting contact:', err)
        return res.status(500).json({ error: 'Server error: ' + err.message })
    }
})

// Contact endpoint (submission)
app.post('/api/contact', async (req, res) => {
    try {
        if (!pool) return res.status(503).json({ error: 'Database not configured.' })
        const { name, email, message } = req.body
        if (!name || !email || !message) return res.status(400).json({ error: 'All fields are required' })

        const [result] = await pool.query(
            'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
            [name, email, message]
        )

        return res.status(201).json({ message: 'Message saved successfully' })
    } catch (err) {
        console.error('Error saving contact:', err)
        return res.status(500).json({ error: 'Server error: ' + err.message })
    }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
