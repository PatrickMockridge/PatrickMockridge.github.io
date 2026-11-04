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
        subtitle="R-Gen records engineering work as a claim, its validation as quality, and the pair as a K-Asset that carries its credentials, disputes, and provenance."
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
          I invested in CoEngineers in 2017 and have been involved since. R-Gen continues
          that work: Dan Robles’ CoEngineers and Ingenesist model, built as Rholang
          contracts on Rholo and modelled in Lean 4. The core contains only the primitives
          that flow needs; pricing, payments, risk, panels, governance, and the client are
          extensions.
        </p>
        <WhatWhy
          what={
            <>
              A Rholang contract set for engineering claims. A claim records the work,
              definition, quantity, and criteria. A validation records quality and evidence
              from a credentialed validator. Approval creates a K-Asset that carries its
              qualifications, adjudication, and provenance.
            </>
          }
          why={
            <>
              A claim without validation is an assertion; validation without a claim has
              nothing to measure. When the work, the credential, the payment, and the
              evidence live in separate systems, the record of who validated what, against
              which definition, and what happened in a dispute is lost. R-Gen keeps those
              records with the asset.
            </>
          }
          combination={
            <>
              The core is the minimal primitive set for that flow. The implementation uses
              Rholo’s object capabilities (references that grant authority), one linear cell
              per entity (single-writer state), and a Lean 4 model with a proved race-freedom
              result. Pricing, payments, risk, panels, governance, and the client sit outside
              the core.
            </>
          }
        />
      </TitleBlock>

      <MethodRefrain />

      <Section number="1" title="Why engineering value is invisible" id="rgen-idea">
        <div className="prose">
          <p>
            The papers open with the problem: the value of engineering is invisible because
            almost nothing records the judgement about the work. Their model is a three-part
            record: a claim states the work, definition, quantity, and criteria; a validation
            states quality and carries evidence; approval marks acceptable completion. The
            pair is a K-Asset.
          </p>
          <p>
            A load calculation shows the problem. The calculation is the claim; a second
            engineer checks the assumptions and signs it, and their credential makes the
            signature count. Today the calculation, the check, and the fee sit in different
            systems, so months later the record cannot say who checked it, against which
            version, or what happened in a dispute.
          </p>
          <p>
            R-Gen records the claim, the validation, and the asset on one chain. The K-Asset
            carries its qualifications, adjudication, and provenance.
          </p>
        </div>
      </Section>

      <Section number="2" title="The core" id="rgen-core">
        <div className="prose">
          <p>
            Seven deploy terms cover the flow: root, identity, credentials, claim, value
            proposition, oracle, provenance. The claim holds the work, criteria, quantity
            and definition, comments, and value-proposition reference; validation creates the
            K-Asset; the oracle holds one credentialed adjudicator and executes through the
            subject’s private <code>applyDecision</code> capability.
          </p>
          <p>
            Pareto here is a removal test: take a primitive out; if the rest can still
            express a claim, a validation, and a K-Asset, it was an extension, not core. That
            leaves seven deploy terms, sixteen components, and ten state cells, with no
            cycles. The core mints and transfers nothing and has no R-Cash or ERTP
            dependency. Pricing, payments, risk scoring, panels, governance, handles,
            metrics, and the client consume the core’s facts; the core does not call them.
          </p>
        </div>
      </Section>

      <Section number="3" title="From paper to theorem" id="rgen-paper-to-code">
        <div className="prose">
          <p>
            Each primitive is traceable: paper quote and page, Rholang implementation, Lean
            theorem, and the suite or corpus row that exercises it. The matrix is{' '}
            <code>docs/src/reference/paper-to-code.md</code>; code headers carry the citation
            keys and page numbers.
          </p>
          <p>
            Each primitive in the Pareto ledger is labelled by source, and removed primitives
            are recorded. The seven papers are third-party copyrighted reference material,
            indexed at <code>docs/papers/README.md</code>, and not AGPL. The contracts, model,
            and book are original work. The attribution is Dan Robles’ CoEngineers and
            Ingenesist Project.
          </p>
        </div>
      </Section>

      <Section number="4" title="Concurrency and proof" id="rgen-concurrency">
        <div className="prose">
          <p>
            A linear cell is state that a contract consumes, checks, and puts back exactly
            once. A second operation sees the new state and refuses, so two operations cannot
            both read the same state and both commit. Independent entities do not share a
            mutable cell. Identity creation and credential issuance are the only serialization
            points. Oracle cases receive the subject’s private{' '}
            <code>applyDecision</code> capability, so a decision cannot be applied to another
            K-Asset.
          </p>
          <p>
            The Lean model proves the general result: no two events on one cell in any run
            expect the same version, and every arm’s decision comes from the cell it
            consumed. The proof is over the model, not the deployed Rholang.
          </p>
          <p>
            A 32-pair matrix records the outcome for every pair of arms. Nineteen pairs are
            exclusive: whichever runs first, the second refuses. Twelve are ordered: one
            direction refuses, the other is the legal serialized order. One is independent.
            Every pair names the theorem that covers it, and a check script verifies the
            mapping.
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
            integration, a core vertical slice, and the race regression, with 291 passing
            assertions.
          </p>
          <p>
            The Lean project builds 36 files without Mathlib. The audit covers 131 public
            theorems and reports only <code>propext</code> and <code>Quot.sound</code>;
            there is no <code>sorry</code>, <code>admit</code>, <code>native_decide</code>,
            or declared axiom. The flow manifest maps 66 arms: 35 proved-model, 0
            proved-conformance, 31 owed. Proved-model means the theorem is about the model.
            Proved-conformance would tie a deployed arm to an emitted row and a passing
            suite; none is claimed. The model emits 21 corpus rows. The adversarial review
            records four P0 defects in the legacy 12-term prototype and their removal.
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
            <strong>Concurrency.</strong> The claim is one writer per entity and no shared
            mutable cell across independent entities. Identity creation and credential
            issuance serialize deliberately.
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
