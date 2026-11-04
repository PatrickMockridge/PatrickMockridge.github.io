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
        descriptor="Claims and proofs on Rholo"
        title="R-Gen"
        subtitle="Rholang contracts and Lean 4 proofs for the CoEngineers and Ingenesist vision: engineering work becomes a claim, validation is its quality, and the pair is a K-Asset that keeps its qualifications, adjudication, and provenance."
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
            label: 'Status',
            value:
              'Devnet-only, unaudited; no real value; seven-term core; extensions not implemented.',
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
                <a href={pathForTab('rholo')}>Rholo</a> node; Rholang contracts; no R-Cash
                or ERTP dependency
              </>
            ),
          },
        ]}
      >
        <WhatWhy
          what={
            <>
              A seven-term Rholang core for engineering claims: identity and credentials, a
              per-claim cell that creates a K-Asset on validation, a value-proposition cell, a
              single-adjudicator oracle, and per-asset provenance. Sixteen components, ten state
              cells, acyclic. One writer per entity; independent entities share no mutable
              state.
            </>
          }
          why={
            <>
              A claim without validation is an assertion; validation without a claim has
              nothing to measure. Splitting work, credentials, payment, and disputes across
              separate systems loses the link between the work and the judgement about it.
              Pairing quantity with quality makes the record durable; attaching qualification,
              adjudication, and provenance keeps it with the asset.
            </>
          }
          combination={
            <>
              Paper-derived primitives, object capabilities on Rholo, per-entity linear cells,
              and a Lean 4 model with a 32-pair race matrix. The core stops at approval and
              decision facts; pricing, payments, risk, panels, governance, handles, metrics, and
              the client consume them from outside.
            </>
          }
        />
      </TitleBlock>

      <MethodRefrain />

      <Section number="1" title="The problem" id="rgen-idea">
        <div className="prose">
          <p>
            The premise is a sentence from the CoEngineers and Ingenesist papers: “The
            fundamental problem is that the value of engineering is invisible.” Dan Robles and
            colleagues wrote in 2017 that there is little accounting of true engineering value
            because there are few tools that measure it. The papers propose a handshake: a claim
            states the work, definition, quantity, and criteria; a validation states quality and
            carries evidence; approval marks acceptable completion. The pair is a K-Asset.
          </p>
          <p>
            Software splits that handshake across a tracker, a credential registry, a bank,
            email, and a folder. Each boundary loses the link between the work and the judgement
            about it. The asset cannot say who validated it, under what credential, against which
            definition, or what happened when it was disputed.
          </p>
          <p>
            R-Gen puts the handshake on chain and keeps the record with the asset.
            Qualification, adjudication, and provenance are cells the claim participates in.
          </p>
        </div>
      </Section>

      <Section number="2" title="The core" id="rgen-core">
        <p className="lede">
          Seven deploy terms. Each primitive passes a removal test: if the remaining set can
          still express claim, validation, value proposition, and K-Asset, the removed primitive
          was not core.
        </p>
        <ul className="prose">
          <li>
            <strong>Root.</strong> <code>GenRoot</code>, an installer-gated client directory;
            wired at install, never resolved at runtime.
          </li>
          <li>
            <strong>Identity.</strong> Per-address identity cell; first-writer-wins directory.
          </li>
          <li>
            <strong>Credentials.</strong> Genesis <code>Issuer</code>, per-credential cell,
            issued registry; proof of subject, scope, and active state.
          </li>
          <li>
            <strong>Claim.</strong> Per-claim cell: work element, selection criteria, quantity
            and definition, clock, comments, value-proposition reference. Validation creates the
            K-Asset; the K-Asset library is private.
          </li>
          <li>
            <strong>Value proposition.</strong> Per-proposition cell: propose, validate, comment,
            withdraw, dispute.
          </li>
          <li>
            <strong>Oracle.</strong> Per-case cell: one credential-proved adjudicator, evidence,
            decision, execution through the subject’s private <code>applyDecision</code>{' '}
            capability.
          </li>
          <li>
            <strong>Provenance.</strong> Per-asset anchors, comments, verify.
          </li>
        </ul>
        <div className="prose">
          <p>
            Sixteen catalogue components, ten state cells, acyclic. The core mints and transfers
            nothing and has no R-Cash or ERTP dependency. KAT, pricing, payments, risk, panels,
            governance, handles, metrics, and the web client are extensions that consume approval
            and decision facts; the core never calls them.
          </p>
        </div>
      </Section>

      <Section number="3" title="Paper to code" id="rgen-paper-to-code">
        <div className="prose">
          <p>
            The mapping is literal. Each primitive page carries the paper quote and page, the
            Rholang arm, the Lean theorem, and the suite or corpus row that exercises it. The
            row-by-row matrix is <code>docs/src/reference/paper-to-code.md</code>; code headers
            repeat the citation keys and page numbers. A reader can start at a sentence in
            Robles &amp; Layton and end at a theorem name.
          </p>
          <p>
            The Pareto ledger is a design test, not a claim about the papers. “Pareto” does not
            appear in the seven papers; the word is the author’s framing. The ledger labels each
            primitive paper-derived, paper-adjacent, a user decision, or engineering
            infrastructure, and records what was removed and why.
          </p>
          <p>
            The papers are third-party copyrighted reference material, indexed at{' '}
            <code>docs/papers/README.md</code> and not covered by the AGPL. The contracts, model,
            and book are original work. The attribution is specific: Dan Robles’ CoEngineers and
            Ingenesist Project. The repository is <code>r-gen</code>; the Lean namespace is{' '}
            <code>RGen</code> because Lean identifiers cannot contain a hyphen.
          </p>
        </div>
      </Section>

      <Section number="4" title="Concurrency and proof" id="rgen-concurrency">
        <div className="prose">
          <p>
            Every entity is a factory-created linear cell with one writer. A mutating arm
            consumes the state first, evaluates every guard on the post-consume state, and
            re-posts exactly once on every path. A second operation on the same entity sees the
            new state and refuses. Two operations cannot both observe the same pre-state and both
            commit.
          </p>
          <p>
            Independent entities share no mutable cell. Identity creation and credential issuance
            are the only serialization points, neither on the claim/validation hot path. Oracle
            cases receive the subject’s private <code>applyDecision</code> capability in
            closure, so a decision cannot be applied to another K-Asset.
          </p>
          <p>
            The Lean model states the general result:{' '}
            <code>RGen.core_races_not_representable</code> says no two events on one cell in any
            run share an expected generation; <code>RGen.core_arm_authority</code> says every
            arm’s decision factors through its consumed cell.
          </p>
        </div>
        <ComparisonTable
          variant="contrast"
          caption="Table 1. The 32-pair race matrix."
          subtitle="Every proved arm pair, its class, and the boundary of the claim."
          columns={RACE_COLUMNS}
          rows={RACE_ROWS}
          note="Every pair names a Lean theorem in spec/flows/races.yaml; tools/check_race_matrix.py checks the class vocabulary and declaration existence."
        />
      </Section>

      <Section number="5" title="Evidence" id="rgen-evidence">
        <div className="prose">
          <p>
            On 4 November 2026, against Rholo node <code>e2d073d</code>, the seven-term core
            installed on a fresh isolated devnet. Ten behavioural suites passed: identity,
            credentials, claim, K-Asset, value, oracle, provenance, integration, the core
            vertical slice, and the race regression. They printed 291 <code>ok</code>{' '}
            assertions.
          </p>
          <p>
            The Lean project builds 36 files without Mathlib. The audit covers 131 public
            theorems and reports only <code>propext</code> and <code>Quot.sound</code>; no{' '}
            <code>Classical.choice</code> appears in the audited set, and there is no{' '}
            <code>sorry</code>, <code>admit</code>, <code>native_decide</code>, or declared
            axiom. The flow manifest maps 66 arms: 35 proved-model, 0 proved-conformance, 31
            owed. The model emits 21 corpus rows; 35 mutating arms are tied to a consumed cell.
            The adversarial review records four P0 defects in the legacy 12-term prototype and
            their removal.
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
            <strong>Maturity.</strong> Devnet-only, unaudited; no real value. There is no token
            sale, pricing, transfer, or ERTP in the core.
          </li>
          <li>
            <strong>Extensions absent.</strong> Receipt/KAT, payments/R-Cash, risk/SPE, panels,
            governance, handles, metrics, and the web client are not implemented in this tree.
          </li>
          <li>
            <strong>Proof boundary.</strong> Lean proves the model, not a mechanized Rholang
            refinement. The arm map is hand-transcribed; <code>proved-conformance</code> is zero
            and 31 arms are owed.
          </li>
          <li>
            <strong>Concurrency wording.</strong> “Maximal concurrency” means no shared mutable
            cell across independent entities and one writer per entity. It is not an absolute
            optimality theorem. Identity creation and credential issuance serialize deliberately.
          </li>
          <li>
            <strong>Oracle.</strong> Selection is deterministic and named by the parties; it is
            not a random beacon.
          </li>
          <li>
            <strong>Attribution.</strong> The seven bundled papers are third-party copyrighted
            works, not AGPL. The repository is AGPL-3.0-only.
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
