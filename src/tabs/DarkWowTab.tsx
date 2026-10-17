import { EvidenceTable } from '../components/EvidenceTable'
import { Figure } from '../components/Figure'
import { Listing } from '../components/Listing'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { darkWow, darkWowEvidence, manifestExcerpt } from '../data/projects'

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
          { label: 'Status', value: 'Research prototype; unaudited; mainnet TBD' },
          {
            label: 'Repository',
            value: <a href={darkWow.repo}>github.com/PatrickMockridge/DarkWow</a>,
          },
          {
            label: 'Documentation',
            value: <a href={darkWow.docs}>doc/src</a>,
          },
        ]}
      />

      <MethodRefrain />

      <Section number="1" title="Claim" id="darkwow-claim">
        <p className="lede">
          DarkWow is a Layer 1 design for private organisations on a public chain,
          intended to let members coordinate, hold assets, and audit supply without a
          public administrator, a public member list, or a voter roll. Authority is
          designed so that it is not asserted by an identity or a privileged key but
          represented as an object capability: holding the capability is what permits
          the action. The fork-original work is the governance layer and genesis set, a
          deterministic Uncle Merkle consensus, self-describing contracts with on-chain
          manifests, and a wallet that composes capability types from scanned state. The
          distinctive claim is the integration — privacy, accountability, and supply
          audit designed as one system rather than traded against one another. It is an
          unaudited research prototype: 9 of 32 contract codebases are genesis, three
          added gadgets are proved in Lean 4 with eight declared axioms, and the
          supply-audit verifier components are designed but not yet wired.
        </p>
      </Section>

      <Section number="2" title="Design" id="darkwow-design">
        <ul className="prose">
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
                Halo2 · three proved gadgets
              </text>
            </g>
          </svg>
        </Figure>
        <Listing caption="Listing 1. DeployParamsV1 manifest, abridged." code={manifestExcerpt} />
      </Section>

      <Section number="5" title="Limits" id="darkwow-limits">
        <ul className="prose">
          <li>
            Only nine genesis contracts are labelled proven; the 23 post-genesis
            contracts are experimental.
          </li>
          <li>
            Formal verification is partial: three opcodes have machine-checked soundness
            proofs with stated hypotheses; contract-circuit review is a manual audit;
            eight axioms are declared; <code>OBL-Z12</code> and other obligations
            remain open.
          </li>
          <li>
            Supply is designed to be auditable without a trusted auditor; the verifier
            components are not yet wired into the node.
          </li>
          <li>
            Dual finality is partial: Caribina anchors are published but its verifier is
            not wired into the node; the Monero anchoring gadget has not been enabled;
            Monero merge mining is live.
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
            <a href={darkWow.proofs}>Proofs</a>
          </li>
          <li>
            <a href={darkWow.obligations}>Verification obligation register</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
