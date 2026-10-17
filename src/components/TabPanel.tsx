import type { ReactNode } from 'react'
import type { TabId } from '../data/site'

interface TabPanelProps {
  id: TabId
  active: boolean
  children: ReactNode
}

export function TabPanel({ id, active, children }: TabPanelProps) {
  return (
    <section
      className="panel"
      id={`panel-${id}`}
      role="tabpanel"
      aria-labelledby={`tab-${id}`}
      hidden={!active}
    >
      {children}
    </section>
  )
}
