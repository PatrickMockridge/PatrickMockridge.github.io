/* oxlint-disable react/only-export-components -- server entry, not a Fast Refresh module */
import { renderToString } from 'react-dom/server'
import App from './App'
import { PAGE_META, TABS, type TabId } from './data/site'

export function render(tab: TabId): string {
  return renderToString(<App initialTab={tab} prerender />)
}

export { PAGE_META, TABS }
