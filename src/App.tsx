import { HeaderLine } from './components/HeaderLine'
import { TabIndex } from './components/TabIndex'
import { TabPanel } from './components/TabPanel'
import { MAILTO, SITE } from './data/site'
import { useTab } from './hooks/useTab'
import { AzothTab } from './tabs/AzothTab'
import { ContactTab } from './tabs/ContactTab'
import { CVTab } from './tabs/CVTab'
import { DarkWowTab } from './tabs/DarkWowTab'
import { MudraTab } from './tabs/MudraTab'
import { RnodeRustTab } from './tabs/RnodeRustTab'
import { ResearchTab } from './tabs/ResearchTab'

export default function App() {
  const { tab, setTab } = useTab()

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
            <TabPanel id="cv" active={tab === 'cv'}>
              <CVTab />
            </TabPanel>
            <TabPanel id="darkwow" active={tab === 'darkwow'}>
              <DarkWowTab />
            </TabPanel>
            <TabPanel id="rnode-rust" active={tab === 'rnode-rust'}>
              <RnodeRustTab />
            </TabPanel>
            <TabPanel id="azoth" active={tab === 'azoth'}>
              <AzothTab />
            </TabPanel>
            <TabPanel id="mudra" active={tab === 'mudra'}>
              <MudraTab />
            </TabPanel>
            <TabPanel id="research" active={tab === 'research'}>
              <ResearchTab />
            </TabPanel>
            <TabPanel id="contact" active={tab === 'contact'}>
              <ContactTab />
            </TabPanel>
          </main>
          <footer className="window-footer">
            <span>
              {SITE.name} · {SITE.location}
            </span>
            <span>
              <a href={MAILTO}>Enquiries</a> · <a href="/cv.pdf">CV (PDF)</a>
            </span>
          </footer>
        </div>
      </div>
    </>
  )
}
