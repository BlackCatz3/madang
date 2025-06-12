import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import supabase from './supabaseClient';
import { getUserRole } from './auth';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'API is running' });
});

app.get('/menu', (_req, res) => {
  const menu = [
    { id: 1, nama: 'Nasi Goreng', harga: 25000, kategori: 'main', gambar: '/nasi-goreng.jpg' },
    { id: 2, nama: 'Mie Ayam', harga: 20000, kategori: 'main', gambar: '/mie-ayam.jpg' },
  ];
  res.json(menu);
});

app.post('/order', (req, res) => {
  const order = req.body;
  console.log('Received order', order);
  res.status(201).json({ message: 'Order received' });
});

app.put('/order/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const { error } = await supabase
    .from('order')
    .update({ status })
    .eq('id', id);
  if (error) {
    console.error('Failed to update order', error);
    return res.status(500).json({ message: 'Failed to update' });
  }
  return res.json({ message: 'Status updated' });
});

app.get('/me', async (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({ message: 'Missing token' });
  }
  const token = auth.replace('Bearer ', '');
  const role = await getUserRole(token);
  if (!role) {
    return res.status(401).json({ message: 'Invalid token' });
  }
  res.json({ role });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
