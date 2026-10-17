import { SITE } from './site'

export type SourceRef = string | { label: string; href: string }

export interface EvidenceRow {
  measure: string
  value: string
  source: SourceRef
}

const darkWowBase = `${SITE.links.darkwowRepo}/blob/linear-master`
const rchainBase = `${SITE.links.rchainRepo}/blob/dev`

export const darkWow = {
  repo: SITE.links.darkwowRepo,
  docs: `${SITE.links.darkwowRepo}/tree/linear-master/doc/src`,
  manifest: `${darkWowBase}/doc/src/arch/manifest.md`,
  ocap: `${darkWowBase}/doc/src/arch/ocap.md`,
  wallet: `${darkWowBase}/doc/src/arch/wallet.md`,
  uncleMerkle: `${darkWowBase}/doc/src/arch/consensus/uncle_merkle.md`,
  proofs: `${darkWowBase}/proofs/README.md`,
  contracts: `${darkWowBase}/doc/src/contracts.md`,
  obligations: `${darkWowBase}/doc/src/arch/verification-hazop.md`,
}

export const rchain = {
  repo: SITE.links.rchainRepo,
  docs: `${SITE.links.rchainRepo}/tree/dev/docs/src`,
  laws: `${rchainBase}/spec/LAWS.md`,
  inventory: `${rchainBase}/spec/INVENTORY.md`,
  coq: `${rchainBase}/spec/coq/README.md`,
  audit: `${rchainBase}/spec/AUDIT.md`,
  passes: `${rchainBase}/spec/audit/passes.md`,
  hazop: `${rchainBase}/docs/src/spec/failure-hazop.md`,
  adversary: `${rchainBase}/docs/src/spec/adversary.md`,
  rustVsScala: `${rchainBase}/spec/RUST-VS-SCALA.md`,
  coverage: `${rchainBase}/spec/COVERAGE-LEDGER.md`,
  testCoverage: `${rchainBase}/spec/TEST-COVERAGE.md`,
  qucalc: `${rchainBase}/docs/src/qucalc`,
  methodology: `${SITE.links.rchainRepo}/tree/dev/docs/src/methodology`,
  arweave: 'https://arweave.net/MK4WA8w3NTIIFd6iaD06EPyxVbFhoV9MtfhMNcHWWMw',
  legacy: `${SITE.links.rchainRepo}/tree/1b7583649/legacy`,
}

export const azoth = {
  repo: SITE.links.azothRepo,
  docs: `${SITE.links.azothRepo}/tree/main/docs`,
  safety: `${SITE.links.azothRepo}/blob/main/docs/src/safety.md`,
  agents: `${SITE.links.azothRepo}/blob/main/AGENTS.md`,
  issues: SITE.links.neqsimIssues,
}

export const mudra = {
  repo: SITE.links.mudraRepo,
  docs: `${SITE.links.mudraRepo}/tree/master/docs`,
  executive: `${SITE.links.mudraRepo}/blob/master/docs/executive-summary.md`,
  unique: `${SITE.links.mudraRepo}/blob/master/docs/UNIQUE.md`,
  architecture: `${SITE.links.mudraRepo}/blob/master/docs/ARCHITECTURE.md`,
  future: `${SITE.links.mudraRepo}/blob/master/docs/future-work.md`,
  arweave: `${SITE.links.mudraRepo}/blob/master/docs/arweave-verification.md`,
  lean: `${SITE.links.mudraRepo}/tree/master/lean`,
  demos: `${SITE.links.mudraRepo}/tree/master/demo`,
  npm: 'https://www.npmjs.com/package/mudra-zkvm',
  insurance: `${SITE.links.mudraRepo}/blob/master/docs/case-study-insurance-brokering.md`,
  fiscal: `${SITE.links.mudraRepo}/blob/master/docs/case-study-fiscal-metering.md`,
}

export const manifestExcerpt = `[contract]
name = "example_contract"
category = "Example"
version = "1.0.0"

[[functions]]
name = "create_thing"
code = 0x00
requires_proof = true
proof_circuit = "create_thing_v1"

[[capabilities]]
discriminant = 0x00
name = "creator"

[[actions]]
function = "create_thing"
requires = { type = "none" }
produces = [{ name = "creator" }]`

