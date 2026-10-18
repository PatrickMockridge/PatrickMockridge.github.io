import type { ReactNode } from 'react'
import { HeaderLine } from './components/HeaderLine'
import { TabIndex } from './components/TabIndex'
import { TabPanel } from './components/TabPanel'
import { MAILTO, SITE, type TabId } from './data/site'
import { useTab } from './hooks/useTab'
import { AzothTab } from './tabs/AzothTab'
import { ContactTab } from './tabs/ContactTab'
import { CVTab } from './tabs/CVTab'
import { DarkWowTab } from './tabs/DarkWowTab'
import { MudraTab } from './tabs/MudraTab'
import { RnodeRustTab } from './tabs/RnodeRustTab'
import { ResearchTab } from './tabs/ResearchTab'

const PANELS: { id: TabId; node: ReactNode }[] = [
  { id: 'cv', node: <CVTab /> },
  { id: 'darkwow', node: <DarkWowTab /> },
  { id: 'rnode-rust', node: <RnodeRustTab /> },
  { id: 'azoth', node: <AzothTab /> },
  { id: 'mudra', node: <MudraTab /> },
  { id: 'research', node: <ResearchTab /> },
  { id: 'contact', node: <ContactTab /> },
]

export default function App({
  initialTab,
  prerender = false,
}: {
  initialTab?: TabId
  prerender?: boolean
}) {
  const { tab, setTab } = useTab(initialTab)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site">
        <div className="window">
          <HeaderLine />
          <TabIndex active={tab} onChange={setTab} />
          <main id="main">
            {PANELS.map(({ id, node }) =>
              prerender && id !== tab ? null : (
                <TabPanel key={id} id={id} active={tab === id}>
                  {node}
                </TabPanel>
              ),
            )}
          </main>
          <footer className="window-footer">
            <span>
              {SITE.name} · {SITE.location}
            </span>
            <span>
              <a href={MAILTO}>Enquiries</a> · <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV (PDF)</a>
            </span>
          </footer>
        </div>
      </div>
    </>
  )
}
