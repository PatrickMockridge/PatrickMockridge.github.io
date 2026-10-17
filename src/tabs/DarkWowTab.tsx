import { ComparisonTable, type ComparisonRow } from '../components/ComparisonTable'
import { EvidenceTable } from '../components/EvidenceTable'
import { Figure } from '../components/Figure'
import { Listing } from '../components/Listing'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { WhatWhy } from '../components/WhatWhy'
import { darkWow, darkWowEvidence, manifestExcerpt } from '../data/projects'

const TIMELINE_COLUMNS = [
  { label: 'Year' },
  { label: 'Advance' },
  { label: 'What it changed here' },
]

const TIMELINE_ROWS: ComparisonRow[] = [
  {
    key: '2005',
    header: '2005',
    cells: [
      <>
        Meredith &amp; Radestock publish <em>A Reflective Higher-Order Calculus</em>: a name
        is a quoted process (<code>@P</code>), and a process can recover a process from a name
        (<code>*x</code>).
      </>,
      <>
        Authority can be a first-class, unforgeable value. An object capability can be named,
        passed, attenuated, and revoked without a permission table.
      </>,
    ],
  },
  {
    key: '2020',
    header: '2020',
    cells: [
      <>ECC releases Halo 2 code (1 September 2020); Zcash activates it in NU5 (2021).</>,
      <>
        Private proofs over general circuits become practical in Rust. A state transition can
        be proved without revealing the state.
      </>,
    ],
  },
  {
    key: '2026',
    header: '2026',
    cells: [
      <>
        DarkWow’s fork-era work: governance, genesis, Uncle Merkle consensus, manifest/ABI,
        capability wallet, supply audit.
      </>,
      <>
        The calculus, the proof system, and the wallet are one design: capabilities are
        composed from scanned state, and supply is checked outside the proof.
      </>,
    ],
  },
]

const TIMELINE_NOTE = (
  <>
    Dates are publication and release dates, not claims of first use. ρ-calculus: Meredith
    &amp; Radestock, <a href={darkWow.rhoPaper}>A Reflective Higher-Order Calculus</a>{' '}
    (ENTCS 2005, doi:10.1016/j.entcs.2005.05.016). <a href={darkWow.halo2}>Halo 2 code</a> was
    released by ECC on 1 September 2020; Zcash activated it in NU5 in 2021. DarkWow is a
    research prototype; the shipping wallet implements a subset of the ρ-calculus
    specification (see Limits). The combination is recent; this note treats it as a survey
    observation, not a theorem.
  </>
)

