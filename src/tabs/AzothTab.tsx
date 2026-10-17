import { ComparisonTable, type ComparisonRow } from '../components/ComparisonTable'
import { EvidenceTable } from '../components/EvidenceTable'
import { Figure } from '../components/Figure'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { WhatWhy } from '../components/WhatWhy'
import { azoth, azothEvidence } from '../data/projects'

const CONTRAST_COLUMNS = [
  { label: 'Measure' },
  { label: 'A plain calculation' },
  { label: 'An Azoth result' },
]

const CONTRAST_ROWS: ComparisonRow[] = [
  {
    key: 'value',
    header: 'Value',
    cells: [
      'A float.',
      'A float plus its identity, source, verification state, skipped checks, and kernel hashes.',
    ],
  },
  {
    key: 'implementation',
    header: 'Implementation',
    cells: [
      'One code path.',
      'Two independently generated kernels (Rust and Python) from one specification, compared in CI.',
    ],
  },
  {
    key: 'disagreement',
    header: 'Disagreement',
    cells: ['A fallback, or unnoticed.', 'Recorded as a finding.'],
  },
  {
    key: 'refusal',
    header: 'Unsupported input',
    cells: [
      'A plausible default, or an exception with no field.',
      'A typed refusal naming the field.',
    ],
  },
]

const CONTRAST_NOTE =
  'Design intent, not current coverage: v0.1.1, not on PyPI, not for design work yet; everything ported ships as unverified.'

const NEQSIM_ISSUES = [
  {
    id: '3993',
    text: (
      <>
        <code>performGibbsMinimization</code> performs no minimization and logs that it
        completed. Closed, fix PR #4002.
      </>
    ),
  },
  {
    id: '3994',
    text: (
      <>
        A zero-filled vapour-pressure row is given a synthetic curve from its normal
        boiling point, in the wrong unit. Open.
      </>
    ),
  },
]

