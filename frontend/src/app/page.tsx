'use client';
import { motion } from 'framer-motion';
import useSWR from 'swr';
import MenuCard from '../components/MenuCard';

interface MenuItem {
  id: number;
  nama: string;
  harga: string;
  gambar: string;
}

const sampleMenu: MenuItem[] = [
  { id: 1, nama: 'Nasi Goreng', harga: 'Rp25.000', gambar: '/nasi-goreng.jpg' },
  { id: 2, nama: 'Mie Ayam', harga: 'Rp20.000', gambar: '/mie-ayam.jpg' },
  { id: 3, nama: 'Sate Ayam', harga: 'Rp30.000', gambar: '/sate-ayam.jpg' },
  { id: 4, nama: 'Bakso', harga: 'Rp18.000', gambar: '/bakso.jpg' },
];

const fetcher = () =>
  new Promise<MenuItem[]>((resolve) => setTimeout(() => resolve(sampleMenu), 1000));

export default function HomePage() {
  const { data } = useSWR('menus', fetcher);

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data
        ? data.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <MenuCard nama={item.nama} harga={item.harga} gambar={item.gambar} />
            </motion.div>
          ))
        : Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded bg-gray-200" />
          ))}
    </div>
  );
}
