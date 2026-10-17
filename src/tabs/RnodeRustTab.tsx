import { ComparisonTable, type ComparisonRow } from '../components/ComparisonTable'
import { EvidenceTable } from '../components/EvidenceTable'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { WhatWhy } from '../components/WhatWhy'
import { rnode, rnodeEvidence } from '../data/projects'

const THE_BLOCK_2018 =
  'https://www.theblock.co/news/markets/2018-12-20-rchain-cooperative-functionally-bankrupt-after-questionable-deals-with-investors-and-developers-losing-faith-5244'
const THE_BLOCK_2019_YAHOO =
  'https://finance.yahoo.com/news/rchain-cooperative-hit-scam-tokens-143930190.html'
const GEEKWIRE_2019 =
  'https://www.geekwire.com/2019/boom-bust-blockchain-rchain-cooperatives-cryptocurrency-dreams-dissolve-controversy/'
const DISSOLUTION =
  'https://web.archive.org/web/2022/https://rchain.coop/home.html'

const CALCULUS_COLUMNS = [
  { label: 'Model' },
  { label: 'Complete' },
  { label: 'Compositional' },
  { label: 'Concurrent' },
  { label: 'Mobile' },
  { label: 'Reflective' },
  { label: 'Behavioural types' },
  { label: 'Score' },
]

function matrixRow(model: string, flags: boolean[]): ComparisonRow {
  const score = flags.filter(Boolean).length
  return {
    key: model,
    header: model,
    cells: [...flags.map((yes) => ({ yes })), `${score}/6`],
  }
}

const CALCULUS_ROWS: ComparisonRow[] = [
  matrixRow('Turing machines', [true, false, false, false, false, false]),
  matrixRow('λ-calculus', [true, true, false, false, false, false]),
  matrixRow('CCS', [true, true, true, false, false, false]),
  matrixRow('Petri nets', [true, false, true, false, false, false]),
  matrixRow('π-calculus', [true, true, true, true, false, true]),
  matrixRow('ρ-calculus', [true, true, true, true, true, true]),
]

const CALCULUS_NOTE =
  'Mobility replaces the Desktop figure’s undefined “Complexity” axis; the scores follow that substitution.'

const CLAIM_COLUMNS = [
  { label: 'Claim' },
  { label: 'Mechanism' },
  { label: 'What is established' },
  { label: 'Boundary' },
]

const CLAIM_ROWS: ComparisonRow[] = [
  {
    key: 'scale',
    header: 'Horizontal scale-out',
    cells: [
      <>
        Shard routing; cross-shard invoke; two-phase commit (Laws 26–29); merge (Laws 9, 17);
        concurrent replay of dependency-free blocks.
      </>,
      <>
        The mechanisms exist in code and are modelled in Lean; this is not an end-to-end
        distributed run.
      </>,
      <>
        Single-shard default; transaction API off; no production benchmark. 60–160 deploys/s
        is derived, not measured. Residency Θ(N²): 16 GB ≈ 12 h at 2 s blocks.
      </>,
    ],
  },
  {
    key: 'ocap',
    header: 'Native object capabilities',
    cells: [
      <>
        Unforgeable <code>new</code> names; <code>bundle</code> facets; forwarders;
        revocation; sealer/unsealer; reflection; OCapN.
      </>,
      <>
        Possession is authority; capture-avoiding substitution is proved over the model (Law
        3); the patterns are language constructs.
      </>,
      <>
        Move/Sui also make references unforgeable. The difference is proved capture-resistance,
        the o-cap patterns, and reflection; delegation safety remains a discipline.
      </>,
    ],
  },
  {
    key: 'correct',
    header: 'Correct by construction',
    cells: [
      <>
        No <code>unsafe</code> in the 14 first-party crates; ρ as the base sort of a CoC;
        70/77 laws non-vacuous; 19 node-tied by conformance corpora.
      </>,
      <>
        Memory-unsafety is unwritable in first-party code; proved laws are machine-checked
        and, where marked, run against the node.
      </>,
      <>
        Not a whole-node proof. Dependencies, leaks, logic errors, denial of service, and
        consensus bugs remain. 2 laws vacuous; 5 named or open; law 19 axiomatized.
      </>,
    ],
  },
]

