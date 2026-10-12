'use client'

import { FadeIn } from '@/components/ui/animate'

const JOBS = [
  {
    company: 'NTT DATA Europe & LATAM',
    role: 'QA Engineer',
    period: 'Nov 2023 – Actualidad',
    client: 'Cliente: BBVA Colombia',
    points: [
      'Creación, diseño y ejecución de casos de prueba funcionales y no funcionales',
      'Pruebas de carga y rendimiento para aplicaciones bancarias',
      'Consultas SQL en MySQL y gestión de incidencias con JIRA',
    ],
  },
  {
    company: 'Experian Spanish LATAM',
    role: 'QA Analyst Senior',
    period: 'Abr 2022 – Dic 2022',
    client: null,
    points: [
      'Desarrollo e implementación de estrategias de pruebas',
      'Verificación de servicios web con SOAP UI',
      'Colaboración en equipos ágiles bajo metodología Scrum',
    ],
  },
  {
    company: 'Choucair Testing S.A.',
    role: 'Analista de Pruebas (QA)',
    period: 'Jul 2021 – Abr 2022',
    client: null,
    points: [
      'Pruebas automatizadas para clientes en Argentina, Colombia, Uruguay, Chile, Perú y Ecuador',
      'Uso de Selenium, Cucumber y Serenity para automatización',
    ],
  },
  {
    company: 'Criminal Legal Associates',
    role: 'Desarrollador Web',
    period: 'Mar 2021 – Jul 2021',
    client: null,
    points: [
      'Desarrollo de página web institucional',
      'Soporte técnico y atención al usuario',
    ],
  },
  {
    company: 'Hexa Solutions S.A.',
    role: 'Analista de Pruebas (QA)',
    period: 'Jul 2020 – Mar 2021',
    client: null,
    points: [
      'Análisis y pruebas de software web y móvil',
      'Análisis de servicios API, Docker y consultas en bases de datos',
    ],
  },
  {
    company: 'Alianza Diagnóstica S.A.',
    role: 'Desarrollador Web',
    period: 'Oct 2019 – Abr 2020',
    client: null,
    points: [
      'Generación de reportes administrativos y consultas en BD',
      'Modificaciones de órdenes y soporte al sistema',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-primary text-sm mb-3 glow-green">&gt;_ experiencia</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Trayectoria <span className="text-primary">Profesional</span>
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {JOBS.map((job, i) => (
              <FadeIn key={job.company} delay={i * 0.1}>
                <div className="relative pl-12 md:pl-16">
                  {/* Timeline dot */}
                  <div className={`absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                    i === 0
                      ? 'bg-primary border-primary shadow-[0_0_8px_hsl(152_100%_50%/0.5)]'
                      : 'bg-background border-muted-foreground/40'
                  }`} />

                  <div className="p-5 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="font-bold text-foreground">{job.role}</h3>
                      <span className="font-mono text-xs text-primary">{job.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground font-semibold">{job.company}</p>
                    {job.client && (
                      <p className="text-xs text-primary/70 font-mono mt-0.5">{job.client}</p>
                    )}
                    <ul className="mt-3 space-y-1.5">
                      {(job.points ?? []).map((point: string, j: number) => (
                        <li key={j} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-0.5 shrink-0">▹</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
