import type { ReactNode } from 'react'

interface WhatWhyProps {
  what: ReactNode
  why: ReactNode
  combination: ReactNode
}

export function WhatWhy({ what, why, combination }: WhatWhyProps) {
  return (
    <dl className="what-why">
      <div className="what-why-row">
        <dt>What</dt>
        <dd>{what}</dd>
      </div>
      <div className="what-why-row">
        <dt>Why</dt>
        <dd>{why}</dd>
      </div>
      <div className="what-why-row what-why-combination">
        <dt>The combination</dt>
        <dd>{combination}</dd>
      </div>
    </dl>
  )
}
