import { ComparisonTable, type ComparisonRow } from '../components/ComparisonTable'
import { EvidenceTable } from '../components/EvidenceTable'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { WhatWhy } from '../components/WhatWhy'
import { rsure, rsureEvidence } from '../data/projects'
import { pathForTab } from '../data/site'

const PARTS_COLUMNS = [
  { label: 'Part' },
  { label: 'What it holds' },
  { label: 'What it does' },
]

const PARTS_ROWS: ComparisonRow[] = [
  {
    key: 'syndicate',
    header: 'Syndicate',
    cells: [
      'Capital, risk appetite, and a contract-owned claims purse.',
      'Backs a share of risks and pays claims pro rata.',
    ],
  },
  {
    key: 'broker',
    header: 'Broker',
    cells: [
      'Registration, a licence hash, and a commission cap.',
      'Places a risk for a customer and opens the slip.',
    ],
  },
  {
    key: 'slip',
    header: 'Slip',
    cells: [
      'The risk, terms, shares, and premium.',
      'Offers the risk to syndicates; subscriptions sum to 100%; the first line is the lead.',
    ],
  },
  {
    key: 'policy',
    header: 'Policy',
    cells: [
      'The bound slip, the premium, and an aggregate limit.',
      'Collects the premium, splits it between broker, fund, and syndicates, and caps what it can pay.',
    ],
  },
  {
    key: 'claim',
    header: 'Claim',
    cells: [
      'Notification, classification, assessment, and agreement.',
      'Each syndicate pays its share once; a disputed engineering claim can go to an R-Gen oracle.',
    ],
  },
]

