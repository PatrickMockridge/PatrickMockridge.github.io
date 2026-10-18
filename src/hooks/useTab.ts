import { useEffect, useState } from 'react'
import {
  LEGACY_TAB_ALIASES,
  PAGE_META,
  TABS,
  pathForTab,
  tabForPath,
  type TabId,
} from '../data/site'

function readTab(): TabId {
  if (typeof window === 'undefined') return 'cv'
  const fromPath = tabForPath(window.location.pathname)
  if (fromPath && fromPath !== 'cv') return fromPath
  const value = new URLSearchParams(window.location.search).get('tab')
  if (!value) return 'cv'
  const resolved = LEGACY_TAB_ALIASES[value] ?? value
  return TABS.some((tab) => tab.id === resolved) ? (resolved as TabId) : 'cv'
}

export function useTab(initialTab?: TabId) {
  const [tab, setTabState] = useState<TabId>(() => initialTab ?? readTab())

  useEffect(() => {
    const onPopState = () => setTabState(readTab())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    document.title = PAGE_META[tab].title
    const url = new URL(window.location.href)
    const canonicalPath = pathForTab(tab)
    if (url.pathname !== canonicalPath || url.searchParams.has('tab')) {
      url.pathname = canonicalPath
      url.searchParams.delete('tab')
      window.history.replaceState({}, '', url)
    }
  }, [tab])

  useEffect(() => {
    const beforePrint = () => {
      document.title = 'Patrick Mockridge — Curriculum Vitae'
    }
    const afterPrint = () => {
      document.title = PAGE_META[tab].title
    }
    window.addEventListener('beforeprint', beforePrint)
    window.addEventListener('afterprint', afterPrint)
    return () => {
      window.removeEventListener('beforeprint', beforePrint)
      window.removeEventListener('afterprint', afterPrint)
    }
  }, [tab])

  const setTab = (next: TabId) => {
    if (next === tab) return
    window.history.pushState({}, '', pathForTab(next))
    setTabState(next)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return { tab, setTab }
}
