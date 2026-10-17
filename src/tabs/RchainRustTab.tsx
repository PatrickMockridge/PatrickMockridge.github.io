import { EvidenceTable } from '../components/EvidenceTable'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { rchain, rchainEvidence } from '../data/projects'

const THE_BLOCK_2018 =
  'https://www.theblock.co/news/markets/2018-12-20-rchain-cooperative-functionally-bankrupt-after-questionable-deals-with-investors-and-developers-losing-faith-5244'
const THE_BLOCK_2019_YAHOO =
  'https://finance.yahoo.com/news/rchain-cooperative-hit-scam-tokens-143930190.html'
const GEEKWIRE_2019 =
  'https://www.geekwire.com/2019/boom-bust-blockchain-rchain-cooperatives-cryptocurrency-dreams-dissolve-controversy/'
const DISSOLUTION =
  'https://web.archive.org/web/2022/https://rchain.coop/home.html'

const CRATE_GROUPS = [
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
]

export function RchainRustTab() {
  return (
    <>
      <TitleBlock
        descriptor="Restoration"
        title="rchain-rust"
        subtitle="A rescued blockchain node: Rholang’s laws machine-checked at the model level and conformance-tested at the node."
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
              <a href={rchain.repo}>github.com/rchain-community/rchain-rust</a>
            ),
          },
          {
            label: 'Documentation',
            value: <a href={rchain.docs}>docs/src</a>,
          },
        ]}
      />

      <MethodRefrain />

      <Section number="1" title="Claim" id="rchain-claim">
        <p className="lede">
          rchain-rust is a Scala-to-Rust port of the RChain node: the Scala
          implementation preserved at a pinned commit and ported crate by crate, after
          the cooperative dissolved in 2022 and the network was left without a steward.
          The work is a rescue in the plain sense — the code was preserved, the protocol
          continued, and ownership is not claimed. Rholang, the language the node
          executes, is the part that can be checked: 77 laws are machine-checked in Lean
          4, and 23 entries are tied to the running node by conformance corpora, so the
          assurance is machine-checked at the model level and conformance-tested at the
          node. Ten named axioms remain, with one obligation open. A process-safety
          assurance record — HAZOP, bow-tie analysis, a bounded-adversary tabletop —
          applied to a blockchain node is the uncommon part. The node is a pre-release:
          an early community testnet is live, with no declared stable testnet and no
          production release.
        </p>
      </Section>

      <Section number="2" title="Public record" id="rchain-record">
        <p className="source-note">
          Summarises public reporting; contested claims are attributed. Context for the
          engineering work, not an allegation.
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
                “functionally bankrupt”; senior departures follow. Press
                characterizations, not adjudicated findings.
              </td>
              <td>
                <a href={THE_BLOCK_2018}>The Block (2018)</a>
              </td>
            </tr>
            <tr>
              <td>2019</td>
              <td>
                The Block reports (republished by Yahoo Finance) that an OTC RHOC trade
                was hit by a scam involving counterfeit money in escrow; no amount was
                disclosed. The launch slips.
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
          Litigation continued over membership/arbitration and director indemnification;
          it is context, not a finding. No individuals are named on this site.
        </p>
        <div className="prose">
          <p>
            I did not design RChain; this record covers the port and verification.
          </p>
        </div>
      </Section>

      <Section number="3" title="Design" id="rchain-design">
        <ul className="prose">
          <li>
            <strong>The rescue is auditable.</strong> Upstream is pinned and restorable
            before the port, so the port can be compared with what it replaced.
          </li>
          <li>
            <strong>The Scala implementation is a differential oracle, not an
            authority.</strong> Behaviour is compared 1:1 rather than trusted; the
            reference is evidence, not the standard.
          </li>
          <li>
            <strong>The law register is the oracle, not the Scala implementation.</strong>{' '}
            The 77 laws are machine-checked first, and conformance corpora emitted from
            the register are run 1:1 through the node; the reference contributes vectors,
            not truth.
          </li>
          <li>
            <strong>Assurance is written and gated.</strong> HAZOP, bow-tie analysis, a
            bounded-adversary tabletop, fuzzing, and a coverage floor leave a record that
            does not depend on the author being in the room.
          </li>
        </ul>
      </Section>

      <Section number="4" title="Provenance and rescue" id="rchain-provenance">
        <div className="prose">
          <p>
            Original to this work: the Rust node, the Lean law development, the
            conformance corpora, and the assurance record. Inherited: the RChain protocol
            and the upstream Scala implementation. The upstream Scala is preserved at
            commit <code>1b7583649</code> and restorable with{' '}
            <code>git checkout 1b7583649 -- legacy</code>; a code snapshot at commit{' '}
            <code>14b8b77</code> is timestamped on Arweave, 22 August 2026. Rust is
            AGPL-3.0; upstream Scala is Apache-2.0. No ownership is claimed.
          </p>
          <p>
            The port is a rescue in the plain sense: the code was preserved and the
            protocol continued.
          </p>
          <p>
            <a href={rchain.arweave}>Arweave snapshot</a> ·{' '}
            <a href={rchain.legacy}>Legacy Scala tree</a> ·{' '}
            <a href={rchain.qucalc}>QuCalc research docs</a>
          </p>
        </div>
      </Section>

      <Section number="5" title="Evidence" id="rchain-evidence">
        <EvidenceTable
          rows={rchainEvidence}
          caption="rchain-rust evidence"
          note="Sources: repository README and specification documents, as of October 2026. Counts drift; the linked artifact is authoritative."
        />
        <div className="crate-map">
          {CRATE_GROUPS.map((group) => (
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

      <Section number="6" title="Limits" id="rchain-limits">
        <ul className="prose">
          <li>
            No independent third-party audit. The “adversarial audit” is an internal,
            written, gated review programme.
          </li>
          <li>
            Formal assurance is model-level, not end-to-end: 77 laws are machine-checked
            in Lean 4; 23 entries are tied to the node by conformance corpora; 10 are
            named axioms (9 cryptographic by design); 1 is open (law 63a). The Coq track
            states laws as axioms and proves nothing yet.
          </li>
          <li>
            Memory safety covers first-party crates only; dependencies, leaks, logic
            errors, denial of service, and consensus bugs remain.
          </li>
          <li>
            “Commodity laptop” is an estimate, not a benchmark; storage and RAM scale
            with chain length.
          </li>
          <li>
            No throughput claim; a block carries at most 255 deploys. QuCalc is research,
            not production.
          </li>
          <li>
            No validator count is stated; there are no tagged GitHub releases, and
            testnet builds are distributed by digest. AGPL-3.0 constrains proprietary
            forks. There is no production incident history.
          </li>
        </ul>
      </Section>

      <Section number="7" title="Links" id="rchain-links">
        <ul className="link-list">
          <li>
            <a href={rchain.repo}>Repository</a>
          </li>
          <li>
            <a href={rchain.docs}>Documentation</a>
          </li>
          <li>
            <a href={rchain.laws}>spec/LAWS.md</a>
          </li>
          <li>
            <a href={rchain.inventory}>spec/INVENTORY.md</a>
          </li>
          <li>
            <a href={rchain.coq}>spec/coq/README.md</a>
          </li>
          <li>
            <a href={rchain.audit}>spec/AUDIT.md</a>
          </li>
          <li>
            <a href={rchain.methodology}>
              Methodology: law-first port and agentic assurance
            </a>
          </li>
          <li>
            <a href={rchain.hazop}>HAZOP record</a>
          </li>
          <li>
            <a href={rchain.adversary}>Bounded-adversary tabletop</a>
          </li>
          <li>
            <a href={rchain.rustVsScala}>Rust vs Scala corpus</a>
          </li>
          <li>
            <a href={rchain.coverage}>Coverage ledger</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
