import { ComparisonTable, type ComparisonRow } from '../components/ComparisonTable'
import { EvidenceTable } from '../components/EvidenceTable'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { WhatWhy } from '../components/WhatWhy'
import { rshare, rshareEvidence } from '../data/projects'
import { pathForTab } from '../data/site'

const LADDER_COLUMNS = [
  { label: 'Rung' },
  { label: 'Unit and slot' },
  { label: 'What is exercised' },
]

const LADDER_ROWS: ComparisonRow[] = [
  {
    key: 'letting',
    header: 'Holiday letting',
    cells: [
      'Room / night',
      'Booking, lifecycle, claim and conservation suites pass; slot settlement exercised.',
    ],
  },
  {
    key: 'events',
    header: 'Events management',
    cells: [
      'Seat or section / show',
      'Claim suite and ticket arms pass; section capacity is mapping only.',
    ],
  },
  {
    key: 'ticketing',
    header: 'Ticketing',
    cells: ['Ticket tier / event', 'Redeem, transfer and close pass.'],
  },
  {
    key: 'bikes',
    header: 'Municipal bike share',
    cells: [
      'Bike / station-hour',
      <><code>unit_generality</code> passes for the kind; fleet and station capacity are mapping only.</>,
    ],
  },
  {
    key: 'cars',
    header: 'Car rental',
    cells: [
      'Vehicle / day or window',
      <><code>unit_generality</code> passes for the kind; inspection and insurance are mapping only.</>,
    ],
  },
  {
    key: 'raas',
    header: 'Robotics-as-a-service',
    cells: [
      'Machine / operating window',
      'Booking, allocator, pricing and claims pass; SLAs and evidence enforcement are design.',
    ],
  },
]

