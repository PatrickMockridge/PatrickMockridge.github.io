import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  number?: string
  title: string
  children: ReactNode
}

export function Section({ id, number, title, children }: SectionProps) {
  return (
    <section className="section" id={id} aria-labelledby={id ? `${id}-heading` : undefined}>
      <h2 className="section-heading" id={id ? `${id}-heading` : undefined}>
        {number && (
          <span className="section-number" aria-hidden="true">
            {number}
          </span>
        )}
        <span>{title}</span>
      </h2>
      {children}
    </section>
  )
}
