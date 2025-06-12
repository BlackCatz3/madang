'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../../components/ui/button'

const palette = [
  { name: 'Primary', hex: '#ef4444', className: 'bg-primary' },
  { name: 'Accent', hex: '#f59e0b', className: 'bg-accent' },
]

export default function StyleGuidePage() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={dark ? 'dark' : 'light'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="space-y-10 transition-colors"
      >
        <div>
          <Button onClick={() => setDark(!dark)}>
            Toggle {dark ? 'Light' : 'Dark'} Mode
          </Button>
        </div>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Palette</h2>
          <div className="flex space-x-4">
            {palette.map((c) => (
              <div key={c.name} className="text-center">
                <div className={`h-12 w-12 rounded ${c.className}`} />
                <div className="mt-2 text-sm">{c.name}</div>
                <div className="text-xs text-gray-500">{c.hex}</div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Font Scale</h2>
          <div className="space-y-2">
            <p className="text-4xl font-bold">Display</p>
            <p className="text-2xl font-semibold">Heading</p>
            <p className="text-base">Body</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Caption</p>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Buttons</h2>
          <div className="space-x-2">
            <Button>Default</Button>
            <Button className="hover:bg-primary/80">Hover</Button>
            <Button disabled>Disabled</Button>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">A11y Tips</h2>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>Gunakan rasio kontras minimal 4.5:1 untuk teks.</li>
            <li>Sediakan mode high-contrast bagi pengguna dengan gangguan penglihatan.</li>
            <li>Pastikan warna terbaca baik pada mode terang maupun gelap.</li>
          </ul>
        </section>
      </motion.div>
    </AnimatePresence>
  )
}
