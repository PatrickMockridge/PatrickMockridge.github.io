import { useEffect, useRef } from 'react'
import { TABS, pathForTab, type TabId } from '../data/site'

interface TabIndexProps {
  active: TabId
  onChange: (tab: TabId) => void
}

export function TabIndex({ active, onChange }: TabIndexProps) {
  const activeRef = useRef<HTMLAnchorElement | null>(null)

  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }, [active])

  return (
    <nav className="tab-index" aria-label="Sections">
      {TABS.map((tab) => (
        <a
          key={tab.id}
          ref={active === tab.id ? activeRef : undefined}
          className="tab"
          id={`tab-${tab.id}`}
          href={pathForTab(tab.id)}
          aria-current={active === tab.id ? 'page' : undefined}
          onClick={(event) => {
            if (
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey ||
              event.button !== 0
            ) {
              return
            }
            event.preventDefault()
            onChange(tab.id)
          }}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  )
}
