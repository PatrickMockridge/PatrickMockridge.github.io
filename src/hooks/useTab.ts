import { useEffect, useState } from 'react'
import { LEGACY_TAB_ALIASES, TABS, type TabId } from '../data/site'

const TITLES: Record<TabId, string> = {
  cv: 'Patrick Mockridge — Engineer',
  darkwow: 'DarkWow — Patrick Mockridge',
  'rnode-rust': 'rnode-rust — Patrick Mockridge',
  azoth: 'Azoth — Patrick Mockridge',
  mudra: 'Mudra — Patrick Mockridge',
  research: 'Research & Writing — Patrick Mockridge',
  contact: 'Enquiries — Patrick Mockridge',
}

function readTab(): TabId {
  if (typeof window === 'undefined') return 'cv'
  const value = new URLSearchParams(window.location.search).get('tab')
  if (!value) return 'cv'
  const resolved = LEGACY_TAB_ALIASES[value] ?? value
  return TABS.some((tab) => tab.id === resolved) ? (resolved as TabId) : 'cv'
}

export function useTab() {
  const [tab, setTabState] = useState<TabId>(readTab)

  useEffect(() => {
    const onPopState = () => setTabState(readTab())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    document.title = TITLES[tab]
    const value = new URLSearchParams(window.location.search).get('tab')
    if (value && LEGACY_TAB_ALIASES[value] === tab) {
      const url = new URL(window.location.href)
      url.searchParams.set('tab', tab)
      window.history.replaceState({}, '', url)
    }
  }, [tab])

  const setTab = (next: TabId) => {
    if (next === tab) return
    const url = new URL(window.location.href)
    if (next === 'cv') {
      url.searchParams.delete('tab')
    } else {
      url.searchParams.set('tab', next)
    }
    window.history.pushState({}, '', url)
    setTabState(next)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return { tab, setTab }
}
