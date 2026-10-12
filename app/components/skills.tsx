'use client'

import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'

const SKILL_GROUPS = [
  {
    category: 'Automatización QA',
    icon: '⚙️',
    skills: ['Selenium', 'Cucumber', 'Serenity'],
  },
  {
    category: 'API & Servicios',
    icon: '🔗',
    skills: ['Postman', 'SOAP UI'],
  },
  {
    category: 'Bases de Datos',
    icon: '🗄️',
    skills: ['MySQL', 'SQL Server', 'Oracle'],
  },
  {
    category: 'DevOps & CI',
    icon: '🚀',
    skills: ['Jenkins', 'Docker', 'DevOps'],
  },
  {
    category: 'Control de Versiones',
    icon: '📂',
    skills: ['GitHub', 'Bitbucket'],
  },
  {
    category: 'Gestión',
    icon: '📋',
    skills: ['Jira', 'Scrum'],
  },
  {
    category: 'Desarrollo Web',
    icon: '🌐',
    skills: ['Angular', 'JavaScript', 'PHP'],
  },
  {
    category: 'IDEs & Herramientas',
    icon: '🛠️',
    skills: ['VS Code', 'Eclipse', 'NetBeans', 'Termius'],
  },
  {
    category: 'Inteligencia Artificial',
    icon: '🤖',
    skills: ['Investigación IA', 'Machine Learning', 'Prompt Engineering'],
  },
]

export default function Skills() {
  return (
    <section id="habilidades" className="py-20 md:py-28 bg-muted/20">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn>
          <p className="font-mono text-primary text-sm mb-3 glow-green">&gt;_ habilidades</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Stack <span className="text-primary">Tecnológico</span>
          </h2>
        </FadeIn>

        <Stagger staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SKILL_GROUPS.map((group) => (
            <StaggerItem key={group.category}>
              <div className="p-5 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300 h-full group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">{group.icon}</span>
                  <h3 className="font-semibold text-sm text-foreground">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(group.skills ?? []).map((skill: string) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono rounded-md bg-muted text-muted-foreground border border-border group-hover:border-primary/30 group-hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
