import { ComparisonTable, type ComparisonRow } from '../components/ComparisonTable'
import { EvidenceTable } from '../components/EvidenceTable'
import { Figure } from '../components/Figure'
import { Listing } from '../components/Listing'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { WhatWhy } from '../components/WhatWhy'
import { darkWow, darkWowEvidence, manifestExcerpt } from '../data/projects'

const FORK_COLUMNS = [
  { label: 'Work' },
  { label: 'Fork-original' },
  { label: 'Boundary' },
]

const FORK_ROWS: ComparisonRow[] = [
  {
    key: 'promissory',
    header: 'Promissory Note',
    cells: [
      <>
        The no-freeze bearer note: proof-of-mint-secret issuance, a zero-value redemption
        receipt, and issuer-priced counterparty risk. The note is the asset; possession is
        authority.
      </>,
      <>
        Bearer notes and contract-mediated redemption predate it (Arcade, ERC-4626,
        Liquity). The no-freeze composition is the fork’s. Genesis-deployed; the issuer
        remains the counterparty.
      </>,
    ],
  },
  {
    key: 'box-purse',
    header: 'ZK Box and Purse',
    cells: [
      <>
        The ZK versions of the capability containers: Box is a linear Put/Take slot whose
        prior state is consumed by a nullifier; Purse hides balances in a Pedersen
        commitment and proves conservation homomorphically.
      </>,
      <>
        Agoric’s Invitation/ERTP and Zcash/Semaphore notes supply the base abstractions. The
        ZK versions, circuits, and manifests are the fork’s. Genesis-deployed.
      </>,
    ],
  },
  {
    key: 'suite',
    header: 'ZK contract suite',
    cells: [
      <>
        A single-chain suite with ZK circuits for the core state transitions of Identity,
        Oracle, Attestation, and Stablecoin.
      </>,
      <>
        Each component has prior art (Semaphore, Axiom/HyperOracle, Reclaim, Aztec zkDAI).
        The combination is the claim; some administrative and revocation paths remain
        signature-authenticated; Stablecoin is experimental.
      </>,
    ],
  },
  {
    key: 'supply',
    header: 'Supply audit',
    cells: [
      <>
        A per-block Pedersen mass balance over native-token calls, plus a cumulative supply
        commitment chain carried by the plaintext coinbase.
      </>,
      <>
        Grin/Mimblewimble and Zcash ZIP 209 supply auditing. The check is host-side Pedersen
        arithmetic, not a ZK block proof; it is defense-in-depth, not a proof of full supply
        integrity.
      </>,
    ],
  },
  {
    key: 'bridge',
    header: 'Bridge',
    cells: [
      <>
        A fork-specific non-custodial redesign: deterministic deposit addresses, user-held
        withdrawal secrets, nullifier-based withdrawals, and wrapped notes held by the user.
      </>,
      <>
        IBC, atomic swaps, and trustless ZK bridges predate the non-custodial property. The
        current default refuses every deposit; with <code>bridge-verify</code> on, Ethereum,
        Monero, and Litecoin verify while Zcash and Aztec return errors. External release is
        relayer-executed.
      </>,
    ],
  },
  {
    key: 'assurance',
    header: 'Assurance',
    cells: [
      <>
        Lean 4 gadget-level theorems for <code>less_than_or_equal</code>, <code>base_div</code>,
        and <code>is_not_equal</code>, plus a canonical proof-status ledger that separates
        proved, assumed, manually audited, and not modelled.
      </>,
      <>
        Halo 2/Fermat constructions; Lean 4 verification of ZK gadgets exists elsewhere
        (halo2-formal, ArkLib). The current contracts use <code>less_than_or_equal</code> and
        a quotient-remainder pattern; <code>base_div</code> and <code>is_not_equal</code> are
        not used. The proofs are evidence, not an enabling layer; <code>OBL-Z12</code> is
        partly open.
      </>,
    ],
  },
]

