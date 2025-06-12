-- Example table definitions for Supabase (Postgres)

CREATE TABLE menu (
  id SERIAL PRIMARY KEY,
  nama TEXT NOT NULL,
  harga INTEGER NOT NULL,
  kategori TEXT,
  gambar TEXT
);

CREATE TABLE "order" (
  id SERIAL PRIMARY KEY,
  customer_id UUID,
  status TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE profile (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  role TEXT NOT NULL DEFAULT 'customer'
);
