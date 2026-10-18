import { ChronologyTable } from '../components/ChronologyTable'
import { Enquiries } from '../components/Enquiries'
import { Section } from '../components/Section'
import { SITE, pathForTab } from '../data/site'

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
        <p>Independent protocol engineer and formal-verification specialist.</p>
        <p>
          Process safety engineer, 2006–2015; chartered 2013. Protocol and research
          work since 2016.
        </p>
        <p>Aberystwyth, Wales.</p>
        <p className="cv-work-index">DarkWow · rnode-rust · Azoth · Mudra</p>
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
            rather than a public administrator. rnode-rust is continuity: a dissolved
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
            Independent protocol engineer and formal-verification specialist. Process
            safety taught me that a plausible number is not a safe number — so every
            result here is either proved or carries its limits. Process safety engineer,
            2006–2015; chartered 2013; independent protocol and verification work since
            2016.
          </p>
          <p>
            The method: specify the failure mode before the architecture; prove what can
            be proved; contain what cannot; record provenance with every result. DarkWow
            is containment; rnode-rust is continuity; Azoth is provenance; Mudra is
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
              <span>2026–; redesign April–October 2026</span>
              <span>
                Research prototype; Lean-modelled opcodes/gadgets (partial; 8 axioms;
                OBL-Z12 open); manual circuit audit; HAZOP tabletop
              </span>
              <span>Protocol, consensus, contracts, wallet</span>
            </div>
            <a className="work-link" href={pathForTab('darkwow')}>
              Record →
            </a>
          </li>
          <li className="work-row">
            <div className="work-main">
              <span className="work-title">rnode-rust</span>
              <span className="work-subtitle">
                A Rust node for the ρ-calculus: native object capabilities and
                machine-checked laws
              </span>
            </div>
            <div className="work-meta">
              <span>2026; port August–October 2026</span>
              <span>
                Pre-release; 72/77 laws; 19 laws (23 entries) node-tied; 14 crates, 0
                unsafe
              </span>
              <span>Port lead and maintainer</span>
            </div>
            <a className="work-link" href={pathForTab('rnode-rust')}>
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
              <span>
                v0.1.x; 94 upstream issues; 217 provenance tests; not for design work
              </span>
              <span>Author</span>
            </div>
            <a className="work-link" href={pathForTab('azoth')}>
              Record →
            </a>
          </li>
          <li className="work-row">
            <div className="work-main">
              <span className="work-title">Mudra</span>
              <span className="work-subtitle">
                Prove a committed calculation trace is unchanged without revealing the
                spreadsheet
              </span>
            </div>
            <div className="work-meta">
              <span>2026</span>
              <span>
                Research build; ~6 KB proof; 21 field elements; 100–632-instruction demos
              </span>
              <span>Author</span>
            </div>
            <a className="work-link" href={pathForTab('mudra')}>
              Record →
            </a>
          </li>
        </ul>
        <p className="print-only print-urls">
          Records: patrickmockridge.github.io/darkwow/ · /rnode-rust/ · /azoth/ · /mudra/
        </p>
        <p className="print-only">
          Engagements: protocol review, rescue, and verification; a bounded triage with
          written findings, then a scoped remediation. Remote from Aberystwyth, Wales.
        </p>
      </Section>

      <Section number="3" title="Chronology" id="chronology">
        <ChronologyTable
          rows={[
            {
              period: '2026',
              body: 'Delivery: rnode-rust port (August–October), DarkWow redesign (April–October), Azoth, Mudra.',
            },
            {
              period: '2022–2026',
              body: (
                <>
                  Independent research and writing: network analysis, evidence archiving,
                  influence/secrecy simulation; RGov/Rhobot recovery proposal for
                  REV/RChain with Jim Whitescarver (2024); UNISS/Ingenesist simulations
                  (2026).
                </>
              ),
            },
            {
              period: '2016–2019',
              body: (
                <>
                  Treehouse AI and Robotics software nanodegrees; early ERC-1155 context
                  at Enjin (2016); named advisor, Enjin Coin ICO (2017); CoEngineers, early
                  investor (2017–2019).
                </>
              ),
            },
            {
              period: '2006–2015',
              body: 'Chemical engineer, process safety; UK and North Africa. Chartered 2013. Bitcoin since 2011; London Ethereum community, 2014.',
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
            Romeo–Juliet critical risk-analysis framework; UNISS/Ingenesist
            simulations.{' '}
            <a href={pathForTab('research')}>Selected writing</a> ·{' '}
            <a href={SITE.links.ingenesistArchive}>Ingenesist archive</a>.
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
