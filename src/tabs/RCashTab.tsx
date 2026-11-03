import { ComparisonTable, type ComparisonRow } from '../components/ComparisonTable'
import { EvidenceTable } from '../components/EvidenceTable'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { WhatWhy } from '../components/WhatWhy'
import { rcash, rcashEvidence } from '../data/projects'
import { pathForTab } from '../data/site'

const CALCULUS_COLUMNS = [
  { label: 'Requirement' },
  { label: 'Rholo and Rholang supply' },
  { label: 'R-Cash uses it for' },
]

const CALCULUS_ROWS: ComparisonRow[] = [
  {
    key: 'authority',
    header: 'Authority',
    cells: [
      <>
        Unforgeable <code>new</code> names; bundles as read/write facets; forwarders and
        revocation; no ambient authority.
      </>,
      <>
        Owner-gated purses; per-domain governor authority; mint and settlement capabilities
        that cannot cross a deploy boundary.
      </>,
    ],
  },
  {
    key: 'exactly-once',
    header: 'Exactly-once payment',
    cells: [
      <>
        Linear-cell discipline; one-shot consumption; capability-provenance rules C1–C3.
      </>,
      <>Transfer claim and refund; one terminal state; no double claim.</>,
    ],
  },
  {
    key: 'collateral',
    header: 'Collateral and solvency',
    cells: [
      <>
        Compositional state; capability-scoped mint and burn; conservation checked over the
        model.
      </>,
      <>
        Issuer cluster deployed atomically; vault, liquidation, and surplus buffer composed
        per currency.
      </>,
    ],
  },
  {
    key: 'failure',
    header: 'Failure atomicity',
    cells: [
      <>Atomic deploys with rollback; concurrent composition.</>,
      <>A conversion or claim either completes or leaves no partial state.</>,
    ],
  },
  {
    key: 'concurrency',
    header: 'Concurrency and scale',
    cells: [
      <>
        Process composition; shard routing and cross-shard invocation; no global execution
        queue.
      </>,
      <>
        One currency or market per cluster; capacity added per market, not by serialising
        every payment.
      </>,
    ],
  },
  {
    key: 'verification',
    header: 'Verification',
    cells: [
      <>Lean transition relation and arithmetic; TLA+ models; tests.</>,
      <>
        S1–S12 invariants, five TLA+ models, and an axiom audit; traceability plus tests
        link model to code.
      </>,
    ],
  },
]

const OPERATIONS_COLUMNS = [
  { label: 'SaaS operation' },
  { label: 'Mechanism in R-Cash' },
  { label: 'Contract boundary' },
]

const OPERATIONS_ROWS: ComparisonRow[] = [
  {
    key: 'accounts',
    header: 'Accounts and entitlements',
    cells: [
      <>Per-key account; owner-gated purses; capability facets.</>,
      <>A tenant receives authority, not a row in an admin database.</>,
    ],
  },
  {
    key: 'idempotency',
    header: 'Idempotency',
    cells: [
      <>
        <code>opId</code> ledger; one terminal state per transfer.
      </>,
      <>A retry does not double-pay.</>,
    ],
  },
  {
    key: 'requests',
    header: 'Payment requests',
    cells: [
      <>TransferContract with memo, claim, expiry, refund.</>,
      <>A claim link is a capability, not a hosted checkout session.</>,
    ],
  },
  {
    key: 'recipient',
    header: 'Wallet-less recipient',
    cells: [
      <>Native-REV stipend in the same deploy as the transfer.</>,
      <>A recipient can claim without holding gas.</>,
    ],
  },
  {
    key: 'delegation',
    header: 'Delegation',
    cells: [
      <>Bundles, forwarders, and revocation.</>,
      <>An operator acts through a narrow facet, not the user’s key.</>,
    ],
  },
  {
    key: 'change',
    header: 'Change control',
    cells: [
      <>2-of-3 governor, per-domain nonces, 100-block timelock; immediate pause.</>,
      <>Parameter changes are delayed; safety stops are not.</>,
    ],
  },
  {
    key: 'isolation',
    header: 'Tenant isolation',
    cells: [
      <>Per-currency and per-market clusters on a shardable node.</>,
      <>One market’s congestion does not serialise every payment.</>,
    ],
  },
  {
    key: 'workflows',
    header: 'Long-running workflows',
    cells: [
      <>Claims with expiry and refund; contract state persists across deploys.</>,
      <>A payment can outlive a block without ambiguous state.</>,
    ],
  },
  {
    key: 'settlement',
    header: 'Settlement record',
    cells: [
      <>Registries, directories, and ListingViews.</>,
      <>On-chain balances and transfer states are queryable without an off-chain ledger.</>,
    ],
  },
]

