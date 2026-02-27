# Supabase Setup Guide

This project uses Supabase PostgreSQL instead of MongoDB to store contact form submissions.

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign up / log in.
2. Create a new project (or use an existing one).
3. Go to **Project Settings** → **API** and copy:
   - `Project URL` → this is your `SUPABASE_URL`
   - `anon public` key → this is your `SUPABASE_KEY`

## Step 2: Create `contacts` Table

In the Supabase Dashboard, go to **SQL Editor** and run this query:

```sql
CREATE TABLE contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Optional: Enable RLS (Row Level Security)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Optional: Create a policy to allow inserts from the anon key (for your form)
CREATE POLICY "Allow inserts for anonymous users" ON contacts
  FOR INSERT WITH CHECK (true);

-- Optional: Create a policy to allow SELECT only with a custom header or admin key
```

## Step 3: Configure `.env`

Copy `.env.example` to `.env` and fill in:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-anon-public-key
ADMIN_KEY=your-secret-admin-password
PORT=5000
```

**⚠️ Never commit `.env` to version control!** It's already in `.gitignore`.

## Step 4: Start the Backend

```bash
npm install @supabase/supabase-js
npm run dev:server
```

The server will connect to Supabase and make the `/api/contact` endpoint available.

## Step 5: Test

Submit the form on your portfolio site. If successful, you'll see "Thanks — your message was sent."  
Check the `contacts` table in Supabase Dashboard → **Table Editor** to see stored messages.

---

## API Endpoints

- **POST /api/contact**  
  Accepts `{ name, email, message }` and inserts into the `contacts` table.

- **GET /api/contact**  
  Returns all messages. Requires `?key=<ADMIN_KEY>` or `x-admin-key` header matching your `ADMIN_KEY`.

## Troubleshooting

- **"Database not configured"** → Missing `SUPABASE_URL` or `SUPABASE_KEY`.
- **403 or permission denied** → Check RLS policies in Supabase; ensure the anon key has INSERT permission.
- **"Unauthorized" (GET endpoint)** → Wrong or missing `ADMIN_KEY`.
