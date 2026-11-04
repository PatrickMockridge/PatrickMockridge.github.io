import { ComparisonTable, type ComparisonRow } from '../components/ComparisonTable'
import { EvidenceTable } from '../components/EvidenceTable'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { WhatWhy } from '../components/WhatWhy'
import { rgen, rgenEvidence } from '../data/projects'
import { pathForTab } from '../data/site'

const RACE_COLUMNS = [
  { label: 'Race class' },
  { label: 'Meaning' },
  { label: 'Pairs' },
]

const RACE_ROWS: ComparisonRow[] = [
  {
    key: 'exclusive',
    header: 'Exclusive',
    cells: [
      'Whichever arm runs first, the second refuses on the post-state.',
      '19',
    ],
  },
  {
    key: 'ordered',
    header: 'Ordered',
    cells: [
      'One direction refuses; the other is the serialized, non-retroactive order.',
      '12',
    ],
  },
  {
    key: 'independent',
    header: 'Independent',
    cells: ['The arms touch different cells and do not interact.', '1'],
  },
]

export function RGenTab() {
  return (
    <>
      <TitleBlock
        descriptor="Engineering records on Rholo"
        title="R-Gen"
        subtitle="Engineering judgement is scattered across trackers, credentials, email, banks, and folders. R-Gen puts a claim and its validation on one chain, so the record travels with the asset."
        metadata={[
          {
            label: 'Role',
            value:
              'Contracts, Lean 4 model, paper mapping, specification; sole author',
          },
          {
            label: 'Period',
            value: '2026; created 4 November; core and proofs dated 4 November',
          },
          {
            label: 'Origin',
            value:
              'CoEngineers, early investor (2017–2019); involved since 2017. R-Gen continues that line of work.',
          },
          {
            label: 'Status',
            value:
              'Devnet-only, unaudited; no real value; seven-term core; extension suites not implemented.',
          },
          {
            label: 'Paper basis',
            value: 'Dan Robles and colleagues, CoEngineers and Ingenesist Project (2016–2020)',
          },
          {
            label: 'Repository',
            value: (
              <a href={rgen.repo} target="_blank" rel="noopener noreferrer">
                github.com/rhovision-org/r-gen
              </a>
            ),
          },
          {
            label: 'Documentation',
            value: (
              <a href={rgen.book} target="_blank" rel="noopener noreferrer">
                rhovision-org.github.io/r-gen
              </a>
            ),
          },
          {
            label: 'Built on',
            value: (
              <>
                <a href={pathForTab('rholo')}>Rholo</a> node; Rholang contracts; no
                R-Cash or ERTP dependency in the core
              </>
            ),
          },
        ]}
      >
        <p className="lede">
          I invested in CoEngineers in 2017 and have been involved since. R-Gen is my
          continuation of that thread: Dan Robles’ CoEngineers and Ingenesist vision, now
          expressed as smart contracts in Rholang, Rholo’s contract language, and a model
          in Lean 4, a proof assistant. The papers begin with a plain observation — the
          value of engineering is invisible because almost nothing records the judgement
          about the work — and this is a small, working attempt to record it.
        </p>
        <WhatWhy
          what={
            <>
              A small Rholang core for engineering claims. A claim records what was done:
              the work, definition, quantity, and criteria. A validation records how well,
              and who was qualified to say so. Approval turns the pair into a K-Asset — a
              knowledge asset that carries its qualifications, adjudication, and
              provenance. Seven deploy terms, sixteen catalogue components, ten state
              cells, acyclic.
            </>
          }
          why={
            <>
              A claim without validation is an assertion. Validation without a claim has
              nothing to measure. Today the work sits in a tracker, the credential in a
              registry, the payment in a bank, the argument in email, and the evidence in
              a folder. Each boundary breaks the link between the work and the judgement
              about it. The asset cannot say who validated it, under what credential,
              against which definition, or what happened when it was disputed.
            </>
          }
          combination={
            <>
              Paper-derived primitives, object capabilities on Rholo (unforgeable
              references that grant exactly the authority they name), one linear cell per
              entity (a single-writer piece of state), and a Lean 4 model with a proved
              race-freedom result over the model and a 32-pair race matrix. The core stops
              at approval and decision facts; pricing, payments, ERTP (Rholo’s token
              standard), risk scoring, panels, governance, and the client consume those
              facts from outside.
            </>
          }
        />
      </TitleBlock>

      <MethodRefrain />

      <Section number="1" title="Why engineering value is invisible" id="rgen-idea">
        <div className="prose">
          <p>
            The papers start with a blunt sentence: “The fundamental problem is that the
            value of engineering is invisible.” Dan Robles and colleagues wrote in 2017
            that there is little accounting of true engineering value because there are
            few tools that measure it. Their remedy is a handshake. A claim states the
            work, definition, quantity, and criteria; a validation states quality and
            carries evidence; approval marks acceptable completion. The pair is a K-Asset.
          </p>
          <p>
            A load calculation makes it concrete. The calculation is the claim; a second
            engineer checks the assumptions and signs it, and their credential is what
            makes the signature mean something. Today the calculation is in a folder, the
            check in an email, and the fee in an invoice. Months later the record cannot
            say who checked it, against which version, or what happened in a dispute.
          </p>
          <p>
            R-Gen puts that handshake on chain and keeps the record with the asset.
            Qualification, adjudication, and provenance are cells the claim participates
            in.
          </p>
        </div>
      </Section>

      <Section number="2" title="The small core" id="rgen-core">
        <div className="prose">
          <p>
            Seven deploy terms cover the handshake: root, identity, credentials, claim,
            value proposition, oracle, and provenance. The claim holds the work, criteria,
            quantity and definition, clock, comments, and value-proposition reference;
            validation creates the K-Asset, and the asset library stays private. The oracle
            holds one credential-proved adjudicator and the evidence, then executes through
            the subject’s private <code>applyDecision</code> capability, so a decision
            cannot be applied to another K-Asset.
          </p>
          <p>
            The removal test is the design rule: take a primitive out; if the rest can
            still express a claim, a validation, a value proposition, and a K-Asset, it was
            not core. That leaves seven deploy terms, sixteen catalogue components, and ten
            state cells, with no cycles. The core mints and transfers nothing and has no
            R-Cash or ERTP dependency. Pricing, payments, risk scoring, panels, governance,
            handles, metrics, and the client are extensions that consume approval and
            decision facts; the core never calls them.
          </p>
        </div>
      </Section>

      <Section number="3" title="From paper to theorem" id="rgen-paper-to-code">
        <div className="prose">
          <p>
            The lineage is only worth claiming if it can be checked. Each primitive page
            carries the paper quote and page, the Rholang arm, the Lean theorem, and the
            suite or corpus row that exercises it; the row-by-row matrix is{' '}
            <code>docs/src/reference/paper-to-code.md</code>. A reader can start at a
            sentence in Robles &amp; Layton and end at a theorem name.
          </p>
          <p>
            The Pareto ledger is a design test, not a claim about the papers. “Pareto” does
            not appear in the seven papers; it is the author’s framing. The ledger labels
            each primitive paper-derived, paper-adjacent, a user decision, or engineering
            infrastructure, and records removals.
          </p>
          <p>
            The papers are third-party copyrighted reference material, indexed at{' '}
            <code>docs/papers/README.md</code> and not covered by the AGPL. The contracts,
            model, and book are original work. The attribution is specific: Dan Robles’
            CoEngineers and Ingenesist Project. The repository is <code>r-gen</code>; the
            Lean namespace is <code>RGen</code> because Lean identifiers cannot contain a
            hyphen.
          </p>
        </div>
      </Section>

      <Section number="4" title="Concurrency and proof" id="rgen-concurrency">
        <div className="prose">
          <p>
            Every entity is a linear cell: state that a contract consumes, checks, and puts
            back exactly once, like a baton passed by hand rather than a whiteboard everyone
            can write on. A mutating arm consumes first, evaluates every guard against what
            it consumed, and re-posts exactly once. A second operation sees the new state
            and refuses. No two operations can both observe the same pre-state and both
            commit.
          </p>
          <p>
            Independent entities share no mutable cell. Identity creation and credential
            issuance are the only serialization points, neither on the claim/validation hot
            path. Oracle cases receive the subject’s private <code>applyDecision</code>{' '}
            capability in their closure, so a decision cannot be applied to another
            K-Asset.
          </p>
          <p>
            The Lean model states the general result.{' '}
            <code>RGen.core_races_not_representable</code> says no two events on one cell in
            any run expect the same version; <code>RGen.core_arm_authority</code> says every
            arm’s decision comes from the cell it consumed. The proof is over the model, not
            the deployed Rholang.
          </p>
          <p>
            The 32-pair matrix is the boundary of that claim. Nineteen pairs are exclusive:
            whichever runs first, the second refuses. Twelve are ordered: one direction
            refuses, the other is the legal serialized order. One is independent. Every pair
            names a Lean theorem in <code>spec/flows/races.yaml</code>;{' '}
            <code>tools/check_race_matrix.py</code> checks the class vocabulary and that each
            declaration exists.
          </p>
        </div>
        <ComparisonTable
          variant="contrast"
          caption="Table 1. The 32 arm pairs, by race class."
          subtitle="Nineteen pairs exclude each other, twelve have one legal order, and one does not interact."
          columns={RACE_COLUMNS}
          rows={RACE_ROWS}
          note="Every pair names a Lean theorem in spec/flows/races.yaml; tools/check_race_matrix.py checks the class vocabulary and declaration existence."
        />
      </Section>

      <Section number="5" title="Evidence" id="rgen-evidence">
        <div className="prose">
          <p>
            On 4 November 2026, against Rholo node <code>e2d073d</code>, the seven-term core
            installed on a fresh isolated devnet. Ten behavioural suites passed, from
            identity and credentials through claim, K-Asset, value, oracle, provenance,
            integration, a core vertical slice, and the race regression, printing 291{' '}
            <code>ok</code> assertions.
          </p>
          <p>
            The Lean project builds 36 files without Mathlib. The audit covers 131 public
            theorems and reports only <code>propext</code> and <code>Quot.sound</code>;
            there is no <code>sorry</code>, <code>admit</code>, <code>native_decide</code>,
            or declared axiom. The flow manifest maps 66 arms: 35 proved-model, 0
            proved-conformance, 31 owed. Proved-model means the theorem is about the model;
            proved-conformance would tie a deployed arm to an emitted row and a passing
            suite, and none is claimed. The model emits 21 corpus rows. The adversarial
            review records four P0 defects in the legacy 12-term prototype and their
            removal.
          </p>
        </div>
        <EvidenceTable
          rows={rgenEvidence}
          caption="R-Gen evidence"
          note="Sources: verification record, formal model, race matrix, and adversarial review, as of 4 November 2026. Counts drift; the linked artifact is authoritative. The suites are behavioural evidence; the race results are model theorems."
        />
      </Section>

      <Section number="6" title="Limits" id="rgen-limits">
        <ul className="prose">
          <li>
            <strong>Maturity.</strong> Devnet-only, unaudited; no real value. There is no
            token sale, pricing, transfer, or ERTP in the core.
          </li>
          <li>
            <strong>Extensions.</strong> Receipts, pricing, R-Cash payments, risk scoring,
            panels, governance, handles, metrics, and the web client are not implemented in
            this tree, and their suites are not implemented.
          </li>
          <li>
            <strong>Proof boundary.</strong> Lean proves the model, not a mechanized Rholang
            refinement. The arm map is hand-transcribed; <code>proved-conformance</code> is
            zero and 31 arms are owed.
          </li>
          <li>
            <strong>Concurrency.</strong> The precise claim is no shared mutable cell across
            independent entities and one writer per entity. It is not an absolute optimality
            theorem. Identity creation and credential issuance serialize deliberately.
          </li>
          <li>
            <strong>Oracle.</strong> Selection is deterministic and named by the parties; it
            is not a random beacon.
          </li>
          <li>
            <strong>Attribution.</strong> The seven bundled papers are third-party
            copyrighted works, not AGPL. The repository is AGPL-3.0-only.
          </li>
          <li>
            <strong>Scope.</strong> The core records approval and decision facts. It does not
            price, pay, score risk, run panels, or administer governance.
          </li>
        </ul>
      </Section>

      <Section number="7" title="Links" id="rgen-links">
        <ul className="link-list">
          <li>
            <a href={rgen.repo} target="_blank" rel="noopener noreferrer">Repository</a>
          </li>
          <li>
            <a href={rgen.book} target="_blank" rel="noopener noreferrer">Book</a>
          </li>
          <li>
            <a href={rgen.readme} target="_blank" rel="noopener noreferrer">README</a>
          </li>
          <li>
            <a href={rgen.summary} target="_blank" rel="noopener noreferrer">Book contents</a>
          </li>
          <li>
            <a href={rgen.northStar} target="_blank" rel="noopener noreferrer">North star</a>
          </li>
          <li>
            <a href={rgen.paretoLedger} target="_blank" rel="noopener noreferrer">Pareto ledger</a>
          </li>
          <li>
            <a href={rgen.paperToCode} target="_blank" rel="noopener noreferrer">Paper to code</a>
          </li>
          <li>
            <a href={rgen.formalModel} target="_blank" rel="noopener noreferrer">Formal model</a>
          </li>
          <li>
            <a href={rgen.raceProof} target="_blank" rel="noopener noreferrer">Race-freedom proof</a>
          </li>
          <li>
            <a href={rgen.verification} target="_blank" rel="noopener noreferrer">Verification record</a>
          </li>
          <li>
            <a href={rgen.status} target="_blank" rel="noopener noreferrer">Status and limits</a>
          </li>
          <li>
            <a href={rgen.adversarial} target="_blank" rel="noopener noreferrer">Adversarial review</a>
          </li>
          <li>
            <a href={rgen.pareto} target="_blank" rel="noopener noreferrer">Pareto manifest</a>
          </li>
          <li>
            <a href={rgen.raceLean} target="_blank" rel="noopener noreferrer">Race freedom in Lean</a>
          </li>
          <li>
            <a href={rgen.papers} target="_blank" rel="noopener noreferrer">Papers and copyright</a>
          </li>
          <li>
            <a href={pathForTab('rholo')}>Rholo node record</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