export const darkWowEvidence: EvidenceRow[] = [
  {
    measure: 'Contract codebases',
    value: '32 (9 genesis, 23 experimental)',
    source: { label: 'Contract catalog', href: darkWow.contracts },
  },
  {
    measure: 'On-chain manifests',
    value: '32',
    source: { label: 'Manifest specification', href: darkWow.manifest },
  },
  {
    measure: 'Added ZK gadgets proved',
    value: '3, with 8 declared axioms',
    source: { label: 'Proofs', href: darkWow.proofs },
  },
  {
    measure: 'Open formal obligation',
    value: 'OBL-Z12',
    source: { label: 'Obligation register', href: darkWow.obligations },
  },
  {
    measure: 'Premine',
    value: '0',
    source: { label: 'Repository', href: darkWow.repo },
  },
  {
    measure: 'Fork-era commits',
    value: '1,610 of 2,085 since 23 Jul 2026',
    source: { label: 'Repository', href: darkWow.repo },
  },
  {
    measure: 'Documentation',
    value: '2,014 A4 pages (Sep 2026)',
    source: { label: 'Documentation tree', href: darkWow.docs },
  },
]

export const rchainEvidence: EvidenceRow[] = [
  {
    measure: 'Rholang laws',
    value: '77 machine-checked in Lean 4',
    source: { label: 'spec/LAWS.md', href: rchain.laws },
  },
  {
    measure: 'Entries tied to the node',
    value: '23, by conformance corpora',
    source: { label: 'spec/INVENTORY.md', href: rchain.inventory },
  },
  {
    measure: 'Named axioms',
    value: '10 (9 cryptographic by design)',
    source: { label: 'spec/INVENTORY.md', href: rchain.inventory },
  },
  {
    measure: 'Open obligations',
    value: '1 (law 63a)',
    source: { label: 'spec/INVENTORY.md', href: rchain.inventory },
  },
  {
    measure: 'First-party crates',
    value: '14; 0 unsafe',
    source: { label: 'README', href: rchain.repo },
  },
  {
    measure: 'Rust lines / files',
    value: '203,173 / 474',
    source: { label: 'README', href: rchain.repo },
  },
  {
    measure: 'Tests',
    value: '2,281 (15 Oct 2026)',
    source: { label: 'Test coverage', href: rchain.testCoverage },
  },
  {
    measure: 'Coverage floor',
    value: '87% (89.97% measured)',
    source: { label: 'Coverage ledger', href: rchain.coverage },
  },
  {
    measure: 'Internal review',
    value: '137 sections; 383-row register',
    source: { label: 'Audit record', href: rchain.audit },
  },
  {
    measure: 'Upstream corpus',
    value: '165 files, run 1:1',
    source: { label: 'Rust vs Scala', href: rchain.rustVsScala },
  },
]

export const azothEvidence: EvidenceRow[] = [
  {
    measure: 'Upstream issues filed',
    value: '77 (57 closed, 20 open)',
    source: { label: 'NeqSim issue search', href: azoth.issues },
  },
  {
    measure: 'Defect reports',
    value: 'at least 73',
    source: { label: 'NeqSim issue search', href: azoth.issues },
  },
  {
    measure: 'Provenance tests',
    value: '216',
    source: { label: 'Azoth repository', href: azoth.repo },
  },
]

export const mudraEvidence: EvidenceRow[] = [
  {
    measure: 'Proof size',
    value: '~6 KB, constant',
    source: { label: 'README', href: mudra.repo },
  },
  {
    measure: 'Circuit',
    value: '21 field elements; one verifying key for every program',
    source: { label: 'Architecture', href: mudra.architecture },
  },
  {
    measure: 'VM',
    value: '32 BigInt registers; 64 KB memory; 21 instructions',
    source: { label: 'README', href: mudra.repo },
  },
  {
    measure: 'Demos',
    value: '4 spreadsheets, 105–722 instructions',
    source: { label: 'Demos', href: mudra.demos },
  },
  {
    measure: 'Verifier',
    value: 'WASM; browser, phone, CLI',
    source: { label: 'README', href: mudra.repo },
  },
  {
    measure: 'Audit trail',
    value: 'Arweave receipt (TXID)',
    source: { label: 'Arweave verification', href: mudra.arweave },
  },
  {
    measure: 'Formal specification',
    value: 'Lean 4',
    source: { label: 'Lean specification', href: mudra.lean },
  },
]
