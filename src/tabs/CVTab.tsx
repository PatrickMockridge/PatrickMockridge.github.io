import { ChronologyTable } from '../components/ChronologyTable'
import { Enquiries } from '../components/Enquiries'
import { Section } from '../components/Section'
import { SITE } from '../data/site'

export function CVTab() {
  return (
    <>
      <div className="print-header print-only">
        <div className="print-name">Patrick Mockridge</div>
        <div className="print-contact">
          Aberystwyth, Wales · {SITE.email} · patrickmockridge.github.io
        </div>
      </div>

      <header className="cv-hero screen-only">
        <h1>Patrick Mockridge</h1>
        <p>Process safety engineer, 2006–2015; chartered 2013.</p>
        <p>Protocol engineer, 2016–present.</p>
        <p>Aberystwyth, Wales.</p>
        <p className="cv-work-index">DarkWow · rchain-rust · Azoth · Mudra</p>
      </header>

      <Section number="1" title="Profile and method" id="profile">
        <div className="prose screen-only">
          <p>
            Process safety taught me that a plausible number is not a safe number — so
            every result here is either proved or carries its limits. I was a process
            safety engineer from 2006 to 2015, chartered in 2013, and have worked
            independently since 2016 on protocol software, formal verification, and
            numerical systems. The method is the same in both fields: specify the failure
            mode before the architecture; prove what can be proved; contain what cannot;
            record provenance with every result. Where proof stops is stated in the
            limits.
          </p>
          <p>
            The projects are instances of that method. DarkWow is containment: private
            coordination on a public chain, with authority held as an object capability
            rather than a public administrator. rchain-rust is rescue: a dissolved
            network’s node ported to Rust, with its language laws machine-checked at the
            model level and conformance-tested at the node. Azoth is provenance:
            chemical-engineering calculations where every number carries its source and
            verification state, and unsupported answers are refused. Mudra is
            verification in a familiar form: a spreadsheet calculation proved correct
            without revealing the sheet.
          </p>
        </div>
        <div className="prose print-only">
          <p>
            Process safety taught me that a plausible number is not a safe number — so
            every result here is either proved or carries its limits. Process safety
            engineer, 2006–2015; chartered 2013; independent protocol and verification
            work since 2016.
          </p>
          <p>
            The method: specify the failure mode before the architecture; prove what can
            be proved; contain what cannot; record provenance with every result. DarkWow
            is containment; rchain-rust is rescue; Azoth is provenance; Mudra is
            verification in a familiar form.
          </p>
        </div>
      </Section>

      <Section number="2" title="Selected work" id="work">
        <ul className="work-list">
          <li className="work-row">
            <div className="work-main">
              <span className="work-title">DarkWow</span>
              <span className="work-subtitle">
                Designed for private organisations on a public chain, without an
                administrator or a public voter roll
              </span>
            </div>
            <div className="work-meta">
              <span>2026–</span>
              <span>Research prototype; Lean-verified circuits; HAZOP-reviewed</span>
            </div>
            <a className="work-link" href="?tab=darkwow">
              Record →
            </a>
          </li>
          <li className="work-row">
            <div className="work-main">
              <span className="work-title">rchain-rust</span>
              <span className="work-subtitle">
                A rescued blockchain node whose language laws are machine-checked
              </span>
            </div>
            <div className="work-meta">
              <span>2026</span>
              <span>Pre-release</span>
            </div>
            <a className="work-link" href="?tab=rchain-rust">
              Record →
            </a>
          </li>
          <li className="work-row">
            <div className="work-main">
              <span className="work-title">Azoth</span>
              <span className="work-subtitle">
                A process calculation library where every number carries its provenance
              </span>
            </div>
            <div className="work-meta">
              <span>2026</span>
              <span>v0.1.x, not for design work</span>
            </div>
            <a className="work-link" href="?tab=azoth">
              Record →
            </a>
          </li>
          <li className="work-row">
            <div className="work-main">
              <span className="work-title">Mudra</span>
              <span className="work-subtitle">
                Prove a calculation was done correctly without revealing the spreadsheet
              </span>
            </div>
            <div className="work-meta">
              <span>2026</span>
              <span>Research build; v1.0.x</span>
            </div>
            <a className="work-link" href="?tab=mudra">
              Record →
            </a>
          </li>
        </ul>
        <p className="print-only print-urls">
          Records: patrickmockridge.github.io/?tab=darkwow · /?tab=rchain-rust ·
          /?tab=azoth · /?tab=mudra
        </p>
      </Section>

      <Section number="3" title="Chronology" id="chronology">
        <ChronologyTable
          rows={[
            {
              period: '2016–present',
              body: (
                <>
                  Independent work: protocol software, formal verification, numerical
                  systems. Current records: DarkWow, rchain-rust, Azoth, Mudra.
                </>
              ),
            },
            {
              period: '2011–2014',
              body: 'Bitcoin since 2011; London Ethereum community, 2014.',
            },
            {
              period: '2006–2015',
              body: 'Chemical engineer, process safety; UK and North Africa. Chartered Professional Chemical Engineer, 2013.',
            },
            {
              period: '2002–2006',
              body: 'MEng Chemical Engineering, University of Edinburgh.',
            },
          ]}
        />
      </Section>

      <Section number="4" title="Research and writing" id="research">
        <div className="prose">
          <p>
            UNISS / Ingenesist; Romeo–Juliet framework.{' '}
            <a href="?tab=research">Selected writing</a>.
          </p>
        </div>
      </Section>

      <div className="print-hide">
        <Section number="5" title="Enquiries" id="enquiries">
          <Enquiries />
        </Section>
      </div>
    </>
  )
}
