import '../styles/globals.css';
import React from 'react';

export const metadata = {
  title: 'Food Ordering',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 transition-colors dark:bg-gray-900 dark:text-gray-100">
        <header className="p-4 text-2xl font-bold shadow">Makanan</header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
