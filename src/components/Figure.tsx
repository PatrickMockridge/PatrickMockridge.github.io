import type { ReactNode } from 'react'

interface FigureProps {
  id: string
  caption: string
  children: ReactNode
}

export function Figure({ id, caption, children }: FigureProps) {
  return (
    <figure className="figure" aria-labelledby={`${id}-caption`}>
      {children}
      <figcaption id={`${id}-caption`}>{caption}</figcaption>
    </figure>
  )
}
