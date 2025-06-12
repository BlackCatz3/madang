'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface MenuCardProps {
  nama: string;
  harga: string;
  gambar: string;
}

export default function MenuCard({ nama, harga, gambar }: MenuCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="overflow-hidden rounded border shadow"
    >
      <Image
        src={gambar}
        alt={nama}
        width={200}
        height={150}
        className="h-40 w-full object-cover"
      />
      <div className="p-2">
        <div className="font-semibold">{nama}</div>
        <div className="text-sm text-gray-500">{harga}</div>
      </div>
    </motion.div>
  );
}