export function RSureTab() {
  return (
    <>
      <TitleBlock
        descriptor="Insurance markets on Rholo"
        title="R-Sure"
        subtitle="R-Sure is a set of contracts for a Lloyd’s-style insurance market on Rholo: syndicates put up capital, a broker places a risk, the policy collects the premium, and claims are assessed and paid once."
        metadata={[
          {
            label: 'Role',
            value:
              'Contracts, Lean 4 model, audit, Rust and web clients; sole author',
          },
          {
            label: 'Period',
            value:
              '2026; created 5 November; contracts, model, and campaign dated 5 November',
          },
          {
            label: 'Status',
            value:
              'Devnet-only, unaudited; not an insurer and no regulatory approval; no real funds; 17 contracts; 37-run campaign.',
          },
          {
            label: 'Paper basis',
            value:
              'Daniel R. Robles, NAIC/CIPR (2016), “Insurance: The Highest and Best Use Case for Blockchain Technology”',
          },
          {
            label: 'Repository',
            value: (
              <a href={rsure.repo} target="_blank" rel="noopener noreferrer">
                github.com/rhovision-org/r-sure
              </a>
            ),
          },
          {
            label: 'Documentation',
            value: (
              <a href={rsure.docs} target="_blank" rel="noopener noreferrer">
                docs/index.md
              </a>
            ),
          },
          {
            label: 'Built on',
            value: (
              <>
                <a href={pathForTab('rholo')}>Rholo</a>; settlement through{' '}
                <a href={pathForTab('rcash')}>R-Cash</a>; evidence from{' '}
                <a href={pathForTab('rgen')}>R-Gen</a>
              </>
            ),
          },
        ]}
      >
        <p className="lede">
          R-Sure is the insurance layer of the Rholo stack. It models a Lloyd’s subscription
          market: backers form syndicates, a broker places a risk for a customer, several
          syndicates subscribe to a share, the policy collects the premium, and a claim is
          reported, assessed, agreed, and paid once by each syndicate. The design comes from
          Dan Robles’ 2016 NAIC/CIPR paper, which argues that pooling risk on a shared ledger
          can reduce the cost of capital. R-Sure tests whether a set of Rholang contracts can
          express that market: premiums and claims settle through R-Cash, and engineering
          evidence comes from R-Gen.
        </p>
        <WhatWhy
          what={
            <>
              A set of contracts for an insurance market: syndicates, brokers, placing slips,
              policies, claims, and a central fund. A syndicate is capital and a claims purse.
              A broker opens slips. A slip offers a risk to several syndicates, whose shares
              sum to 100%. A policy is the bound slip, with premium distribution and an
              aggregate limit. A claim is notified, assessed, agreed, and settled once by each
              subscribing syndicate.
            </>
          }
          why={
            <>
              Insurance moves the cost of an uncertain loss from one party to a pool that
              agrees to share it. Lloyd’s does that with syndicates, brokers, and a central
              fund; the complexity is in the paperwork and the coordination. On-chain contracts
              can make the shares, premium split, claim decision, and payout atomic and
              auditable. R-Sure tests that model, and connects it to the rest of the stack:
              R-Cash for money, R-Gen for engineering evidence and adjudication.
            </>
          }
          combination={
            <>
              Syndicate capital, broker placement, slip subscriptions, policy premium, claim
              assessment, and a governed central fund, settled through R-Cash and evidenced by
              R-Gen.
            </>
          }
        />
      </TitleBlock>

      <MethodRefrain />

      <Section number="1" title="What R-Sure does" id="rsure-idea">
        <div className="prose">
          <p>
            An insurance market needs capital, a way to place a risk, a contract, and a claims
            process. R-Sure models the Lloyd’s version of that market in five parts.
          </p>
        </div>
        <ComparisonTable
          variant="contrast"
          caption="Table 1. The five parts of the market."
          subtitle="What each part holds, and what it does."
          columns={PARTS_COLUMNS}
          rows={PARTS_ROWS}
        />
        <div className="prose">
          <p>
            A syndicate contributes capital and reserves capacity. A broker registers and opens
            a slip. Syndicates quote and subscribe. The customer accepts and funds the premium.
            The policy binds. A claim is notified, classified, assessed, agreed, and settled.
            The central fund covers a shortfall under governed, capped rules. Those five parts
            are the market; the rest of the page explains why it is built this way and what the
            contracts guarantee.
          </p>
        </div>
      </Section>

      <Section number="2" title="Why Lloyd’s" id="rsure-lloyds">
        <div className="prose">
          <p>
            Lloyd’s is a marketplace, not an insurance company. Syndicates supply capital;
            brokers represent customers; a slip is the placing document; the lead syndicate
            sets the terms and followers subscribe; a policy binds it; claims are assessed and
            paid by each syndicate’s share.
          </p>
          <p>
            That structure spreads a large risk across many backers and lets specialist capital
            take only the risks it understands. Its cost is coordination: the same risk, shares,
            premium, and claim record must be reconciled across firms. A shared ledger can
            remove some of that reconciliation.
          </p>
          <p>
            The design comes from Dan Robles’ 2016 NAIC/CIPR paper, which argues that the point
            of a blockchain is to reduce the cost of capital by decentralising risk, and that
            insurance is where that happens. The paper also ties insurance to engineering: the
            engineering stamp is evidence of a project’s value, and insurability depends on
            engineering sign-off. R-Sure takes that as its brief. A risk submission records the
            three insurability questions — what is exposed, how likely is the loss, and what
            would it cost — and a claim can carry <a href={pathForTab('rgen')}>R-Gen</a> claim,
            validation, K-Asset, and provenance references. A disputed claim can open an R-Gen
            oracle case for a credentialed adjudicator.
          </p>
        </div>
      </Section>

      <Section number="3" title="The core" id="rsure-core">
        <div className="prose">
          <p>
            Seventeen contracts cover the market. A syndicate contributes capital and reserves
            capacity; a broker registers and opens a slip; syndicates quote and subscribe; the
            customer accepts and funds the premium; the policy binds; a claim is notified,
            classified, assessed, agreed, and settled. Each line pays once.
          </p>
          <p>
            Subscriptions sum to 10,000 basis points, and the first line is the lead. The policy
            splits the premium between the broker, the central fund, and the syndicates, and
            applies a per-claim limit, the remaining aggregate, and the deductible. A claim has
            one terminal state; a line cannot pay twice. The central fund is a levy-funded,
            capped, one-shot backstop that requires 2-of-3 signatures; it is not an automatic
            payer.
          </p>
          <p>
            The contracts are grouped by object: the root and books; syndicates and lines;
            brokers; risks; slips; policies; claims; distributions; and the fund. Each object
            owns its state and exposes a capability rather than an admin API. The reusable
            pieces are Distribution, Line, and Policy, which{' '}
            <a href={pathForTab('rshare')}>R-Share</a> can use for rentals and staged payments.
          </p>
        </div>
      </Section>

      <Section number="4" title="Concurrency and proof" id="rsure-concurrency">
        <div className="prose">
          <p>
            A mutating operation consumes the object’s state, checks the operation against what
            it consumed, and posts the new state once. A second operation sees the new state and
            refuses. That is what makes a subscription sum to 100%, a policy bind once, a claim
            settle once, and a line pay once. Capabilities are held in contract closures; a
            caller receives a specific authority, not an admin key.
          </p>
          <p>
            Lean proves the insurance economics over a shallow state model: capacity,
            subscription, premium allocation, payable bounds, settlement conservation,
            exactly-once guards, terminal claim states, and the central fund. In plain terms,
            it proves the arithmetic and the state machine, not that the deployed contracts
            implement them, that R-Cash or R-Gen behave as assumed, or that the economics are
            solvent under real conditions.
          </p>
        </div>
      </Section>

      <Section number="5" title="Evidence" id="rsure-evidence">
        <div className="prose">
          <p>
            On 5 November 2026, the devnet install completed all 17 contracts and the node
            proposed blocks. The campaign records 37 runs, 375 assertions, and 0 assertion
            failures. The registered test set has 39 suites: 36 pass and 3 process gates are not
            run. Coverage is 120 of 145 public arms (82.8%) and 133 of 162 registered arms
            (82.1%).
          </p>
          <p>
            The Lean model has 261 theorems, 33 vectors, 51 flow rules, and 11 proved-model core
            arms across 14 critical primitives. The audit records 25 findings: 22 fixed and 3
            accepted boundaries, with 35 hazards and 25 improvements; 30 of 30 concurrency
            reviews and 42 of 42 composition interfaces are complete. The React/Vite client and
            the Rust workspace tests pass, and the Playwright journey covers placement through
            claim settlement.
          </p>
        </div>
        <EvidenceTable
          rows={rsureEvidence}
          caption="R-Sure evidence"
          note="Sources: project status, formal model, audit report, and verification record, as of 5 November 2026. Counts drift; the linked artifact is authoritative. The audit is internal and is not an independent audit."
        />
      </Section>

      <Section number="6" title="Limits" id="rsure-limits">
        <ul className="prose">
          <li>
            <strong>Maturity.</strong> Devnet-only; not an insurer and no regulatory approval;
            no real funds.
          </li>
          <li>
            <strong>Audit.</strong> The audit is an internal desk, tabletop, and install review,
            not an independent audit. No primitive is audited or production-safe.
          </li>
          <li>
            <strong>Accepted boundaries.</strong> <code>Line.pay</code> trusts the policy’s{' '}
            <code>claimId</code>; the risk tri-test checks that the three answers are present,
            not that they are correct; external R-Cash and R-Gen reply shapes are assumed to
            match their published interfaces.
          </li>
          <li>
            <strong>Process gates.</strong> Three process gates — install pipeline, deep codec,
            and no-manual-propose — are registered <code>not_run</code> rather than claimed as
            passing suites.
          </li>
          <li>
            <strong>Settlement.</strong> The R-Cash installer stops at its pool step with a
            parse-depth error. R-Sure does not depend on that step.
          </li>
          <li>
            <strong>Case studies.</strong> The engineering-cover and share-damage-waiver
            mappings are planned, not run as behavioural suites.
          </li>
          <li>
            <strong>Out of scope.</strong> Reinsurance, coverholders, endorsements, renewals,
            subrogation, instalments, and pro-rata cancellation.
          </li>
          <li>
            <strong>Verification boundary.</strong> Lean is model-level, not a Rholang
            refinement. It does not prove that the contracts implement the model, that R-Cash
            or R-Gen behave as assumed, or that the economics are solvent.
          </li>
        </ul>
      </Section>

      <Section number="7" title="Links" id="rsure-links">
        <ul className="link-list">
          <li>
            <a href={rsure.repo} target="_blank" rel="noopener noreferrer">Repository</a>
          </li>
          <li>
            <a href={rsure.docs} target="_blank" rel="noopener noreferrer">Book</a>
          </li>
          <li>
            <a href={rsure.status} target="_blank" rel="noopener noreferrer">Project status</a>
          </li>
          <li>
            <a href={rsure.insuranceBasics} target="_blank" rel="noopener noreferrer">Insurance basics</a>
          </li>
          <li>
            <a href={rsure.lloyds} target="_blank" rel="noopener noreferrer">Lloyd’s primer</a>
          </li>
          <li>
            <a href={rsure.designPhilosophy} target="_blank" rel="noopener noreferrer">Design philosophy</a>
          </li>
          <li>
            <a href={rsure.engineeringCover} target="_blank" rel="noopener noreferrer">Engineering cover</a>
          </li>
          <li>
            <a href={rsure.damageWaiver} target="_blank" rel="noopener noreferrer">Share damage waiver</a>
          </li>
          <li>
            <a href={rsure.formalModel} target="_blank" rel="noopener noreferrer">Formal model</a>
          </li>
          <li>
            <a href={rsure.verification} target="_blank" rel="noopener noreferrer">Verification</a>
          </li>
          <li>
            <a href={rsure.contractMap} target="_blank" rel="noopener noreferrer">Contract map</a>
          </li>
          <li>
            <a href={rsure.audit} target="_blank" rel="noopener noreferrer">Audit report</a>
          </li>
          <li>
            <a href={rsure.lean} target="_blank" rel="noopener noreferrer">Lean model</a>
          </li>
          <li>
            <a href={pathForTab('rcash')}>R-Cash record</a>
          </li>
          <li>
            <a href={pathForTab('rgen')}>R-Gen record</a>
          </li>
          <li>
            <a href={pathForTab('rshare')}>R-Share record</a>
          </li>
          <li>
            <a href={pathForTab('rholo')}>Rholo node record</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
