import type { ReactNode } from 'react'

export interface MetadataItem {
  label: string
  value: ReactNode
}

interface TitleBlockProps {
  descriptor: string
  title: string
  subtitle: string
  metadata: MetadataItem[]
}

export function TitleBlock({ descriptor, title, subtitle, metadata }: TitleBlockProps) {
  return (
    <header className="title-block">
      <p className="descriptor">{descriptor}</p>
      <h1 className="case-title">{title}</h1>
      <p className="case-subtitle">{subtitle}</p>
      <dl className="metadata">
        {metadata.map((item) => (
          <div className="metadata-row" key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </header>
  )
}