export function RnodeRustTab() {
  return (
    <>
      <TitleBlock
        descriptor="Model and node"
        title="rnode-rust"
        subtitle="A Rust node for the ρ-calculus: native object capabilities, horizontal scale-out by design, and laws proved at the model and tied to the node."
        metadata={[
          {
            label: 'Role',
            value:
              'Scala-to-Rust port of the RChain node; law-first conformance and agentic assurance',
          },
          { label: 'Period', value: '2026' },
          {
            label: 'Status',
            value:
              'Pre-release; an early community testnet is live; no declared stable testnet; no production release',
          },
          {
            label: 'Repository',
            value: (
              <a href={rnode.repo}>github.com/rchain-community/rchain-rust</a>
            ),
          },
          {
            label: 'Documentation',
            value: <a href={rnode.docs}>docs/src</a>,
          },
        ]}
      >
        <WhatWhy
          what={
            <>
              A Rust implementation of the RChain node: Rholang and RSpace, Casper consensus,
              storage, networking, and OCapN, ported crate by crate from the preserved Scala
              reference.
            </>
          }
          why={
            <>
              The common pattern puts concurrency in the runtime and authority in a permission
              check. RChain’s language makes both structural: processes compose concurrently
              with <code>|</code>, and an unforgeable <code>new</code> name is the authority.
              The interesting part is not the token; it is a concurrent, replicated state
              machine whose nodes must agree, and RChain makes that shape explicit. That is a
              different way to build a distributed system, closer to the shape of a network.
              The organisation dissolved in 2022; the port keeps the implementation running and
              tests the claims against a machine.
            </>
          }
          combination={
            <>
              A ρ-calculus language where authority is a name and concurrency is native; a Rust
              node designed to shard horizontally; and a law register that ties machine-checked
              models to the running node by conformance corpora.
            </>
          }
        />
      </TitleBlock>

      <Section number="1" title="The model" id="rnode-model">
        <ComparisonTable
          variant="matrix"
          caption="Table 1. Models of computation, by capability."
          subtitle="Six formal models scored on six properties. ρ is the only model in this comparison with all six; the ladder continues into the Calculus of Constructions, where ρ is embedded as a base sort."
          columns={CALCULUS_COLUMNS}
          rows={CALCULUS_ROWS}
          note={CALCULUS_NOTE}
        />
        <div className="prose">
          <p>
            λ is substitution; π adds concurrency and mobility; ρ makes a name a quoted
            process (<code>@P</code>/<code>*x</code>); CoC is where ρ is embedded as a base
            sort.
          </p>
        </div>
        <ComparisonTable
          variant="claims"
          caption="Table 2. Three claims, and where each stops."
          subtitle="The claim as it is usually put, the mechanism behind it, and the boundary the record supports."
          columns={CLAIM_COLUMNS}
          rows={CLAIM_ROWS}
        />
      </Section>

      <MethodRefrain />

      <Section number="2" title="Design" id="rnode-design">
        <ul className="prose">
          <li>
            <strong>A name is a quoted process.</strong> Reflection is primitive:{' '}
            <code>@P</code> names a process and <code>*x</code> recovers it. Bundles are
            read/write facets, forwarders attenuate, and revocation is a language pattern.
            Authority is a name, not a permission table.
          </li>
          <li>
            <strong>The law register is the oracle.</strong> Corpora emitted from the register
            run 1:1 through the node. The Scala reference contributes vectors, not truth.
          </li>
          <li>
            <strong>Provenance is fixed before the port.</strong> Upstream is pinned and
            restorable, and its 165-file differential corpus is the reference’s surviving
            authority — as data, not specification.
          </li>
          <li>
            <strong>Assurance is written and gated.</strong> Findings have one home and close
            by construction; HAZOP, bow-tie, a bounded-adversary tabletop, fuzzing, and a
            coverage floor leave a record that does not depend on the author.
          </li>
        </ul>
      </Section>

      <Section number="3" title="Provenance and rescue" id="rnode-provenance">
        <div className="prose">
          <p>
            Original: the Rust node, the Lean laws, the conformance corpora, and the assurance
            record. Inherited: the RChain protocol and the upstream Scala, pinned at{' '}
            <code>1b7583649</code> and restorable with{' '}
            <code>git checkout 1b7583649 -- legacy</code>. A code snapshot at{' '}
            <code>14b8b77</code> is timestamped on Arweave, 22 August 2026. Rust is AGPL-3.0;
            upstream Scala is Apache-2.0. The port is a rescue in the plain sense: the code was
            preserved and the protocol continued. No ownership is claimed.
          </p>
        </div>
        <p className="source-note">
          Public record: summarises public reporting; contested claims are attributed. Context
          for the engineering work, not an allegation.
        </p>
        <table className="record-table">
          <thead>
            <tr>
              <th scope="col">Year</th>
              <th scope="col">Record</th>
              <th scope="col">Source</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2017</td>
              <td>The cooperative forms to steward the platform.</td>
              <td>
                <a href={GEEKWIRE_2019}>GeekWire (2019)</a>
              </td>
            </tr>
            <tr>
              <td>Dec 2018</td>
              <td>
                After raising roughly $30–31M, it spends $23.5M on a five-year audio-codec
                license; The Block reports that sources described the treasury as
                “functionally bankrupt”; senior departures follow. Press characterizations,
                not adjudicated findings.
              </td>
              <td>
                <a href={THE_BLOCK_2018}>The Block (2018)</a>
              </td>
            </tr>
            <tr>
              <td>2019</td>
              <td>
                The Block reports (republished by Yahoo Finance) that an OTC RHOC trade was hit
                by a scam involving counterfeit money in escrow; no amount was disclosed. The
                launch slips.
              </td>
              <td>
                <a href={THE_BLOCK_2019_YAHOO}>The Block via Yahoo Finance (2019)</a>
              </td>
            </tr>
            <tr>
              <td>Feb 2020</td>
              <td>Mainnet launches with cooperative validators.</td>
              <td>
                <a href={DISSOLUTION}>RChain Cooperative (Wayback)</a>
              </td>
            </tr>
            <tr>
              <td>Aug 2022</td>
              <td>
                The cooperative announces it is dissolved, citing legal, financial, and
                logistical issues; the network is left without a steward.
              </td>
              <td>
                <a href={DISSOLUTION}>Dissolution notice (Wayback)</a>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="source-note">
          Litigation continued over membership/arbitration and director indemnification; it is
          context, not a finding. No individuals are named on this site.
        </p>
        <div className="prose">
          <p>
            I did not design RChain; this record covers the port and verification.{' '}
            <a href={rnode.arweave}>Arweave snapshot</a> ·{' '}
            <a href={rnode.legacy}>Legacy Scala tree</a> ·{' '}
            <a href={rnode.qucalc}>QuCalc research docs</a>.
          </p>
        </div>
      </Section>

      <Section number="4" title="Evidence" id="rnode-evidence">
        <EvidenceTable
          rows={rnodeEvidence}
          caption="rnode-rust evidence"
          note="Sources: repository README and specification documents, as of October 2026. Counts drift; the linked artifact is authoritative."
        />
        <div className="crate-map">
          {[
            {
              title: 'Language and runtime',
              crates: ['rholang', 'rspace', 'qucalc', 'graphz'],
            },
            {
              title: 'Consensus and storage',
              crates: ['casper', 'block-storage', 'models', 'shared'],
            },
            {
              title: 'Networking and crypto',
              crates: ['comm', 'ocapn', 'crypto'],
            },
            {
              title: 'Tools',
              crates: ['sdk', 'node', 'rspace-bench'],
            },
          ].map((group) => (
            <div className="crate-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="crate-list">
                {group.crates.map((crate) => (
                  <li key={crate}>{crate}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section number="5" title="Limits" id="rnode-limits">
        <ul className="prose">
          <li>
            <strong>No external audit firm.</strong> The security record is a written, gated
            adversarial programme: the September 2026 pass found no P0 (chain split, fund loss,
            or remote code execution); three P1s, four P2s, and fourteen P3s were confirmed and
            closed.
          </li>
          <li>
            <strong>Formal assurance is layered.</strong> 72 of 77 laws are proved at all — 19
            tied to the running node by conformance corpora, 53 over the model. Two of the 72
            are vacuous, leaving 70 non-vacuous; five laws are named or open (law 63a). The Coq
            track defines the α-equivalence metatheory but states its laws as axioms.
          </li>
          <li>
            <strong>Memory safety is first-party only.</strong> No <code>unsafe</code> covers
            the fourteen crates, not their dependencies; it rules out the memory-unsafety
            class, not leaks, logic errors, denial of service, or consensus bugs.
          </li>
          <li>
            <strong>Sizing is an estimate.</strong> The node is storage- and uptime-bound, not
            CPU-bound; RAM and start-up time scale with chain length. The hardware page carries
            measured start-up figures, not a production benchmark.
          </li>
          <li>
            <strong>Throughput is bounded and residency is superlinear.</strong> A block
            carries at most 255 deploys; the scaling page derives roughly 60–160 deploys/s on
            one shard and 6–20 s finality. Residency is Θ(N²): at a two-second block interval,
            16 GB of memory is roughly twelve hours away, and sharding is untested at scale.
          </li>
        </ul>
      </Section>

      <Section number="6" title="Links" id="rnode-links">
        <ul className="link-list">
          <li>
            <a href={rnode.repo}>Repository</a>
          </li>
          <li>
            <a href={rnode.laws}>spec/LAWS.md</a>
          </li>
          <li>
            <a href={rnode.inventory}>spec/INVENTORY.md</a>
          </li>
          <li>
            <a href={rnode.securityAudit}>Security audit</a>
          </li>
          <li>
            <a href={rnode.methodology}>
              Methodology: law-first port and agentic assurance
            </a>
          </li>
          <li>
            <a href={rnode.whyRholang}>Why Rholang</a>
          </li>
          <li>
            <a href={rnode.objectCapabilities}>Object capabilities</a>
          </li>
          <li>
            <a href={rnode.scaling}>Scaling and performance limits</a>
          </li>
          <li>
            <a href={rnode.hazop}>HAZOP record</a>
          </li>
          <li>
            <a href={rnode.rustVsScala}>Rust vs Scala corpus</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
