'use client'

import { FadeIn } from '@/components/ui/animate'

export default function About() {
  return (
    <section id="sobre-mi" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-primary text-sm mb-3 glow-green">&gt;_ sobre_mí</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ingeniero de Sistemas &<br />
              <span className="text-primary">QA Engineer</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Profesional con más de <span className="text-foreground font-semibold">5 años de experiencia</span> en
                aseguramiento de calidad de software, especializado en pruebas funcionales, no funcionales,
                automatización y pruebas de carga en sectores como <span className="text-foreground font-semibold">fintech, salud y servicios tecnológicos</span>.
              </p>
              <p>
                He trabajado con clientes de alto nivel como <span className="text-foreground font-semibold">BBVA Colombia</span> y
                <span className="text-foreground font-semibold"> Experian</span>, liderando estrategias de testing en equipos ágiles
                con metodología Scrum. Actualmente ampliando conocimientos en <span className="text-foreground font-semibold">Inteligencia Artificial</span>.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">
              {[
                { value: '+5', label: 'Años exp.' },
                { value: '6+', label: 'Empresas' },
                { value: '5', label: 'Países' },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-muted/50 border border-border">
                  <p className="text-2xl md:text-3xl font-bold text-primary font-mono glow-green">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
