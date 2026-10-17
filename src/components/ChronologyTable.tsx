import type { ReactNode } from 'react'

export interface ChronologyRow {
  period: string
  body: ReactNode
}

export function ChronologyTable({ rows }: { rows: ChronologyRow[] }) {
  return (
    <table className="chronology">
      <thead>
        <tr>
          <th scope="col">Period</th>
          <th scope="col">Work</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.period}>
            <td>{row.period}</td>
            <td>{row.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
