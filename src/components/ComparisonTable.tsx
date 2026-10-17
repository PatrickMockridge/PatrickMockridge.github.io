import type { ReactNode } from 'react'

export type ComparisonCell = ReactNode | { yes: boolean; label?: string }

export interface ComparisonColumn {
  label: string
  srLabel?: string
}

export interface ComparisonRow {
  key: string
  header: ReactNode
  cells: ComparisonCell[]
}

interface ComparisonTableProps {
  variant: 'matrix' | 'claims' | 'timeline' | 'contrast'
  caption: string
  subtitle?: ReactNode
  columns: ComparisonColumn[]
  rows: ComparisonRow[]
  note?: ReactNode
}

function Cell({ cell }: { cell: ComparisonCell }) {
  if (
    typeof cell === 'object' &&
    cell !== null &&
    'yes' in cell &&
    typeof (cell as { yes: unknown }).yes === 'boolean'
  ) {
    const { yes } = cell as { yes: boolean }
    return (
      <>
        <span aria-hidden="true">{yes ? '✓' : '—'}</span>
        <span className="visually-hidden">{yes ? 'Yes' : 'No'}</span>
      </>
    )
  }
  return <>{cell}</>
}

export function ComparisonTable({
  variant,
  caption,
  subtitle,
  columns,
  rows,
  note,
}: ComparisonTableProps) {
  return (
    <div className={`comparison comparison--${variant}`}>
      <div className="comparison-head">
        <span className="comparison-caption">{caption}</span>
        {subtitle && <span className="comparison-subtitle">{subtitle}</span>}
      </div>
      <div className="comparison-scroll" role="region" aria-label={caption} tabIndex={0}>
        <table className="comparison-table">
          <caption className="visually-hidden">{caption}</caption>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={column.label || `column-${index}`} scope="col">
                  {column.label || <span className="visually-hidden">{column.srLabel}</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key}>
                <th scope="row">{row.header}</th>
                {row.cells.map((cell, index) => (
                  <td key={`${row.key}-${index}`}>
                    <Cell cell={cell} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="source-note">{note}</p>}
    </div>
  )
}
