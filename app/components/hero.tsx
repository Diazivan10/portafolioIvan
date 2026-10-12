'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const ROLES = ['QA Engineer', 'Test Automation', 'Quality Analyst', 'Ingeniero de Sistemas']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex] ?? ''
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex((p) => p + 1), 80)
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((p) => p - 1), 40)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setRoleIndex((p) => (p + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  const displayText = (ROLES[roleIndex] ?? '').slice(0, charIndex)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'linear-gradient(hsl(215 20% 18% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(215 20% 18% / 0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-primary text-sm mb-4 glow-green">&gt;_ hello world</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
            Iván Ricardo<br />
            <span className="text-primary glow-green">Díaz C.</span>
          </h1>

          <div className="h-10 flex items-center justify-center">
            <span className="font-mono text-lg sm:text-xl md:text-2xl text-muted-foreground">
              {displayText}
              <span className="animate-blink text-primary">|</span>
            </span>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-xs text-muted-foreground font-mono">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Floridablanca, Santander, Colombia
            </span>
            <a href="https://www.linkedin.com/in/Ivan-Diaz-C" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-xs text-muted-foreground font-mono hover:text-primary hover:border-primary transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:irdiaz97@hotmail.com" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-xs text-muted-foreground font-mono hover:text-primary hover:border-primary transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
              irdiaz97@hotmail.com
            </a>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="#experiencia"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all hover:shadow-[0_0_20px_hsl(152_100%_50%/0.3)] text-sm"
            >
              Ver experiencia
            </a>
            <a
              href="#contacto"
              className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg hover:border-primary hover:text-primary transition-all text-sm"
            >
              Contactar
            </a>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-1.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