export function DarkWowTab() {
  return (
    <>
      <TitleBlock
        descriptor="Invention record"
        title="DarkWow"
        subtitle="A Layer 1 design for private organisations on a public chain, where authority is represented as an object capability rather than asserted as an identity."
        metadata={[
          {
            label: 'Role',
            value: 'Protocol, consensus, contracts, wallet (fork-original layers)',
          },
          { label: 'Period', value: '2026–present (fork-era)' },
          {
            label: 'Status',
            value:
              'Research prototype; mainnet TBD; no third-party audit; Lean-verified circuits; HAZOP-reviewed',
          },
          {
            label: 'Repository',
            value: <a href={darkWow.repo}>github.com/PatrickMockridge/DarkWow</a>,
          },
          {
            label: 'Documentation',
            value: <a href={darkWow.docs}>doc/src</a>,
          },
        ]}
      >
        <WhatWhy
          what={
            <>
              A Layer 1 design for private organisations on a public chain. Members coordinate,
              hold assets, and audit supply without a public administrator, a public member
              list, or a voter roll.
            </>
          }
          why={
            <>
              An organisation needs privacy and accountability at the same time. A public chain
              gives auditability but exposes membership and strategy; a private chain gives
              confidentiality but asks members to trust an operator. DarkWow tries to get both
              without a single privileged key: authority is a name you hold, not an identity
              you assert, and supply is checked outside the proof. I could see that the basis
              of what DarkFi had could achieve this, but DarkFi had no interest in doing so.
            </>
          }
          combination={
            <>
              ρ-calculus (2005) for authority as a name + Halo 2 (2020) for private state
              transitions + a native capability wallet that composes capability types from
              scanned state (2026) + a Pedersen supply audit outside the proof.
            </>
          }
        />
      </TitleBlock>

      <ComparisonTable
        variant="timeline"
        caption="Table 1. Three dates make the design possible."
        subtitle="The calculus, the proof system, and the wallet became combinable in this window."
        columns={TIMELINE_COLUMNS}
        rows={TIMELINE_ROWS}
        note={TIMELINE_NOTE}
      />

      <MethodRefrain />

      <Section number="1" title="Design" id="darkwow-design">
        <ul className="prose">
          <li>
            <strong>Names are processes, and authority is a name.</strong> The ρ-calculus
            makes a name a quoted process (<code>@P</code>) and lets a process recover a
            process from a name (<code>*x</code>). Bundles give read/write facets, forwarders
            attenuate, and revocation is a language pattern. Authority is held, not asserted.
          </li>
          <li>
            <strong>Authority can be held without a public roll.</strong> Governance is
            built from composable object-capability primitives — a purse, a box, an
            identity, an oracle, an attestation, a multisig — rather than a monolithic
            DAO or a privileged key. Holding the capability is what permits the action;
            the member list need not be public.
          </li>
          <li>
            <strong>Competing histories resolve deterministically.</strong> Same-height
            blocks become uncles and share rewards; verification is stateless; there is
            no speculative execution and no privileged reorg.
          </li>
          <li>
            <strong>Contracts describe their own interfaces.</strong> Each contract
            publishes a TOML manifest on-chain declaring the WASM exports, ZK circuits,
            state schema, and capability requirements it exposes, so wallets and
            reviewers do not depend on an external registry.
          </li>
          <li>
            <strong>The wallet bounds authority by what was scanned.</strong> Capability
            types are composed at scan time; key material stays in the account manager
            and never reaches the daemon.
          </li>
          <li>
            <strong>Supply is checked outside the proof.</strong> Every block carries a
            Pedersen mass balance and a cumulative supply commitment; the check is pure
            Pedersen arithmetic, not a ZK verification. An over-mint fails the block; a
            protocol-level failure halts the chain rather than minting, and the repair is
            a protocol change rather than a quiet patch.
          </li>
        </ul>
      </Section>

      <Section number="2" title="Provenance" id="darkwow-provenance">
        <div className="prose">
          <p>
            DarkWow is a fork of DarkFi. The zkVM, ZKAS circuit language, P2P stack, WASM
            runtime, and Halo2 backend are inherited. The fork-original work is the
            object-capability governance layer and genesis set, Uncle Merkle consensus,
            the TOML manifest/ABI, the capability wallet architecture, and three new ZK
            opcodes plus the supply audit. The code is AGPL-3.0.
          </p>
          <p>
            The fork-era work was built by one primary developer with AI as a
            co-architect. The architecture is designed to contain what generated code can
            reach: capability boundaries, deterministic tests, and manifest-first
            integration. The formal record is in the obligation register.
          </p>
        </div>
      </Section>

      <Section number="3" title="Evidence" id="darkwow-evidence">
        <EvidenceTable
          rows={darkWowEvidence}
          caption="DarkWow evidence"
          note="Sources: repository README and architecture documents, as of October 2026. Counts drift; the linked artifact is authoritative."
        />
        <Figure id="darkwow-architecture" caption="Figure 1. DarkWow architecture, abridged.">
          <svg
            viewBox="0 0 700 300"
            role="img"
            aria-labelledby="darkwow-architecture-title darkwow-architecture-desc"
          >
            <title id="darkwow-architecture-title">DarkWow architecture</title>
            <desc id="darkwow-architecture-desc">
              Consensus and node feed contracts with on-chain manifests. The wallet
              composes capabilities from scanned state. Halo2 circuits and Lean
              obligations support the contracts and wallet.
            </desc>
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="40" y="16" width="620" height="48" />
              <rect x="40" y="96" width="620" height="48" />
              <rect x="40" y="176" width="300" height="56" />
              <rect x="360" y="176" width="300" height="56" />
              <path d="M350 64v32" />
              <path d="M350 96l-4-7h8z" fill="currentColor" stroke="none" />
              <path d="M190 144v32" />
              <path d="M190 176l-4-7h8z" fill="currentColor" stroke="none" />
              <path d="M510 144v32" />
              <path d="M510 176l-4-7h8z" fill="currentColor" stroke="none" />
            </g>
            <g fill="currentColor" textAnchor="middle">
              <text x="350" y="37" fontSize="12">
                Consensus and node
              </text>
              <text x="350" y="53" fontSize="10">
                Uncle Merkle · deterministic execution
              </text>
              <text x="350" y="117" fontSize="12">
                Contracts and on-chain manifests
              </text>
              <text x="350" y="133" fontSize="10">
                WASM exports · ZK circuits · capability requirements
              </text>
              <text x="190" y="197" fontSize="12">
                Wallet capability engine
              </text>
              <text x="190" y="213" fontSize="10">
                scan-time composition · trust tiers
              </text>
              <text x="510" y="197" fontSize="12">
                ZK circuits and Lean obligations
              </text>
              <text x="510" y="213" fontSize="10">
                Halo2 · three proved gadgets
              </text>
            </g>
          </svg>
        </Figure>
        <Listing caption="Listing 1. DeployParamsV1 manifest, abridged." code={manifestExcerpt} />
      </Section>

      <Section number="4" title="Limits" id="darkwow-limits">
        <ul className="prose">
          <li>
            Nine genesis contracts are labelled proven; the 23 post-genesis contracts
            remain experimental, even where their circuits are verified.
          </li>
          <li>
            Lean 4 covers all 39 zkVM opcodes and all 120 contract circuits, plus
            cross-cutting Pedersen and value-conservation theorems; eight axioms remain,
            and <code>OBL-Z12</code> and other obligations are open.
          </li>
          <li>
            The per-block Pedersen mass balance and cumulative supply chain are active;
            an over-mint cannot be accepted. External anchoring is partial: Caribina
            anchors are published but its verifier is not wired into the node; the Monero
            anchoring gadget has not been enabled; merge mining is live.
          </li>
          <li>On-chain manifest hashing is pending.</li>
          <li>
            The shipping wallet implements a subset of the ρ-calculus specification.
          </li>
        </ul>
      </Section>

      <Section number="5" title="Links" id="darkwow-links">
        <ul className="link-list">
          <li>
            <a href={darkWow.repo}>Repository</a>
          </li>
          <li>
            <a href={darkWow.docs}>Documentation tree</a>
          </li>
          <li>
            <a href={darkWow.manifest}>Manifest specification</a>
          </li>
          <li>
            <a href={darkWow.ocap}>O-Cap model</a>
          </li>
          <li>
            <a href={darkWow.consensus}>Consensus and supply audit</a>
          </li>
          <li>
            <a href={darkWow.proofs}>Proofs</a>
          </li>
          <li>
            <a href={darkWow.obligations}>Verification obligation register</a>
          </li>
          <li>
            <a href={darkWow.rhoPaper}>ρ-calculus paper</a>
          </li>
          <li>
            <a href={darkWow.halo2}>Halo 2 release</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
