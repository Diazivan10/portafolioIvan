'use client'

import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'

const EDUCATION = [
  {
    title: 'Ingeniería de Sistemas',
    institution: 'Corporación Universitaria de Ciencia y Desarrollo (Uniciencia)',
    location: 'Bucaramanga, Colombia',
    year: '2021',
  },
  {
    title: 'Bachiller Académico',
    institution: 'Escuela Normal Superior de Bucaramanga',
    location: 'Bucaramanga, Colombia',
    year: '2014',
  },
]


export default function Education() {
  return (
    <section id="educacion" className="py-20 md:py-28 bg-muted/20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-primary text-sm mb-3 glow-green">&gt;_ educación</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Formación <span className="text-primary">Académica</span>
          </h2>
        </FadeIn>

        <Stagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
          {EDUCATION.map((edu) => (
            <StaggerItem key={edu.title}>
              <div className="p-5 rounded-lg bg-card border border-border h-full">
                <div className="flex items-center gap-2 mb-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
                  </svg>
                  <span className="font-mono text-xs text-primary">{edu.year}</span>
                </div>
                <h3 className="font-bold text-foreground mb-1">{edu.title}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution}</p>
                <p className="text-xs text-muted-foreground/70 mt-0.5">{edu.location}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

      </div>
    </section>
  )
}
