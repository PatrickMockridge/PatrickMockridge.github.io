import { ComparisonTable, type ComparisonRow } from '../components/ComparisonTable'
import { EvidenceTable } from '../components/EvidenceTable'
import { Figure } from '../components/Figure'
import { Listing } from '../components/Listing'
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
      'Two hand-written kernels (Rust and Python) from one declaration, compared in CI.',
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
  'Design intent, not current coverage: v0.1.4, on PyPI as azoth-engine, not for design work yet; everything ported ships as unverified.'

const PYTHON_EXAMPLE = `import azoth

q = azoth.ureg.Quantity
r = azoth.hydraulics.darcy_weisbach(
    0.02, q(100.0, "m"), q(0.1, "m"), q(998.0, "kg/m**3"), q(1.5, "m/s")
)

r.dp                       # 22455.0 pascal
r.provenance.verification  # 'source_needed'`

const HARNESS_EXAMPLE = `python tools/launch_dsh.py web --permission-mode read-only --study hazop
# exports the HAZOP skill subset to .dsh/skills/, mounts the four presets,
# and opens the harness's browser UI on loopback`

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
        subtitle="Chemical-engineering calculations in Python and Rust, where every number carries its provenance, with a browser flowsheet editor, an installable Python package, and an agent layer that runs HAZOP studies on the DeepSeek Harness."
        metadata={[
          { label: 'Role', value: 'Design, implementation' },
          { label: 'Period', value: '2026' },
          {
            label: 'Status',
            value:
              'v0.1.x (currently 0.1.4); on PyPI as azoth-engine; not for design work yet',
          },
          {
            label: 'Package',
            value: <a href={azoth.pypi} target="_blank" rel="noopener noreferrer">azoth-engine on PyPI</a>,
          },
          {
            label: 'Editor',
            value: <a href={azoth.editor} target="_blank" rel="noopener noreferrer">patrickmockridge.github.io/azoth</a>,
          },
          {
            label: 'Agent runtime',
            value: <a href={azoth.harness} target="_blank" rel="noopener noreferrer">DeepSeek Harness</a>,
          },
          {
            label: 'Repository',
            value: <a href={azoth.repo} target="_blank" rel="noopener noreferrer">github.com/PatrickMockridge/Azoth</a>,
          },
          {
            label: 'Documentation',
            value: <a href={azoth.docs} target="_blank" rel="noopener noreferrer">docs/src</a>,
          },
        ]}
      >
        <WhatWhy
          what={
            <>
              A chemical-engineering calculation library in Python and Rust, written twice
              by hand from one declaration, where every result carries its provenance.
            </>
          }
          why={
            <>
              In process safety, the dangerous number is rarely obviously wrong. It is
              reasonable, it is in the right units, and it has no history — so it gets used. A
              library that returns a bare float is optimised for that failure. Azoth makes a
              number unable to be anonymous: it carries its source and verification state, and
              a calculation that cannot be supported refuses instead of returning a plausible
              default. The library is built so the unsourced number cannot exist.
            </>
          }
          combination={
            <>
              One declaration → two hand-written kernels (Rust and Python) compared in CI
              → per-result provenance → typed refusal as a first-class outcome; a
              disagreement is a finding, not a fallback.
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
            <strong>A disagreement is a finding, not a fallback.</strong> Two hand-written
            kernels from one declaration are compared in CI; a difference is recorded
            rather than resolved by choosing one. This catches implementation drift, not a
            shared specification error.
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

      <Section number="3" title="Using it" id="azoth-editor">
        <div className="prose">
          <p>
            Azoth opens in a browser at{' '}
            <a href={azoth.editor} target="_blank" rel="noopener noreferrer">patrickmockridge.github.io/azoth</a>. The flowsheet editor loads a worked case — a feed, pump, heater, separator and
            recycle, joined by streams — and pressing <strong>Solve</strong> puts
            temperatures, pressures and flows on the drawing; the Workbook lists every
            stream. Case → Examples opens a rich gas compressed, cooled and split into
            sales gas and condensate, or a pipeline dropping pressure through a valve. Click
            any unit operation — a pump, heater or separator — or any stream to read its
            inputs, results and where the model came from.
          </p>
          <p>
            Nothing is installed and no case is uploaded: the calculation engine is compiled
            to WebAssembly and runs inside the page, with no server behind it. The editor is
            the human door into the same engine: a chemical engineer who does not write code
            or use an LLM can build and solve a process by hand, with the same calculations
            and provenance as the library. The other doors — Python, the CLI, a code
            assistant, or MCP — reach the same engine and the same record.
          </p>
          <p>
            From Python, the same engine is the{' '}
            <a href={azoth.pypi} target="_blank" rel="noopener noreferrer">azoth-engine</a>{' '}
            package: <code>pip install azoth-engine</code> installs it (Python 3.12 or
            later), and the import is <code>import azoth</code>. The distribution name
            differs because <code>azoth</code> was already taken on PyPI. It works the same
            in a script or a Jupyter notebook: units arrive as <code>pint</code> quantities,
            results are ordinary Python objects, and each one still carries its provenance —
            so a notebook can loop over a sweep or plot a profile without dropping the
            record.
          </p>
          <p>
            Code assistants and shell scripts get the same object. A shell script can call
            the CLI with <code>--json</code>; a code assistant can call the Python API or
            the CLI from its editor. What comes back is not a bare number but an Azoth
            result: the calculation, its source, its verification state, the checks that
            ran and the ones that could not, and the hashes of the kernels that produced
            it. The result serialises with <code>to_json()</code>, so it survives a file, an
            MCP call, or a pipe, and any other AI or human can validate it without repeating
            the conversation that produced it. In the agentic AI era, where one model's
            number becomes the next model's input, that is the difference between a handoff
            and a plausible guess.
          </p>
        </div>
        <Listing caption="Listing 1. Azoth from Python." code={PYTHON_EXAMPLE} />
      </Section>

      <Section number="4" title="Agents and a worked study" id="azoth-agents">
        <div className="prose">
          <p>
            Azoth also ships an agent layer: ninety self-contained skills that teach a
            model which units, calculation ids and warnings matter, and two teams that
            chain them. HAZOP — a hazard and operability study — has four roles: chair,
            process, safety and scribe, passing each node and guideword through deviation,
            cause, consequence and safeguard. An intake team triages the specification
            before a study starts. The teams run on DeepSeek Harness, DeepSeek's
            plugin-first agent runtime, through a launcher that supplies the engineering
            persona, the skill catalogue and the calculation tools, and opens either a
            browser or a headless session. The model is chosen per run: DeepSeek, OpenAI,
            Anthropic, Kimi or MiniMax.
          </p>
          <p>
            The worked output is a screening-level front-end engineering design (FEED)
            study. Starting from the repository's offshore-debottlenecking notebook, one
            harness session produced equipment and materials specifications, 32,600
            manhours, a 54.1 million US dollar capital estimate, a process flow diagram in
            DEXPI (the standard exchange format for process drawings), a 57-page report
            and a 42-week plan — then an independent HAZOP that a second round closed out:
            all 16 actions dispositioned, and the relief basis reversed because a 35%
            credit for a high-integrity pressure protection system could not be proven.
            The session took about half an hour and roughly 12 million tokens. It is an
            illustrative asset, a screening study and not for construction, and its Azoth
            results are <code>partially_verified</code>.
          </p>
          <p>
            The layer's formal claim — that a team is the parallel composition of its
            roles over message channels — is stated in the rho-calculus, the process
            calculus the library's orchestration model reuses, and is not yet proved. The
            harness is a 0.2 developer preview; the execution is a mapping of that
            composition, not a proof.
          </p>
        </div>
        <Listing caption="Listing 2. Starting the HAZOP team." code={HARNESS_EXAMPLE} />
      </Section>

      <Section number="5" title="Provenance" id="azoth-provenance">
        <div className="prose">
          <p>
            Port of NeqSim (Apache-2.0), with documented divergences. Original to this
            work: the specification, dual generation, provenance layer, typed refusal,
            sealed data access, and the Lean-checked foundations. Azoth is
            AGPL-3.0-or-later.
          </p>
        </div>
      </Section>

      <Section number="6" title="Evidence" id="azoth-evidence">
        <EvidenceTable
          rows={azothEvidence}
          caption="Azoth evidence"
          note="As of 27 November 2026. The issue counts are upstream issues filed against NeqSim, not an Equinor engagement."
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
              <a href={`https://github.com/equinor/neqsim/issues/${issue.id}`} target="_blank" rel="noopener noreferrer">
                #{issue.id}
              </a>{' '}
              — {issue.text}
            </li>
          ))}
        </ul>
      </Section>

      <Section number="7" title="Limits" id="azoth-limits">
        <ul className="prose">
          <li>
            v0.1.4; incomplete port coverage; everything ported ships as{' '}
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
            Agent orchestration is specified, not proved: the team-composition claim has
            no proof, and the DeepSeek Harness runtime is a 0.2 developer preview.
          </li>
          <li>
            The worked FEED study is an illustrative screen; its numbers are{' '}
            <code>partially_verified</code>, and it is neither a design deliverable nor a
            certified DEXPI exchange.
          </li>
          <li>
            AGPL-3.0-or-later has commercial implications for proprietary integration.
          </li>
        </ul>
      </Section>

      <Section number="8" title="Links" id="azoth-links">
        <ul className="link-list">
          <li>
            <a href={azoth.editor} target="_blank" rel="noopener noreferrer">Flowsheet editor</a>
          </li>
          <li>
            <a href={azoth.pypi} target="_blank" rel="noopener noreferrer">Python package (PyPI)</a>
          </li>
          <li>
            <a href={azoth.repo} target="_blank" rel="noopener noreferrer">Repository</a>
          </li>
          <li>
            <a href={azoth.safety} target="_blank" rel="noopener noreferrer">Safety record</a>
          </li>
          <li>
            <a href={azoth.issues} target="_blank" rel="noopener noreferrer">NeqSim issue search</a>
          </li>
          <li>
            <a href={azoth.agents} target="_blank" rel="noopener noreferrer">Agent guidance</a>
          </li>
          <li>
            <a href={azoth.harness} target="_blank" rel="noopener noreferrer">DeepSeek Harness manual</a>
          </li>
          <li>
            <a href={azoth.harnessSetup} target="_blank" rel="noopener noreferrer">Harness setup</a>
          </li>
          <li>
            <a href={azoth.caseStudy} target="_blank" rel="noopener noreferrer">AZ-FEED-08 case study</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
