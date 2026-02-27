# Portfolio Website

This repository hosts the personal developer portfolio of **Ruban Raj.S**. It's built with React, Tailwind CSS, Framer Motion and bundled using Vite.

A lightweight Express backend handles contact form submissions and saves them to MongoDB. This README documents how to configure, run and extend the application.

---

## Development Setup

1. **Install dependencies**
   `ash
   npm install
   # install server dependencies as well
   npm install express mongoose cors dotenv
   npm install -D nodemon
   `

2. **Environment variables**
   Copy .env.example to .env and provide values for:
   - MONGO_URI – your MongoDB connection string
   - ADMIN_KEY *(optional)* – secret used for accessing the admin API

3. **Start servers**
   `ash
   npm run dev:server    # runs Express backend (port 5000 by default)
   npm run dev           # starts Vite frontend (http://localhost:5173)
   `

   You can also build for production using 
pm run build.

## API Endpoints

- POST /api/contact – accepts JSON {name,email,message}; saves to database.
- GET /api/contact – returns all submissions. Requires ADMIN_KEY passed as ?key= query or x-admin-key header. Returns 401 without valid key.

These endpoints are defined in server/index.js and backed by the Mongoose model in server/models/Contact.js.

## Database Management

Messages are stored in the contacts collection in MongoDB. You can inspect or delete records using MongoDB Compass, the Atlas UI, or any Mongo client.

## Customizing Content

The frontend pages live under src/components. Sections such as About, Projects, Skills, Education, and Contact can be edited there. Styling is driven by Tailwind classes.

## Deployment

Build the frontend with 
pm run build and serve static files from a Node/Express server or host the output on any static hosting platform. The API can be deployed to platforms like Heroku, Vercel (Serverless functions), or a VPS with Node support.

---

© 2026 Ruban Raj.S. All rights reserved.