export function AzothTab() {
  return (
    <>
      <TitleBlock
        descriptor="Specification"
        title="Azoth"
        subtitle="Chemical-engineering calculations in Python and Rust, where every number carries its provenance."
        metadata={[
          { label: 'Role', value: 'Design, implementation' },
          { label: 'Period', value: '2026' },
          {
            label: 'Status',
            value:
              'v0.1.x (currently 0.1.1); not on PyPI; not for design work yet',
          },
          {
            label: 'Repository',
            value: <a href={azoth.repo}>github.com/PatrickMockridge/Azoth</a>,
          },
          {
            label: 'Documentation',
            value: <a href={azoth.docs}>docs/src</a>,
          },
        ]}
      >
        <WhatWhy
          what={
            <>
              A chemical-engineering calculation library in Python and Rust, generated from
              one specification into two independent kernels, where every result carries its
              provenance.
            </>
          }
          why={
            <>
              In process safety, the dangerous number is rarely obviously wrong. It is
              reasonable, it is in the right units, and it has no history — so it gets used. A
              library that returns a bare float is optimised for that failure. Azoth makes a
              number unable to be anonymous: it carries its source and verification state, and
              a calculation that cannot be supported refuses instead of returning a plausible
              default. I spent nine years in process safety; I wanted a library where the
              unsourced number could not exist.
            </>
          }
          combination={
            <>
              One specification → two independently generated kernels (Rust and Python)
              compared in CI → per-result provenance → typed refusal as a first-class outcome;
              a disagreement is a finding, not a fallback.
            </>
          }
        />
      </TitleBlock>

      <MethodRefrain />

      <Section number="1" title="The difference" id="azoth-difference">
        <ComparisonTable
          variant="contrast"
          caption="Table 1. A number, with and without a record."
          subtitle="What changes when the result carries its own history."
          columns={CONTRAST_COLUMNS}
          rows={CONTRAST_ROWS}
          note={CONTRAST_NOTE}
        />
      </Section>

      <Section number="2" title="Design" id="azoth-design">
        <ul className="prose">
          <li>
            <strong>A disagreement is a finding, not a fallback.</strong> Two
            independently generated kernels from one specification are compared in CI; a
            difference is recorded rather than resolved by choosing one.
          </li>
          <li>
            <strong>No result is anonymous.</strong> Each result carries its identity,
            source, verification state, skipped checks, and kernel hashes.
          </li>
          <li>
            <strong>Unsupported answers are refused.</strong> Typed errors name the
            offending field rather than returning a plausible default.
          </li>
          <li>
            <strong>Agent-exposed results keep their provenance.</strong> Data access is
            sealed at load, not at use, and results exposed over MCP carry the same
            record.
          </li>
        </ul>
      </Section>

      <Section number="3" title="Provenance" id="azoth-provenance">
        <div className="prose">
          <p>
            Port of NeqSim (Apache-2.0), with documented divergences. Original to this
            work: the specification, dual generation, provenance layer, typed refusal,
            sealed data access, and the Lean-checked foundations. Azoth is
            AGPL-3.0-or-later.
          </p>
        </div>
      </Section>

      <Section number="4" title="Evidence" id="azoth-evidence">
        <EvidenceTable
          rows={azothEvidence}
          caption="Azoth upstream evidence"
          note="As of October 2026. These are upstream issues filed against NeqSim, not an Equinor engagement."
        />
        <Figure id="azoth-pipeline" caption="Figure 1. Azoth pipeline, abridged.">
          <div
            className="pipeline"
            role="img"
            aria-label="Pipeline: TOML specification; generated Rust and Python; dual kernels; provenance record; CLI, UI, MCP, and agents."
          >
            <span className="pipeline-step">TOML specification</span>
            <span className="pipeline-arrow" aria-hidden="true">
              →
            </span>
            <span className="pipeline-step">Generated Rust and Python</span>
            <span className="pipeline-arrow" aria-hidden="true">
              →
            </span>
            <span className="pipeline-step">Dual kernels</span>
            <span className="pipeline-arrow" aria-hidden="true">
              →
            </span>
            <span className="pipeline-step">Provenance record</span>
            <span className="pipeline-arrow" aria-hidden="true">
              →
            </span>
            <span className="pipeline-step">CLI · UI · MCP · agents</span>
          </div>
        </Figure>
        <ul className="link-list">
          {NEQSIM_ISSUES.map((issue) => (
            <li key={issue.id}>
              <a href={`https://github.com/equinor/neqsim/issues/${issue.id}`}>
                #{issue.id}
              </a>{' '}
              — {issue.text}
            </li>
          ))}
        </ul>
      </Section>

      <Section number="5" title="Limits" id="azoth-limits">
        <ul className="prose">
          <li>
            v0.1.1; not on PyPI; incomplete port coverage; everything ported ships as{' '}
            <code>unverified</code>; the standalone simulator is an aim, not a status.
          </li>
          <li>
            Not for design work yet: shipped Crane K-factor coefficients are estimated
            dummy values; a pressure drop can be wrong by a factor of two while looking
            reasonable.
          </li>
          <li>
            Lean covers foundations only — dimensional calculus, unit vocabulary, two
            derivative formulas, keycard non-amplification. Physics kernels are measured,
            not proved.
          </li>
          <li>
            One upstream issue did not reproduce in situ. This is a self-audit, not a
            third-party audit.
          </li>
          <li>
            AGPL-3.0-or-later has commercial implications for proprietary integration.
          </li>
        </ul>
      </Section>

      <Section number="6" title="Links" id="azoth-links">
        <ul className="link-list">
          <li>
            <a href={azoth.repo}>Repository</a>
          </li>
          <li>
            <a href={azoth.safety}>Safety record</a>
          </li>
          <li>
            <a href={azoth.issues}>NeqSim issue search</a>
          </li>
          <li>
            <a href={azoth.agents}>Agent guidance</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
