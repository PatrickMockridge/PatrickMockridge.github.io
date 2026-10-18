import type { EvidenceRow, SourceRef } from '../data/projects'

function Source({ source }: { source: SourceRef }) {
  if (typeof source === 'string') return <>{source}</>
  return <a href={source.href} target="_blank" rel="noopener noreferrer">{source.label}</a>
}

interface EvidenceTableProps {
  rows: EvidenceRow[]
  caption?: string
  note?: string
}

export function EvidenceTable({ rows, caption, note }: EvidenceTableProps) {
  return (
    <div className="evidence">
      <table className="evidence-table">
        {caption && <caption className="visually-hidden">{caption}</caption>}
        <thead>
          <tr>
            <th scope="col">Measure</th>
            <th scope="col">Value</th>
            <th scope="col">Source</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.measure}>
              <td>{row.measure}</td>
              <td className="numeric">{row.value}</td>
              <td>
                <Source source={row.source} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {note && <p className="source-note">{note}</p>}
    </div>
  )
}