export function DarkWowTab() {
  return (
    <>
      <TitleBlock
        descriptor="Private bearer note"
        title="DarkWow"
        subtitle="A private bearer-note system: the note is the asset, possession is authority, and no protocol-level administrator can freeze or confiscate it."
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
            label: 'Stage',
            value: 'Research prototype; genesis-deployed contracts; mainnet TBD.',
          },
          {
            label: 'Assurance',
            value:
              'Lean-modelled opcodes/gadgets (partial; 6 assumptions); mechanized circuit gate; HAZOP tabletop; no third-party audit.',
          },
          {
            label: 'Repository',
            value: <a href={darkWow.repo} target="_blank" rel="noopener noreferrer">github.com/PatrickMockridge/DarkWow</a>,
          },
          {
            label: 'Documentation',
            value: <a href={darkWow.docs} target="_blank" rel="noopener noreferrer">doc/src</a>,
          },
        ]}
      >
        <WhatWhy
          what={
            <>
              DarkWow is a Layer 1 design for private DeFi and private organisations. Its
              base asset is a bearer note: a commitment held by whoever knows its spend
              secret. The issuer may redeem, refuse, or dilute; the holder prices that as
              counterparty risk. What the protocol does not provide is a freeze list, an
              allowlist, or an admin key over the note.
            </>
          }
          why={
            <>
              A private chain usually asks members to trust an operator; a public chain
              exposes membership and strategy. DarkWow tries to get both without a
              protocol-level administrator: authority is a name you hold, not an identity
              you assert; supply is checked at the block boundary; and the assurance
              boundary is written down. I could see that the basis of what DarkFi had could
              achieve this, but DarkFi had no interest in doing so.
            </>
          }
          combination={
            <>
              Rholang/RChain (names as authority) + Halo 2 (private state transitions) + a
              manifest-driven capability wallet + a per-block Pedersen supply audit.
            </>
          }
        />
      </TitleBlock>

      <Section number="1" title="The thesis" id="darkwow-thesis">
        <div className="prose">
          <p>
            The note is the asset. The commitment is the note; the nullifier secret is
            possession. To transfer or redeem, the holder proves knowledge of the secret and
            publishes a nullifier; no entrypoint can move the note without it. There is no
            freeze opcode, no allowlist, and no admin key in the Promissory Note contract.
          </p>
          <p>
            No turnstile at the protocol layer. The native token and the note do not require
            registration. Identity credentials are opt-in; issuer contracts and relayers are
            explicit counterparties. The protocol does not gate the base asset.
          </p>
          <p>
            The issuer is the counterparty. PN does not enforce redemption, collateral, or a
            supply cap. <code>RedeemV1</code> burns a note and creates a zero-value receipt;
            releasing the underlying asset is the issuer’s act. The issuer may also dilute.
            The holder prices both. The absence of enforcement is the design.
          </p>
          <p>
            That is the difference from an ACL or membership system: there is no turnstile to
            capture. What remains is counterparty risk, stated and priced, not hidden behind
            an administrator.
          </p>
        </div>
      </Section>

      <Section number="2" title="How the system composes" id="darkwow-system">
        <ul className="prose">
          <li>
            <strong>Promissory Note is the base asset.</strong> <code>RegisterTypeV1</code>,{' '}
            <code>IssueV1</code>, <code>TransferV1</code>, <code>OtcSwapV1</code>,{' '}
            <code>RevokeV1</code>, <code>RedeemV1</code>. Minting is proof of knowledge of a
            mint secret stored as <code>token_auth_parent</code> and bound into the asset id.
            Redemption burns the note and creates a zero-value receipt. The receipt is an
            on-chain redemption record, not proof of off-chain settlement.
          </li>
          <li>
            <strong>Box and Purse are the ZK capability containers.</strong> Box is linear
            Put/Take: the old state is nullified and a new leaf is appended, so a capability
            can be delegated without a mutable account. Purse hides a balance in a Pedersen
            commitment and proves conservation homomorphically. The ZK versions are the
            fork-original work; the base abstractions are Agoric’s Invitation and ERTP Purse.
          </li>
          <li>
            <strong>Identity, Oracle, Attestation are the optional credential and data layer.</strong>{' '}
            Identity issues credentials and proves predicates; Oracle proves who wrote a
            datum, not that it is true; Attestation generalizes claims and predicates. Their
            gates are issuer-level and opt-in.
          </li>
          <li>
            <strong>Stablecoin and Bridge are issuer contracts.</strong> Stablecoin is a CDP
            over PN with a governance key and a dead-man switch; only the pooled-debt model
            is implemented. Bridge wraps an external asset as a PN 1:1; the wrapped note is
            user-held, external release is relayer-executed, and <code>bridge-verify</code> is
            fail-closed by default.
          </li>
          <li>
            <strong>NativeToken and Uncle Merkle are the base layer.</strong> A shielded UTXO
            token with no premine; every block is checked against a Pedersen mass balance
            over native-token calls; the cumulative supply commitment chain is carried by the
            plaintext coinbase. This is host-side arithmetic, not a ZK block proof.
          </li>
          <li>
            <strong>The wallet and manifests make it composable.</strong> Each contract
            declares its functions, circuits, capability types, and actions in a TOML
            manifest. The wallet reads manifests, scans the chain, and composes capability
            types from the primitives it finds; keys stay in the AccountManager and never
            reach the daemon.
          </li>
          <li>
            <strong>The assurance layer is explicit.</strong> Lean 4 models 32 zkVM opcodes
            and 10 gadget files; the verdict is mixed per opcode. There are 6 assumptions,
            with <code>pallasPrime</code> the only arithmetic one. The gate checks instance
            derivation for 167 contract circuits (179 walked); it does not prove circuit
            correctness. <code>OBL-Z12</code> is partly open. The proof-status ledger is the
            authority; counts drift.
          </li>
        </ul>
      </Section>

      <MethodRefrain />

      <Section number="3" title="What is fork-original" id="darkwow-fork">
        <ComparisonTable
          variant="claims"
          caption="Table 1. What is fork-original."
          subtitle="The fork-original composition, the prior art it builds on, and the boundary of the claim."
          columns={FORK_COLUMNS}
          rows={FORK_ROWS}
          note="The base abstractions are prior art; the contribution is the composition and the boundary. Prior art is named only where it changes the claim."
        />
      </Section>

      <Section number="4" title="Provenance" id="darkwow-provenance">
        <div className="prose">
          <p>
            DarkWow is a fork of DarkFi. The zkVM, ZKAS circuit language, P2P stack, WASM
            runtime, and Halo2 backend are inherited. The fork-original work is the
            object-capability governance layer and genesis set, Uncle Merkle consensus, the
            TOML manifest/ABI, the capability wallet architecture, the ZK Box/Purse and the
            contract suite, the supply audit, and the added opcodes. The code is AGPL-3.0.
          </p>
          <p>
            The contract design is a direct descendant of the Rholang/RChain work: a name is
            authority, capabilities compose, and the constraints have to be enforced from
            the beginning. The rnode-rust port is the other side of that lineage; the lessons
            of what happens when those constraints are not enforced are part of why this
            contract set is ZK-only.
          </p>
          <p>
            The fork-era work was built by one primary developer with AI as a co-architect.
            The architecture is designed to contain what generated code can reach: capability
            boundaries, deterministic tests, and manifest-first integration. The formal
            record is in the obligation register.
          </p>
          <p className="source-note">
            The design stands on the 2005 ρ-calculus paper (
            <a href={darkWow.rhoPaper} target="_blank" rel="noopener noreferrer">Meredith &amp; Radestock</a>), the 2020{' '}
            <a href={darkWow.halo2} target="_blank" rel="noopener noreferrer">Halo 2 release</a> (Zcash NU5 2022), and the 2026
            fork-era work. Dates are publication and release dates, not claims of first use.
          </p>
        </div>
      </Section>

      <Section number="5" title="Evidence" id="darkwow-evidence">
        <EvidenceTable
          rows={darkWowEvidence}
          caption="DarkWow evidence"
          note="Sources: repository README and architecture documents, as of October 2026. Counts drift; the linked artifact and proof-status ledger are authoritative."
        />
        <Figure id="darkwow-architecture" caption="Figure 1. DarkWow architecture, abridged.">
          <svg
            viewBox="0 0 700 300"
            role="img"
            aria-labelledby="darkwow-architecture-title darkwow-architecture-desc"
          >
            <title id="darkwow-architecture-title">DarkWow architecture</title>
            <desc id="darkwow-architecture-desc">
              Consensus and node feed contracts with manifests. The wallet composes
              capabilities from scanned state. Halo2 circuits and Lean obligations support
              the contracts and wallet.
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
                Contracts and manifests
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
                Halo2 · 10 core circuits; 3 proofs
              </text>
            </g>
          </svg>
        </Figure>
        <Listing caption="Listing 1. DeployParamsV1 manifest, abridged." code={manifestExcerpt} />
      </Section>

      <Section number="6" title="Boundaries" id="darkwow-boundaries">
        <ul className="prose">
          <li>
            <strong>Issuer discretion.</strong> PN does not enforce redemption, collateral,
            or a supply cap. The issuer may refuse or dilute; the holder prices that as
            counterparty risk. A receipt is an on-chain redemption record, not proof of
            off-chain settlement.
          </li>
          <li>
            <strong>The bridge is deferred by default.</strong> With{' '}
            <code>bridge-verify</code> off, every deposit is refused. With it on, Ethereum,
            Monero, and Litecoin have verifiers; Zcash and Aztec still return errors. The
            wrapped note is user-held; external release is relayer-executed.
          </li>
          <li>
            <strong>Contract-level gates are explicit counterparties.</strong> Identity
            issuers can revoke credentials; Stablecoin has a governance key and a dead-man
            switch; relayers can censor. These are not protocol-level freezes over the note.
          </li>
          <li>
            <strong>The assurance boundary is written down.</strong> Lean covers opcodes and
            gadgets, not the contract circuits; 6 assumptions remain;{' '}
            <code>OBL-Z12</code> is partly open; <code>OBL-Z17</code> (Identity capability
            verification), <code>OBL-C21</code> (bridge default), and{' '}
            <code>OBL-C231</code> (stablecoin model) are open or partly open. The{' '}
            <a href={darkWow.obligations} target="_blank" rel="noopener noreferrer">obligation register</a> is the authority.
          </li>
          <li>
            <strong>Known defects.</strong> The mass-balance check was inert until a
            token-commit constant was fixed, and historical blocks are unchecked. The
            obligation register records the current status; the check is host-side
            arithmetic, not a ZK block proof.
          </li>
          <li>
            <strong>No protocol-level freeze, not no trust.</strong> The note itself cannot
            be frozen or confiscated by a protocol administrator. The issuer, the credential
            issuer, the relayer, and the external chain are explicit counterparties. That is
            the design, not a missing feature.
          </li>
          <li>
            <strong>Manifests and wallet.</strong> On-chain manifest hashing is pending; the
            shipping wallet implements a subset of the ρ-calculus specification; there is no
            third-party audit and mainnet is TBD.
          </li>
          <li>
            <strong>What stands between this and production.</strong> A third-party audit;
            on-chain manifest hashing; bridge verifiers; closure of OBL-Z12/Z17/C21/C231.
            Mainnet is TBD.
          </li>
        </ul>
      </Section>

      <Section number="7" title="Links" id="darkwow-links">
        <ul className="link-list">
          <li>
            <a href={darkWow.repo} target="_blank" rel="noopener noreferrer">Repository</a>
          </li>
          <li>
            <a href={darkWow.docs} target="_blank" rel="noopener noreferrer">Documentation tree</a>
          </li>
          <li>
            <a href={darkWow.manifest} target="_blank" rel="noopener noreferrer">Manifest specification</a>
          </li>
          <li>
            <a href={darkWow.ocap} target="_blank" rel="noopener noreferrer">O-Cap model</a>
          </li>
          <li>
            <a href={darkWow.consensus} target="_blank" rel="noopener noreferrer">Consensus and supply audit</a>
          </li>
          <li>
            <a href={darkWow.opcodes} target="_blank" rel="noopener noreferrer">Opcode and circuit status</a>
          </li>
          <li>
            <a href={darkWow.proofs} target="_blank" rel="noopener noreferrer">Proof-status ledger</a>
          </li>
          <li>
            <a href={darkWow.axioms} target="_blank" rel="noopener noreferrer">Axiom boundary</a>
          </li>
          <li>
            <a href={darkWow.obligations} target="_blank" rel="noopener noreferrer">Verification obligation register</a>
          </li>
          <li>
            <a href={darkWow.rhoPaper} target="_blank" rel="noopener noreferrer">ρ-calculus paper</a>
          </li>
          <li>
            <a href={darkWow.halo2} target="_blank" rel="noopener noreferrer">Halo 2 release</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
