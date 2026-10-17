import { useRef } from 'react'
import { TABS, type TabId } from '../data/site'

interface TabIndexProps {
  active: TabId
  onChange: (tab: TabId) => void
}

export function TabIndex({ active, onChange }: TabIndexProps) {
  const refs = useRef<Array<HTMLButtonElement | null>>([])

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index
    if (event.key === 'ArrowRight') next = (index + 1) % TABS.length
    else if (event.key === 'ArrowLeft') next = (index - 1 + TABS.length) % TABS.length
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = TABS.length - 1
    else return

    event.preventDefault()
    onChange(TABS[next].id)
    refs.current[next]?.focus()
  }

  return (
    <div className="tab-index" role="tablist" aria-label="Sections">
      {TABS.map((tab, index) => (
        <button
          key={tab.id}
          ref={(element) => {
            refs.current[index] = element
          }}
          className="tab"
          id={`tab-${tab.id}`}
          role="tab"
          type="button"
          aria-selected={active === tab.id}
          aria-controls={`panel-${tab.id}`}
          tabIndex={active === tab.id ? 0 : -1}
          onClick={() => onChange(tab.id)}
          onKeyDown={(event) => onKeyDown(event, index)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