export function RCashTab() {
  return (
    <>
      <TitleBlock
        descriptor="Payments on Rholo"
        title="R-Cash"
        subtitle="A permissionless multi-currency account and cross-border payments network on Rholo: hold, receive, convert, and pay in the user’s own currency, with liquidity providers rather than correspondent banks earning the spread."
        metadata={[
          {
            label: 'Role',
            value:
              'Contracts, clients, specification, Lean 4 and TLA+ models; sole contributor',
          },
          {
            label: 'Period',
            value: '2026; created 22 October; v0.5 dated 27 October; active to 3 November',
          },
          {
            label: 'Status',
            value:
              'v0.5 devnet-only prototype; no fiat custody or real value on chain; no external audit or mainnet; Rholo is pre-testnet.',
          },
          {
            label: 'Repository',
            value: (
              <a href={rcash.repo} target="_blank" rel="noopener noreferrer">
                github.com/rhovision-org/r-cash
              </a>
            ),
          },
          {
            label: 'Documentation',
            value: (
              <a href={rcash.book} target="_blank" rel="noopener noreferrer">
                book/src
              </a>
            ),
          },
          {
            label: 'Built on',
            value: (
              <>
                <a href={pathForTab('rholo')}>Rholo</a> node; Rholang contracts
              </>
            ),
          },
        ]}
      >
        <WhatWhy
          what={
            <>
              A permissionless account and payments rail: one non-custodial balance per
              currency, a direct mesh of FX pools between currencies, and a transfer contract
              with memo, claim, expiry, refund, and one terminal state. Liquidity providers earn
              the spread; there is no router and no mandatory USD hop.
            </>
          }
          why={
            <>
              Payments is not a trading venue. It is a high-volume, multi-tenant, long-running
              operation: many small transfers, many currencies, narrow delegated authority, and
              workflows that outlive a block. A single global ledger makes unrelated tenants
              contend for one state; an approval-based token puts a global{' '}
              <code>transferFrom</code> surface in front of every balance; concurrency becomes a
              scheduler problem. R-Cash places each currency, market, and transfer lane in its
              own contract and composes them by capability, on a node designed to shard
              horizontally. That is the architecture consumer payments needed and did not get.
            </>
          }
          combination={
            <>
              Rholo’s native capabilities on a shardable node, composed into per-currency issuer
              clusters, one FX pool per market, a transfer book with terminal states, and a
              2-of-3 governor with per-domain nonces and a timelock.
            </>
          }
        />
      </TitleBlock>

      <MethodRefrain />

      <Section number="1" title="The gap" id="rcash-gap">
        <div className="prose">
          <p>
            The first public-chain applications settled trading. A trading venue is one market,
            one order book, and a small number of large participants. A payments network is many
            currencies, many tenants, many small flows, and a regulatory boundary around every
            corridor. The design that suits a venue — one global state, one approval surface, one
            execution queue — becomes contention and coupling when applied to consumer payments.
            A design optimised for a venue is not a design for a utility.
          </p>
          <p>
            The gap is architectural. A consumer account needs authority that can be delegated
            narrowly and revoked. A transfer needs exactly-once semantics and a terminal state. A
            currency needs its own issuance and risk controls. A market needs independent
            liquidity. A corridor needs to fail without stopping the rest. Each is a boundary. A
            single-ledger, account-and-approval design cannot express those boundaries without
            rebuilding them off-chain.
          </p>
          <p>
            The primitives existed; the composition did not. R-Cash is the case study for the
            alternative: a permissionless multi-currency account and cross-border payments
            network on Rholo. The loop is hold, receive, convert, pay, get paid. Liquidity
            providers, not correspondent banks, earn the FX spread. The aim is narrower than a
            bank and larger than an app: a direct, non-custodial balance in the user’s own
            currency, and a settlement layer other businesses can depend on. Invoicing, payroll,
            logistics, accounting, and letters of credit live in other repositories. R-Cash is
            the base layer.
          </p>
        </div>
      </Section>

      <Section number="2" title="The product" id="rcash-product">
        <p className="lede">
          The product is an account with a payment rail attached, not a wallet with a swap
          button.
        </p>
        <ul className="prose">
          <li>
            <strong>Account.</strong> Each key controls its own ERTP purses. Transfers are
            owner-gated operations recorded against an <code>opId</code> ledger. There is no
            global <code>approve</code> or <code>transferFrom</code> surface.
          </li>
          <li>
            <strong>FX mesh.</strong> Every market is an FxPool with a LiquidityLock. Pairs are
            direct; there is no router and no mandatory USD hop. Pricing is oracle-anchored with
            spread and skew. Liquidity providers earn the spread.
          </li>
          <li>
            <strong>Payment.</strong> TransferBook and TransferContract measure the send, carry a
            memo and <code>opId</code>, and support claim, expiry, and refund, with exactly one
            terminal state. Claim links reach a recipient who does not yet have a wallet.
          </li>
          <li>
            <strong>Boundary.</strong> R-Cash is the on-chain payments core of a Wise-shaped
            product. Fiat ramps, cards, custody, and the surrounding business software are
            off-chain or in other repositories.
          </li>
        </ul>
        <div className="prose">
          <p>
            The account is the unit of authority; the pool is the unit of liquidity; the transfer
            is the unit of settlement. Those three boundaries let the system grow by addition
            rather than by re-architecture.
          </p>
        </div>
      </Section>

      <Section number="3" title="Architecture" id="rcash-architecture">
        <div className="prose">
          <p>Each cluster owns one kind of state and exposes capabilities rather than an admin API.</p>
        </div>
        <ul className="prose">
          <li>
            <strong>Per-currency issuer cluster.</strong> Stablecoin, CollateralCustody,
            RiskParameters, VaultBook, LiquidationEngine, SurplusBuffer, SavingsPool, and
            PegStabilityModule deploy in one signed transaction, because mint, burn, and
            settlement capabilities cannot cross a deploy boundary. Collateral is native REV: no
            wrapped token, bridge, or redemption queue.
          </li>
          <li>
            <strong>FX market cluster.</strong> FxPool and LiquidityLock per market:
            oracle-anchored pricing, LP tokens, spread and skew, and a one-shot seed lock.
          </li>
          <li>
            <strong>OracleHub.</strong> Three allowlisted reporters, median, freshness and spread
            checks, and a signed policy.
          </li>
          <li>
            <strong>Transfer lane.</strong> TransferBook and TransferContract: measured send,
            memo and <code>opId</code>, claim, expiry, refund, and one terminal state.
          </li>
          <li>
            <strong>Root and governance.</strong> Registries, directories, and ListingViews; a
            2-of-3 secp256k1 governor with per-domain nonces and a 100-block timelock. Emergency
            pause and market status are immediate.
          </li>
          <li>
            <strong>Platform fit.</strong> Deploys are atomic with rollback. The deploy term is
            capped at 65,536 bytes, parser depth at 128, and a deploy lives for 50 blocks; the
            contracts are sized to those limits.
          </li>
        </ul>
        <div className="prose">
          <p>
            Composition protocols P1–P6 specify how the clusters interact, so a failed
            conversion does not strand a transfer and a paused market does not pause a currency.
          </p>
        </div>
      </Section>

      <Section number="4" title="Why the calculus matters here" id="rcash-calculus">
        <div className="prose">
          <p>
            The calculus matters because the product needs its properties, not because formalism
            is a virtue in itself. Each row is a payment requirement first and a language
            property second.
          </p>
        </div>
        <ComparisonTable
          variant="contrast"
          caption="Table 1. Payment requirements, and what the calculus supplies."
          subtitle="The requirement, the Rholo or Rholang mechanism, and the R-Cash use."
          columns={CALCULUS_COLUMNS}
          rows={CALCULUS_ROWS}
          note="The calculus record and its formal checks are linked in Section 6."
        />
      </Section>

      <Section number="5" title="SaaS-shaped operations" id="rcash-operations">
        <div className="prose">
          <p>
            A payments product is operated like SaaS even when it is not sold like SaaS. The
            same list applies to any dapp that grows from a single action into an offering:
            accounts, idempotency, request objects, metadata, delegation, change control,
            isolation, and workflows that outlive a block. R-Cash makes those operations
            first-class contract boundaries.
          </p>
        </div>
        <ComparisonTable
          variant="contrast"
          caption="Table 2. The operations a payments product needs."
          subtitle="Contract boundaries that make SaaS-shaped operations native rather than reconstructed off-chain."
          columns={OPERATIONS_COLUMNS}
          rows={OPERATIONS_ROWS}
        />
        <div className="prose">
          <p>
            None of these is payments-specific. They are the operations a dapp needs when it
            grows from a single action into an offering; R-Cash is an early worked example.
          </p>
        </div>
      </Section>

      <Section number="6" title="Evidence and provenance" id="rcash-evidence">
        <div className="prose">
          <p>
            R-Cash is built on Rholo and written in Rholang. The code through{' '}
            <code>d5d613b</code> was Apache-2.0; the repository is now AGPL-3.0-only, and the
            earlier grants are not revoked. One contributor wrote the contracts, tooling,
            specification, and models.
          </p>
          <p>
            The specification is 929 lines: v0.5, dated 27 October 2026, with 221 requirement
            rows, 206 MUST rows, and 19 areas. The component catalogue holds 40 components. The
            calculus record defines 8 laws (L1–L8), 7 non-laws (N1–N7), 18 safety rules (S1–S18),
            8 well-formedness rules (WF1–WF8), 6 composition protocols (P1–P6), and 3
            capability-provenance rules (C1–C3).
          </p>
          <p>
            The formal chain has three links. Lean 4 project <code>rholphin</code>, without
            Mathlib, models the transition relation, arithmetic, and linear-cell discipline; it
            proves S1–S12 and rejects six linear-cell defect shapes (D1–D6). Its axiom audit
            rejects <code>sorry</code>, <code>admit</code>, <code>native_decide</code>, and
            project-local axioms. Five TLA+ models — CellLinearity, TransferExclusivity,
            PoolConservation, CapabilityProvenance, and AdminNonce — are checked with TLC over
            deliberately small bounded domains. <code>tools/check_captures.py</code> rejects
            capabilities in replies, stored maps, bundles, and attestations.
          </p>
        </div>
        <EvidenceTable
          rows={rcashEvidence}
          caption="R-Cash evidence"
          note="Sources: repository, specification, and models, as of 3 November 2026. The 13/13 result is the recorded fixed-node devnet run on 27 October 2026; the mesh and external-asset suites were added later and are not part of that count. Counts drift; the linked artifact is authoritative."
        />
      </Section>

      <Section number="7" title="Limits" id="rcash-limits">
        <ul className="prose">
          <li>
            <strong>Maturity.</strong> v0.5, devnet-only prototype. No fiat custody or real
            value on chain, no external audit, no mainnet; Rholo is pre-testnet.
          </li>
          <li>
            <strong>Oracle committee.</strong> Three allowlisted reporters, median and freshness
            checks. Two compromised reporters can produce a wrong price; the design reduces that
            risk but does not remove it.
          </li>
          <li>
            <strong>Collateral.</strong> Native REV only. Volatility can create bad debt; the
            surplus buffer is the only backstop.
          </li>
          <li>
            <strong>Ramps.</strong> Fiat on- and off-ramps are off-chain and unbonded. R-Cash
            does not custody fiat and cannot enforce an off-chain leg.
          </li>
          <li>
            <strong>Claim secrets.</strong> A claim is bearer authority. Whoever holds the secret
            can claim it; there is no identity check.
          </li>
          <li>
            <strong>Scale.</strong> Horizontal scale-out is inherited from Rholo’s design, not a
            benchmark result for R-Cash. The public testnet was rebuilt on 29 October 2026; the
            28 October campaign was blocked by operator resource admission and a full campaign
            has not been re-run.
          </li>
          <li>
            <strong>Verification boundary.</strong> Lean models the transition relation,
            arithmetic, and linear-cell discipline. It does not formalise Rholang syntax, the
            node scheduler, or phlo; the link to deployed code is traceability plus tests, not
            extraction. The HAZOP of shared channels is a design review, not a proof.
          </li>
        </ul>
      </Section>

      <Section number="8" title="Links" id="rcash-links">
        <ul className="link-list">
          <li>
            <a href={rcash.repo} target="_blank" rel="noopener noreferrer">Repository</a>
          </li>
          <li>
            <a href={rcash.book} target="_blank" rel="noopener noreferrer">Book</a>
          </li>
          <li>
            <a href={rcash.northStar} target="_blank" rel="noopener noreferrer">North star</a>
          </li>
          <li>
            <a href={rcash.whyRholo} target="_blank" rel="noopener noreferrer">Why Rholo</a>
          </li>
          <li>
            <a href={rcash.status} target="_blank" rel="noopener noreferrer">Status and scope</a>
          </li>
          <li>
            <a href={rcash.spec} target="_blank" rel="noopener noreferrer">Specification</a>
          </li>
          <li>
            <a href={rcash.calculus} target="_blank" rel="noopener noreferrer">Calculus record</a>
          </li>
          <li>
            <a href={rcash.hazop} target="_blank" rel="noopener noreferrer">HAZOP</a>
          </li>
          <li>
            <a href={rcash.campaign} target="_blank" rel="noopener noreferrer">Campaign</a>
          </li>
          <li>
            <a href={rcash.verification} target="_blank" rel="noopener noreferrer">Verification</a>
          </li>
          <li>
            <a href={rcash.lean} target="_blank" rel="noopener noreferrer">Lean 4 models</a>
          </li>
          <li>
            <a href={rcash.tla} target="_blank" rel="noopener noreferrer">TLA+ models</a>
          </li>
          <li>
            <a href={rcash.components} target="_blank" rel="noopener noreferrer">Component catalogue</a>
          </li>
          <li>
            <a href={pathForTab('rholo')}>Rholo node record</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
