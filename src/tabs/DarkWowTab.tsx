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
      <>ECC releases Halo 2 code (1 September 2020); Zcash activates it in NU5 (2022).</>,
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
    released by ECC on 1 September 2020; Zcash activated it in NU5 in 2022. DarkWow is a
    research prototype; the shipping wallet implements a subset of the ρ-calculus
    specification (see Limits). The combination is recent; this note treats it as a survey
    observation, not a theorem.
  </>
)

const NOVEL_COLUMNS = [
  { label: 'Work' },
  { label: 'Fork-original contribution' },
  { label: 'Prior art and boundary' },
]

const NOVEL_ROWS: ComparisonRow[] = [
  {
    key: 'box-purse',
    header: 'ZK Box and Purse',
    cells: [
      <>
        The DarkWow contract implementations: Box is a linear Put/Take slot whose prior
        state is consumed by a nullifier; Purse hides balances in a Pedersen commitment and
        proves conservation homomorphically. I designed the ZK contract pair, its circuits,
        and manifests for the fork.
      </>,
      <>
        The abstractions are prior art: Agoric’s Invitation and ERTP Purse, with
        Zcash/Semaphore-style notes and nullifiers. The ZK contract pair is the
        fork-original composition, not a new primitive. Genesis-proven.
      </>,
    ],
  },
  {
    key: 'zk-contracts',
    header: 'ZK contract suite',
    cells: [
      <>
        A single-chain suite with ZK circuits for the core state transitions of Identity,
        Oracle, Attestation, and Stablecoin. To my knowledge, this combination is not
        previously published as a set; I do not claim the first ZK implementation of any
        individual component.
      </>,
      <>
        Each component has prior art: Semaphore (2019), Polygon ID/World ID (2023); DECO,
        Axiom, HyperOracle (2019/2023); Reclaim, Anon Aadhaar, zkPass (2023); Aztec zkDAI
        (2021), Taurus (2025), Aleo USAD/USDCx (2025). Some administrative and revocation
        paths remain signature-authenticated; Stablecoin is experimental.
      </>,
    ],
  },
  {
    key: 'pedersen',
    header: 'Per-block Pedersen mass balance',
    cells: [
      <>
        I applied a Grin/Mimblewimble/ZIP 209-style per-block mass balance to a Halo2
        privacy chain after the June 2026 Orchard disclosure: for every block, Σ outputs +
        Σ burns + Σ fees = Σ inputs for the native token; a violating block is rejected. A
        separate cumulative supply commitment chain is a passive audit.
      </>,
      <>
        Pedersen value commitments and block-level balance checks are standard in Zcash,
        Mimblewimble/Grin, and Monero. The check is host-side Pedersen arithmetic, not a ZK
        block proof; it is defense-in-depth, not a proof of full supply integrity.
      </>,
    ],
  },
  {
    key: 'bridge',
    header: 'Object-capability bridge',
    cells: [
      <>
        A fork-specific redesign using deterministic deposit addresses, user-held withdrawal
        secrets, and nullifier-based withdrawals; no operator can spend user funds.
      </>,
      <>
        Non-custodial bridges (IBC, atomic swaps), threshold/MPC bridges (tBTC, RenVM), and
        trustless ZK bridges (zkBridge, Telepathy) predate it. The o-cap layer is bearer
        secrets, not classical object references. External-chain verification is feature-gated
        (<code>bridge-verify</code>, default off); the default path checks structure and
        anti-double-claim, not the external chain.
      </>,
    ],
  },
  {
    key: 'promissory',
    header: 'Promissory Note',
    cells: [
      <>
        A privacy-preserving multi-token bearer-note contract with issue, transfer, OTC
        swap, revoke, and redeem primitives, and proof-of-mint-secret authorization.
      </>,
      <>
        Bearer notes and contract-mediated redemption predate it: Arcade, BondBid, BIS
        Project Promissa, ERC-3475/4626, Liquity, MakerDAO PSM. The contract does not
        enforce redemption, collateral, or supply caps; the issuer contract decides and
        remains the trust boundary. Genesis-proven.
      </>,
    ],
  },
  {
    key: 'authority',
    header: 'Authority model',
    cells: [
      <>
        Replaces upstream’s <code>mint_pubkey</code> signature gate with proof of knowledge
        of a mint secret committed in the asset id.
      </>,
      <>
        Upstream DarkFi gates WASM host imports with a contract-section ACL
        (<code>acl_allow</code>); its DAO is already a contract with token-weighted ZK
        voting. This is an authority-model change, not evidence of “true decentralised
        governance.”
      </>,
    ],
  },
  {
    key: 'opcodes',
    header: 'Opcode proofs',
    cells: [
      <>
        Lean 4 gadget-level theorems for this fork’s <code>is_not_equal</code>,{' '}
        <code>less_than_or_equal</code>, and <code>base_div</code> models.{' '}
        <code>is_not_equal</code> adds a fourth gate pinning the auxiliary inverse when{' '}
        <code>a=b</code>, making every witness determined — a purity improvement over the
        inherited <code>is_equal</code> chip.
      </>,
      <>
        The opcodes are standard Halo 2/Fermat constructions; Lean 4 verification of ZK
        gadgets exists elsewhere (halo2-formal, ArkLib, CLAP). <code>is_not_equal</code> is
        not the first fully constrained Boolean operator. The proofs are evidence, not an
        enabling layer: <code>less_than_or_equal</code> is used across the contract
        circuits, but <code>is_not_equal</code> appears in zero contract circuits and PN
        redemption does not use it. <code>OBL-Z12</code> is partly open.
      </>,
    ],
  },
  {
    key: 'ledger',
    header: 'Lean 4 proof-status ledger',
    cells: [
      <>
        A canonical status table (2026-10-18) with counts, audit type, status, and generating
        command; a per-opcode table; and the assumption boundary. It separates proved,
        assumed, manually audited, and not modelled.
      </>,
      <>
        Proof-status ledgers are a known practice (etheorem PROOF_LEDGER, concrete2 evidence
        classes). The fork’s table is a project-specific instance, not a new verification
        method; it makes the boundary auditable.
      </>,
    ],
  },
  {
    key: 'lineage',
    header: 'Rholang/RChain lineage',
    cells: [
      <>
        The contract design comes from the Rholang/RChain work: a name is authority,
        capabilities compose, and the constraints have to be enforced from the beginning.
        rnode-rust is the other side of that lineage.
      </>,
      'Design lineage, not a code dependency.',
    ],
  },
]

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
          {
            label: 'Period',
            value: '2026–present (fork-era); redesign April–October 2026',
          },
          {
            label: 'Status',
            value:
              'Research prototype; mainnet TBD; no third-party audit; Lean-modelled opcodes/gadgets (partial; 6 assumptions; OBL-Z12 partly open); manual circuit audit; HAZOP tabletop',
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

      <Section number="1" title="What is fork-original" id="darkwow-novel">
        <ComparisonTable
          variant="claims"
          caption="Table 2. Fork-original work and its boundaries."
          subtitle="The fork-original implementations, the prior art they build on, and the boundary of the claim."
          columns={NOVEL_COLUMNS}
          rows={NOVEL_ROWS}
          note="Maturity follows the contract catalog. Prior-art comparisons are cited in the cells; 'to my knowledge' marks an unverified combination claim, not a theorem."
        />
        <div className="prose">
          <p>
            The table separates the fork’s implementation from the prior art it builds on.
            The defensible claim is the composition and the contract set, not the invention
            of the primitive. The proof-status ledger is what makes the boundary auditable.
          </p>
        </div>
      </Section>

      <Section number="2" title="Design" id="darkwow-design">
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
            no speculative execution and no operator-privileged reorg path.
          </li>
          <li>
            <strong>Contracts describe their own interfaces.</strong> Each contract
            declares a TOML manifest in its deployment instructions — WASM exports, ZK
            circuits, state schema, capability requirements — so wallets and reviewers do
            not depend on an external registry; the on-chain manifest hash is pending.
          </li>
          <li>
            <strong>The wallet bounds authority by what was scanned.</strong> Capability
            types are composed at scan time; key material stays in the account manager
            and never reaches the daemon.
          </li>
          <li>
            <strong>Supply is checked outside the proof.</strong> For every block, the node
            checks a Pedersen mass balance over native-token calls; the check is pure
            Pedersen arithmetic, not a ZK verification. A block that violates the mass
            balance is rejected. A separate cumulative supply commitment chain is a passive
            audit, not a block field. The guarantee rests on Pedersen binding and a correct
            implementation; a protocol-level failure is a halt or repair, not a silent mint.
          </li>
        </ul>
      </Section>

      <Section number="3" title="Provenance" id="darkwow-provenance">
        <div className="prose">
          <p>
            DarkWow is a fork of DarkFi. The zkVM, ZKAS circuit language, P2P stack, WASM
            runtime, and Halo2 backend are inherited. The fork-original work is the
            object-capability governance layer and genesis set, Uncle Merkle consensus,
            the TOML manifest/ABI, the capability wallet architecture, and three new ZK
            opcodes plus the supply audit. The code is AGPL-3.0.
          </p>
          <p>
            The contract design is a direct descendant of the Rholang/RChain work: a name
            is authority, capabilities compose, and the constraints have to be enforced
            from the beginning. The rnode-rust port is the other side of that lineage; the
            lessons of what happens when those constraints are not enforced are part of
            why this contract set is ZK-only.
          </p>
          <p>
            The fork-era work was built by one primary developer with AI as a
            co-architect. The architecture is designed to contain what generated code can
            reach: capability boundaries, deterministic tests, and manifest-first
            integration. The formal record is in the obligation register.
          </p>
        </div>
      </Section>

      <Section number="4" title="Evidence" id="darkwow-evidence">
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
                Halo2 · 3 fork-original proofs (10 total)
              </text>
            </g>
          </svg>
        </Figure>
        <Listing caption="Listing 1. DeployParamsV1 manifest, abridged." code={manifestExcerpt} />
      </Section>

      <Section number="5" title="Limits" id="darkwow-limits">
        <ul className="prose">
          <li>
            Nine genesis contracts are labelled proven; the 23 post-genesis contracts
            remain experimental, even where their circuits pass the manual
            instance-derivation audit.
          </li>
          <li>
            Lean 4 models 32 zkVM opcodes and 10 gadgets; that layer is mixed. Three of
            the four former assumptions are now theorems;{' '}
            <code>poseidon_collision_resistance</code> remains assumed. The 167 contract
            circuits (179 by the gate) have a manual instance-derivation audit, not Lean
            proofs. Value conservation and the Pedersen homomorphism are proved from the
            Pallas curve; the only surviving arithmetic assumption is{' '}
            <code>pallasPrime</code>. Six assumptions remain, and <code>OBL-Z12</code> is
            partly open.
          </li>
          <li>
            The per-block Pedersen mass balance and cumulative supply chain are active;
            a block that violates the mass balance is rejected. External anchoring is
            partial: Caribina anchors are published but its verifier is not wired into
            the node; the Monero anchoring gadget has not been enabled; merge mining is
            live on the devnet/testnet, with mainnet TBD.
          </li>
          <li>On-chain manifest hashing is pending.</li>
          <li>
            The shipping wallet implements a subset of the ρ-calculus specification.
          </li>
        </ul>
      </Section>

      <Section number="6" title="Links" id="darkwow-links">
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
            <a href={darkWow.opcodes}>Opcode and circuit status</a>
          </li>
          <li>
            <a href={darkWow.axioms}>Axiom boundary</a>
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