export function RShareTab() {
  return (
    <>
      <TitleBlock
        descriptor="Shared booking contracts on Rholo"
        title="R-Share"
        subtitle="Holiday letting, events, ticketing, bike share, car rental, and robotics-as-a-service all run the same flow: booking, escrow, settlement."
        metadata={[
          {
            label: 'Role',
            value:
              'Contracts, Rust SDK and CLI, WASM wallet, React reference client, Lean 4 model; sole author',
          },
          {
            label: 'Period',
            value:
              '2026; created 3 November; suites and client campaign 3–7 November; cover engine 6 November; hold deposit 7 November',
          },
          {
            label: 'Status',
            value:
              'Devnet-only; baseline audit and P0/P1 remediation recorded, not independently certified; pinned to R-Cash v0.5 (49b441d); no real value; 24/24 recorded suites; two claim classes remain design.',
          },
          {
            label: 'Repository',
            value: (
              <a href={rshare.repo} target="_blank" rel="noopener noreferrer">
                github.com/rhovision-org/r-share
              </a>
            ),
          },
          {
            label: 'Documentation',
            value: (
              <a href={rshare.docs} target="_blank" rel="noopener noreferrer">
                docs/index.md
              </a>
            ),
          },
          {
            label: 'Built on',
            value: (
              <>
                <a href={pathForTab('rholo')}>Rholo</a> node; settlement through{' '}
                <a href={pathForTab('rcash')}>R-Cash</a>
              </>
            ),
          },
        ]}
      >
        <p className="lede">
          Every rental market runs the same flow: booking, escrow, settlement. The unit
          changes — room, seat, bike, car, machine — and so do the interval and the policy;
          the flow does not. Web3 has barely entered this market because most projects build
          vertical products that do not scale, not shared concurrent components. R-Share is
          the shared component set: one contract path across holiday letting, events,
          ticketing, bike share, car rental, and robotics-as-a-service.
        </p>
        <WhatWhy
          what={
            <>
              A set of concurrent booking and rental contracts on Rholo, settled through
              R-Cash. A provider publishes a listing; the listing owns units; each unit owns
              slots. A slot is one bookable unit of time: a room-night, a seat at a show, an
              hour with a machine. A booking takes one or more slots over an interval and
              carries escrow, cancellation, deposit, dispute, and ticket state.
            </>
          }
          why={
            <>
              A rental is a multi-party state machine with money at stake. Every one of these
              businesses runs the same flow: booking, escrow, settlement. What differs is the
              unit, the interval, and the policy. Most rental software rebuilds that flow
              inside a proprietary database and a payment integration, so one operator
              controls the record and the funds, and every new vertical needs a new booking
              engine. R-Share is one booking and escrow path that every vertical reuses.
            </>
          }
          combination={
            <>
              Four primitives — capacity, interval, escrow, and policy — on Rholo’s object
              capabilities, with R-Cash settlement and a per-listing allocator. The same
              contract path carries holiday letting, events, ticketing, bike share, car
              rental, and robotics-as-a-service. The product and the off-chain facts stay in
              the fork.
            </>
          }
        />
      </TitleBlock>

      <MethodRefrain />

      <Section number="1" title="The same flow, six markets" id="rshare-model">
        <div className="prose">
          <p>
            Each business books capacity over an interval: a room for three nights, a seat at
            a show, a bike for an hour, a car for a day, a machine for an operating window.
            Each is paid before use and settled after. The unit, the interval, and the policy
            change; the flow is booking, escrow, settlement.
          </p>
          <p>
            Most rental software rebuilds that flow per vertical, inside one operator’s
            database with a payment integration beside it. That gives the operator the record
            and the funds, and makes every new vertical a new booking engine. Most on-chain
            projects have repeated the vertical product rather than the shared flow.
          </p>
          <p>
            R-Share is one set of concurrent booking, escrow, and settlement contracts that
            every vertical reuses by changing <code>kind</code>, <code>attrs</code>, slot IDs,
            terms, and at most one pure <code>Remedy</code> branch. No vertical adds a booking
            arm.
          </p>
          <p>
            The listing has two units and six nightly slots. A guest booking both rooms for
            the full stay asks for all six; the allocator writes all six in one commit or
            writes none. No partial hold is possible.
          </p>
          <p>
            The booking carries terms, hold, escrow, confirm, check-in, check-out, settle.
            Each booking has its own state cell, ticket projection, operation map, and a bond
            holding the escrow purse. Cancellation, no-show, deposit claims, disputes, and
            arbitration are on the same path, and settlement runs through R-Cash. The core is
            four primitives: capacity, interval, escrow, and policy. Calendar, identity,
            support, insurance, telemetry, and regulation are the fork’s product.
          </p>
        </div>
      </Section>

      <Section number="2" title="The ladder" id="rshare-ladder">
        <div className="prose">
          <p>
            Each rung adds a real-world constraint: whether listing to unit to slot to
            booking still fits. A new rung changes <code>kind</code>, <code>attrs</code>,
            slot IDs, and at most one pure <code>Remedy</code> branch. It does not change the
            booking machine, escrow, settlement buckets, or authority model. A rung that
            needs a new booking arm means the primitive set is wrong.
          </p>
        </div>
        <ComparisonTable
          variant="contrast"
          caption="Table 1. The use-case ladder."
          subtitle="One contract path, six rungs, and the status of each mapping."
          columns={LADDER_COLUMNS}
          rows={LADDER_ROWS}
          note="Holiday letting is the reference path; the other rungs are mappings over the same contract path. “Mapping only” is a status, not a claim of a dedicated suite."
        />
        <div className="prose">
          <p>
            Holiday letting is the reference path: a two-room house, three nights, one
            deposit, one cancellation policy, followed from terms to settlement.
            Robotics-as-a-service is the furthest case: machine windows, operators,
            certification, session evidence, and SLAs. The shared path is implemented; the
            RaaS-specific evidence and safety pieces are design. In the table, “pass” means a
            recorded suite or arm; “mapping only” means the use case rides the shared path
            without its own suite.
          </p>
        </div>
      </Section>

      <Section number="3" title="Concurrency and the allocator" id="rshare-concurrency">
        <div className="prose">
          <p>
            The allocator uses the tuple space — the shared pool of messages Rholang processes
            take from and put back — to arbitrate, with no lock and no global cell. A booking
            takes all requested slots in one commit or none.
          </p>
        </div>
        <ul className="prose">
          <li>
            <strong>One allocation cell per listing.</strong> Units and slots live in{' '}
            <code>listingState</code>; a slot is data, not a contract. No slot URI or live
            capability is published.
          </li>
          <li>
            <strong>One commit.</strong> <code>acquire</code> validates the whole request and
            writes every requested slot in one take/commit. No partial state is reachable.
          </li>
          <li>
            <strong>A peek is a hint, not a lock.</strong> A stale peek causes a clean
            refusal, not a double booking.
          </li>
          <li>
            <strong><code>select</code> is forbidden.</strong> The node turns{' '}
            <code>PChoice</code> into parallel receives, so it is not an atomic single-winner
            choice.
          </li>
          <li>
            <strong>No global counters.</strong> IDs are client- or provider-supplied and
            uniqueness-checked.
          </li>
          <li>
            <strong>Per-listing serialization is accepted.</strong> Different listings never
            share a cell; different slots of one listing serialize. This is the cost of
            atomic multi-slot acquisition and the known hotspot.
          </li>
        </ul>
        <div className="prose">
          <p>
            Lean proves that after a successful acquire, every active reservation containing
            a requested slot belongs to the acquiring booking. It also proves that an acquire
            either refuses and leaves the state unchanged, or appends exactly one reservation.
            The proof is over the model, not a Rholang refinement.
          </p>
        </div>
      </Section>

      <Section number="4" title="The client, and the fork" id="rshare-client">
        <div className="prose">
          <p>
            The client shows how to use the contracts; it is not the product. The repository
            ships the contracts, a Rust SDK, a CLI, a WASM wallet, and a React reference
            client. There is no backend server, indexer, or off-chain database. The chain is
            the backend.
          </p>
          <p>
            The campaign covers the same surface from three directions: a CLI journey (quote,
            book, held-slot refusal, replay, wrong-terms refusal, manual accept and cancel,
            one-signature refusal, two-signature pause and resume), browser journeys for
            guest, provider, and admin-multisig, and seven real settlement scenarios over a
            closed balance set with a negative control for untracked escrow.
          </p>
          <p>
            Fork it: keep the AGPL notices, copy the contracts, harness, tools, crates, and
            web app, and change the <code>kind</code>, the <code>attrs</code>, the slot IDs,
            the terms, and at most one pure <code>Remedy</code> branch. The off-chain parts
            are yours. R-Share is the settlement core; R-Cash is the payment rail; neither is
            a marketplace.
          </p>
          <p>
            The default install is the plain-escrow <code>safe</code> profile: 15 contracts.
            The experimental <code>cover-demo</code> profile adds cover terms, an offer, a
            pool, a policy, and a covered guest ledger: 20 contracts.{' '}
            <code>41_hold_deposit.rho</code> is in both profiles and gates a booking on a
            funded hold; it closes HZ-061.
          </p>
        </div>
      </Section>

      <Section number="5" title="Evidence" id="rshare-evidence">
        <div className="prose">
          <p>
            On 7 November 2026, the v2 campaign records 24 of 24 selected suites on a fresh
            devnet built from Rholo <code>e2d073d</code> with R-Cash <code>49b441d</code>. The
            suite tree defines 27; three are pending. Claim coverage is 20 of 30 cells; four
            claim classes run across five kinds.
          </p>
          <p>
            The allocator suite checks atomic multi-slot acquisition, token-gated confirm and
            release, pause gates, expiry takeover, and no slot-capability leak. Conservation
            covers eight settlement scenarios with a closed balance set and a negative
            control. Lean records 105 axiom audits, 21 vectors, 43 rules, 39 arms, and 13 core
            arms proved-model; these are internal checks, not a security audit.
          </p>
        </div>
        <EvidenceTable
          rows={rshareEvidence}
          caption="R-Share evidence"
          note="Sources: verification record, formal model, and status chapter, as of 7 November 2026. Counts drift; the linked artifact is authoritative. The 105 axiom audits are an internal Lean check, not a security audit."
        />
      </Section>

      <Section number="6" title="Limits" id="rshare-limits">
        <ul className="prose">
          <li>
            <strong>Maturity.</strong> Devnet-only; baseline audit and P0/P1 remediation
            recorded, not independently certified; pinned to R-Cash v0.5 at{' '}
            <code>49b441d</code>; no real value.
          </li>
          <li>
            <strong>Allocation.</strong> Per-listing serialization is the accepted hotspot:
            different listings do not share a cell; different slots of one listing serialize.
          </li>
          <li>
            <strong>Privacy.</strong> Bookings, addresses, dates, and prices are on-chain.
            There is no confidential booking and no KYC, legal identity, or reputation in the
            core.
          </li>
          <li>
            <strong>Not yet run.</strong> <code>providerDeliveryBreach</code> and{' '}
            <code>partialPerformance</code> have no code. Fleet-scale allocation, station
            capacity, provider-bond legs, obligation objects, generalized claims, and
            evidence enforcement are not run.
          </li>
          <li>
            <strong>Out of scope.</strong> Backend, indexer, off-chain database, cross-shard
            settlement, telemetry, remote stop, machine safety, and a full governor or
            timelock.
          </li>
          <li>
            <strong>Profiles.</strong> The default install is the plain-escrow{' '}
            <code>safe</code> profile. <code>cover-demo</code> is experimental and is not the
            default. Three of 27 defined suites are pending.
          </li>
          <li>
            <strong>Verification.</strong> The 105 axiom audits are an internal Lean check, not
            a security audit. Lean is model-level, not a Rholang refinement.
          </li>
          <li>
            <strong>Governance.</strong> No code of conduct, security-disclosure policy, or
            maintainer council is in place.
          </li>
        </ul>
      </Section>

      <Section number="7" title="Links" id="rshare-links">
        <ul className="link-list">
          <li>
            <a href={rshare.repo} target="_blank" rel="noopener noreferrer">Repository</a>
          </li>
          <li>
            <a href={rshare.docs} target="_blank" rel="noopener noreferrer">Book</a>
          </li>
          <li>
            <a href={rshare.summary} target="_blank" rel="noopener noreferrer">Book contents</a>
          </li>
          <li>
            <a href={rshare.northStar} target="_blank" rel="noopener noreferrer">North star</a>
          </li>
          <li>
            <a href={rshare.ladder} target="_blank" rel="noopener noreferrer">Use-case ladder</a>
          </li>
          <li>
            <a href={rshare.whyPrimitives} target="_blank" rel="noopener noreferrer">Why primitives</a>
          </li>
          <li>
            <a href={rshare.doctrine} target="_blank" rel="noopener noreferrer">Concurrency doctrine</a>
          </li>
          <li>
            <a href={rshare.contractMap} target="_blank" rel="noopener noreferrer">Contract map</a>
          </li>
          <li>
            <a href={rshare.audit} target="_blank" rel="noopener noreferrer">Audit report</a>
          </li>
          <li>
            <a href={rshare.hazards} target="_blank" rel="noopener noreferrer">Hazards register</a>
          </li>
          <li>
            <a href={rshare.profiles} target="_blank" rel="noopener noreferrer">Install profiles</a>
          </li>
          <li>
            <a href={rshare.verification} target="_blank" rel="noopener noreferrer">Verification record</a>
          </li>
          <li>
            <a href={rshare.formalModel} target="_blank" rel="noopener noreferrer">Formal model</a>
          </li>
          <li>
            <a href={rshare.status} target="_blank" rel="noopener noreferrer">Status and scope</a>
          </li>
          <li>
            <a href={rshare.holiday} target="_blank" rel="noopener noreferrer">Holiday-letting walkthrough</a>
          </li>
          <li>
            <a href={rshare.flows} target="_blank" rel="noopener noreferrer">Flow manifest</a>
          </li>
          <li>
            <a href={rshare.notices} target="_blank" rel="noopener noreferrer">Third-party notices</a>
          </li>
          <li>
            <a href={pathForTab('rcash')}>R-Cash record</a>
          </li>
          <li>
            <a href={pathForTab('rholo')}>Rholo node record</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
