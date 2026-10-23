import { SITE } from './site'

export type SourceRef = string | { label: string; href: string }

export interface EvidenceRow {
  measure: string
  value: string
  source: SourceRef
}

const darkWowBase = `${SITE.links.darkwowRepo}/blob/linear-master`
const rholoBase = `${SITE.links.rholoRepo}/blob/dev`

export const darkWow = {
  repo: SITE.links.darkwowRepo,
  docs: `${SITE.links.darkwowRepo}/tree/linear-master/doc/src`,
  manifest: `${darkWowBase}/doc/src/arch/manifest.md`,
  ocap: `${darkWowBase}/doc/src/arch/ocap.md`,
  wallet: `${darkWowBase}/doc/src/arch/wallet.md`,
  uncleMerkle: `${darkWowBase}/doc/src/arch/consensus/uncle_merkle.md`,
  consensus: `${darkWowBase}/doc/src/arch/consensus/consensus.md`,
  proofs: `${darkWowBase}/proofs/README.md`,
  opcodes: `${darkWowBase}/doc/src/arch/zk/opcodes.md`,
  axioms: `${darkWowBase}/proofs/lean/src/DarkFi/Axioms.lean`,
  contracts: `${darkWowBase}/doc/src/contracts.md`,
  obligations: `${darkWowBase}/doc/src/arch/verification-hazop.md`,
  rhoPaper: 'https://doi.org/10.1016/j.entcs.2005.05.016',
  halo2: 'https://z.cash/ecc-releases-code-for-halo-2/',
}

export const rholo = {
  repo: SITE.links.rholoRepo,
  docs: `${SITE.links.rholoRepo}/tree/dev/docs/src`,
  laws: `${rholoBase}/spec/LAWS.md`,
  inventory: `${rholoBase}/spec/INVENTORY.md`,
  coq: `${rholoBase}/spec/coq/README.md`,
  audit: `${rholoBase}/spec/AUDIT.md`,
  passes: `${rholoBase}/spec/audit/passes.md`,
  hazop: `${rholoBase}/docs/src/spec/failure-hazop.md`,
  adversary: `${rholoBase}/docs/src/spec/adversary.md`,
  rustVsScala: `${rholoBase}/spec/RUST-VS-SCALA.md`,
  coverage: `${rholoBase}/spec/COVERAGE-LEDGER.md`,
  testCoverage: `${rholoBase}/spec/TEST-COVERAGE.md`,
  qucalc: `${rholoBase}/docs/src/qucalc`,
  methodology: `${SITE.links.rholoRepo}/tree/dev/docs/src/methodology`,
  securityAudit: `${SITE.links.rholoRepo}/blob/dev/docs/src/node/security-audit.md`,
  whyRholang: `${rholoBase}/docs/src/rholang/why-rholang.md`,
  objectCapabilities: `${rholoBase}/docs/src/rholang/object-capabilities.md`,
  scaling: `${rholoBase}/docs/src/node/scaling.md`,
  crossShard: `${rholoBase}/docs/src/formal/cross-shard-transactions.md`,
  concurrency: `${rholoBase}/docs/src/formal/concurrency.md`,
  typeSystem: `${rholoBase}/spec/TYPE-SYSTEM.md`,
  arweave: 'https://arweave.net/MK4WA8w3NTIIFd6iaD06EPyxVbFhoV9MtfhMNcHWWMw',
  legacy: `${SITE.links.rholoRepo}/tree/1b7583649/legacy`,
  testnetStatus: SITE.links.testnetStatus,
  rgovPost: SITE.links.rgovPost,
  gorki: SITE.links.gorki,
  gorkiLegacy: SITE.links.gorkiLegacy,
  rgov: SITE.links.rgov,
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
    measure: 'Manifests',
    value: '32; on-chain hash pending',
    source: { label: 'Manifest specification', href: darkWow.manifest },
  },
  {
    measure: 'Lean 4 coverage',
    value: '32 opcodes + 10 gadget files (partial); per-opcode verdicts, no blanket verdict',
    source: { label: 'Opcode status', href: darkWow.opcodes },
  },
  {
    measure: 'Circuit gate',
    value: '167 contract circuits; 179 walked; instance derivation only, not circuit correctness',
    source: { label: 'Opcode and circuit status', href: darkWow.opcodes },
  },
  {
    measure: 'Assumptions',
    value: '6; pallasPrime the only arithmetic one',
    source: { label: 'Axiom boundary', href: darkWow.axioms },
  },
  {
    measure: 'HAZOP tabletop',
    value: '120 circuits at the time; 15 high-risk fixed',
    source: { label: 'Verification register', href: darkWow.obligations },
  },
  {
    measure: 'Supply audit',
    value: 'Per-block Pedersen mass balance over native-token calls; cumulative supply audit chain',
    source: { label: 'Consensus and supply audit', href: darkWow.consensus },
  },
  {
    measure: 'Open obligations',
    value: 'OBL-Z12 (partly open); OBL-Z17, OBL-C21, OBL-C231',
    source: { label: 'Obligation register', href: darkWow.obligations },
  },
  {
    measure: 'Premine',
    value: '0',
    source: { label: 'Repository', href: darkWow.repo },
  },
]

export const rholoEvidence: EvidenceRow[] = [
  {
    measure: 'Rholang laws',
    value: '72 of 77 proved at all',
    source: { label: 'spec/LAWS.md', href: rholo.laws },
  },
  {
    measure: 'Non-vacuous proofs',
    value: '70',
    source: { label: 'spec/LAWS.md', href: rholo.laws },
  },
  {
    measure: 'Laws tied to the node',
    value: '19 (23 entries)',
    source: { label: 'spec/INVENTORY.md', href: rholo.inventory },
  },
  {
    measure: 'Laws proved over the model',
    value: '53 (69 entries)',
    source: { label: 'spec/INVENTORY.md', href: rholo.inventory },
  },
  {
    measure: 'Vacuous proofs',
    value: '2',
    source: { label: 'spec/LAWS.md', href: rholo.laws },
  },
  {
    measure: 'Laws not counted as proved',
    value: '5: law 19 axiomatized, law 63a open, 3 retired/orphaned',
    source: { label: 'spec/INVENTORY.md', href: rholo.inventory },
  },
  {
    measure: 'First-party crates',
    value: '14; 0 unsafe',
    source: { label: 'README', href: rholo.repo },
  },
  {
    measure: 'Tests',
    value: '2,281 test functions (README, 15 Oct 2026)',
    source: { label: 'README', href: rholo.repo },
  },
  {
    measure: 'Test ledger',
    value: '1,481 unit + 130 integration',
    source: { label: 'Test coverage', href: rholo.testCoverage },
  },
  {
    measure: 'Coverage floor',
    value: '87% (89.97% measured)',
    source: { label: 'Coverage ledger', href: rholo.coverage },
  },
  {
    measure: 'Self-adversarial review (T1 scope)',
    value: 'No P0; 3 P1, 4 P2, 14 P3 closed; 204/204 filed findings',
    source: { label: 'Security audit', href: rholo.securityAudit },
  },
  {
    measure: 'Upstream corpus',
    value: '165 files, run 1:1 (README)',
    source: { label: 'README', href: rholo.repo },
  },
]

export const azothEvidence: EvidenceRow[] = [
  {
    measure: 'Upstream issues filed',
    value: '94 (72 closed, 22 open)',
    source: { label: 'NeqSim issue search', href: azoth.issues },
  },
  {
    measure: 'Provenance tests',
    value: '217',
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
    value: '4 spreadsheets, 100–632 instructions',
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
