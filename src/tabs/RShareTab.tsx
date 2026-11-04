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
        descriptor="Booking primitives on Rholo"
        title="R-Share"
        subtitle="On-chain booking and rental primitives for Rholo, settled through R-Cash: a listing owns units, a unit owns slots, and a booking holds capacity over an interval with escrow, cancellation, deposits, disputes, and tickets."
        metadata={[
          {
            label: 'Role',
            value:
              'Contracts, Rust SDK and CLI, WASM wallet, React reference client, Lean 4 model; sole author',
          },
          {
            label: 'Period',
            value: '2026; created 3 November; suites and client campaign 3–4 November',
          },
          {
            label: 'Status',
            value:
              'Devnet-only, unaudited; pinned to R-Cash v0.5 (49b441d); no real value; 16/16 suites; two claim classes remain design.',
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
        <WhatWhy
          what={
            <>
              Booking and rental primitives: a provider publishes a listing, the listing owns
              units, each unit owns slots, and a booking acquires capacity over an interval.
              Escrow, cancellation, deposits, disputes, and tickets are shared. Thirteen deploy
              terms; one allocation cell per listing; one booking cell and one bond per booking;
              R-Cash accounts and purses for settlement.
            </>
          }
          why={
            <>
              A rental is a multi-party state machine with money in the middle. A database and a
              payment integration can run one business; they do not give two parties a shared
              ordering, atomic multi-slot acquisition, verifiable refund arithmetic, or escrow
              neither controls alone. Put the bookable state and the money on one chain and the
              application becomes a client, not a backend. The chain is the backend.
            </>
          }
          combination={
            <>
              A small primitive set — capacity, interval, escrow, policy — with Rholo’s object
              capabilities, R-Cash settlement, and a per-listing allocator whose atomic
              acquisition is proved in Lean. The same path carries holiday letting, events,
              ticketing, bike share, car rental, and robotics-as-a-service; the product and the
              off-chain facts stay in the fork.
            </>
          }
        />
      </TitleBlock>

      <MethodRefrain />

      <Section number="1" title="The model" id="rshare-model">
        <div className="prose">
          <p>
            A rental is capacity over an interval. A provider publishes a listing. The listing
            owns units. Each unit owns slots, and a slot is a record in the listing’s allocation
            cell, not a separate contract. A booking asks for one or more slots; if every
            requested slot is free or expired-held, the allocator writes them all in one commit
            and creates the booking.
          </p>
          <p>
            That shape carries the lifecycle: terms, hold, escrow, confirm, check-in, check-out,
            settle. Every booking has its own state cell, ticket projection, operation map, and
            Bond holding the escrow purse. Cancellation, no-show, deposit claims, disputes, and
            arbitration are arms on the shared path. Settlement is through R-Cash accounts and
            purses.
          </p>
          <p>
            The model is small on purpose. Capacity, interval, escrow, and policy are the
            primitives. Calendar, identity provider, support desk, insurance, telemetry, and
            regulation are the fork’s product.
          </p>
        </div>
      </Section>

      <Section number="2" title="The ladder" id="rshare-ladder">
        <div className="prose">
          <p>
            The ladder is the design argument. Each rung adds a real-world constraint; the
            question is whether listing → unit → slot → booking still fits. A new rung changes{' '}
            <code>kind</code>, <code>attrs</code>, slot IDs, and at most one pure{' '}
            <code>Remedy</code> branch. It does not change the booking machine, escrow,
            settlement buckets, or authority model. If it needs a new booking arm, the primitive
            is wrong, or the requirement is a new primitive.
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
            Holiday letting is the reference path: a two-room house, three nights, one deposit,
            one cancellation policy, followed from terms to settlement. Robotics-as-a-service is
            the north star: machine windows, operators, certification, session evidence, and
            SLAs. The shared booking and escrow path is implemented; the RaaS-specific evidence
            and safety pieces are design.
          </p>
        </div>
      </Section>

      <Section number="3" title="Concurrency and the allocator" id="rshare-concurrency">
        <div className="prose">
          <p>
            The doctrine is one sentence: make the tuple space do the arbitration, not a lock or
            a global cell.
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
            writes every requested slot in one take/commit. There is no reachable partial state.
          </li>
          <li>
            <strong>Peek is a hint, never a lock.</strong> A stale peek causes a clean refusal,
            not a double booking.
          </li>
          <li>
            <strong><code>select</code> is forbidden.</strong> The node desugars{' '}
            <code>PChoice</code> into parallel receives, so it is not committed choice.
            Exclusivity comes from consuming one datum.
          </li>
          <li>
            <strong>No global counters.</strong> Booking, listing, unit, and slot IDs are client-
            or provider-supplied and uniqueness-checked.
          </li>
          <li>
            <strong>Per-listing serialization is accepted.</strong> Different listings never share
            a cell; different slots of one listing serialize. That is the price of atomic
            multi-slot acquisition, and the repository names it as the hotspot.
          </li>
        </ul>
        <div className="prose">
          <p>
            Lean proves the cornerstone: <code>RShare.Model.Allocator.acquire_no_double_owner</code>.
            After a successful acquire, every active reservation containing a requested key
            belongs to the acquiring booking. <code>acquire_none_or_reservation</code> and{' '}
            <code>acquire_is_one_reservation</code> state the shape: refuse and leave state
            unchanged, or append exactly one reservation. The proof is over the model, not a
            Rholang refinement.
          </p>
        </div>
      </Section>

      <Section number="4" title="The client, and the fork" id="rshare-client">
        <div className="prose">
          <p>
            The repository is a community case study, not a product manual. It ships the
            contracts, a Rust SDK, a CLI, a WASM wallet, and a React reference client. There is no
            backend server, indexer, or off-chain database. The client uses a curated catalogue
            and share links; it has no provider inbox, search, notifications, or fiat ramp. The
            chain is the backend.
          </p>
          <p>
            The client campaign covers the same surface from three directions. The CLI journey
            covers quote, book, held-slot refusal, replay, wrong-terms refusal, manual accept and
            cancel, one-signature refusal, and two-signature pause and resume. Browser journeys
            cover guest, provider, and admin-multisig. Conservation runs seven real settlement
            scenarios over a closed set of guest, provider, platform, and Bond balances, with a
            negative control that must detect untracked escrow.
          </p>
          <p>
            Fork it. Keep the AGPL notices, copy contracts, harness, tools, crates, and web,
            change <code>kind</code>, <code>attrs</code>, slot IDs, terms, and at most one pure{' '}
            <code>Remedy</code> branch. The off-chain parts — identity, calendar, telemetry,
            support, insurance, regulation — are yours. R-Share is the settlement core; R-Cash is
            the money; neither is a marketplace.
          </p>
        </div>
      </Section>

      <Section number="5" title="Evidence" id="rshare-evidence">
        <div className="prose">
          <p>
            On 3 November 2026, a fresh devnet built from Rholo <code>e2d073d</code> with R-Cash{' '}
            <code>49b441d</code> recorded 16 passing suites: root, payments, lifecycle, claims,
            pricing, guestbook, booking, pause, allocator, admin, events, generality, provider,
            listing, behaviour, and conservation. Claim coverage is 20 of 30 cells; the four
            claim classes run across five kinds.
          </p>
          <p>
            The allocator suite proves atomic multi-slot acquisition, token-only confirm and
            release, pause gates, expiry takeover, and the absence of a slot-capability leak.
            Conservation covers seven real settlement scenarios with a closed balance set and a
            negative control. The Lean model records 37 axiom audits, 21 vectors, 33 rules, 29
            arms, and 13 core arms proved-model.
          </p>
        </div>
        <EvidenceTable
          rows={rshareEvidence}
          caption="R-Share evidence"
          note="Sources: verification record, formal model, and status chapter, as of 3–4 November 2026. Counts drift; the linked artifact is authoritative. The 37 axiom audits are an internal Lean check, not a security audit."
        />
      </Section>

      <Section number="6" title="Limits" id="rshare-limits">
        <ul className="prose">
          <li>
            <strong>Maturity.</strong> Devnet-only, unaudited, pinned to R-Cash v0.5 at{' '}
            <code>49b441d</code>; no real value.
          </li>
          <li>
            <strong>Allocation.</strong> Per-listing serialization is the accepted hotspot.
            Different listings do not share a cell; different slots of one listing serialize.
          </li>
          <li>
            <strong>Privacy.</strong> Bookings, addresses, dates, and prices are on-chain. There
            is no confidential booking and no KYC, legal identity, or reputation in the core.
          </li>
          <li>
            <strong>Unrun breadth.</strong> <code>providerDeliveryBreach</code> and{' '}
            <code>partialPerformance</code> have no code. Fleet-scale allocation, station
            capacity, provider-bond legs, obligation objects, generalized claims, and evidence
            enforcement are not run.
          </li>
          <li>
            <strong>Out of scope.</strong> Backend, indexer, off-chain database, cross-shard
            settlement, telemetry, remote stop, machine safety, and a full governor or timelock.
          </li>
          <li>
            <strong>Verification boundary.</strong> The 37 axiom audits are an internal Lean
            audit, not a security audit. Lean is model-level, not a Rholang refinement.
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
