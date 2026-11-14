import { SITE } from './site'

export type SourceRef = string | { label: string; href: string }

export interface EvidenceRow {
  measure: string
  value: string
  source: SourceRef
}

const darkWowBase = `${SITE.links.darkwowRepo}/blob/linear-master`
const rholoBase = `${SITE.links.rholoRepo}/blob/dev`
const rcashBase = `${SITE.links.rcashRepo}/blob/main`
const rgenBase = `${SITE.links.rgenRepo}/blob/main`
const rshareBase = `${SITE.links.rshareRepo}/blob/main`
const rsureBase = `${SITE.links.rsureRepo}/blob/main`

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
  halo2: 'https://zodl.com/ecc-releases-code-for-halo-2/',
}

export const rholo = {
  repo: SITE.links.rholoRepo,
  site: SITE.links.rholoSite,
  docs: `${SITE.links.rholoRepo}/tree/dev/docs/src`,
  laws: `${rholoBase}/spec/LAWS.md`,
  inventory: `${rholoBase}/spec/INVENTORY.md`,
  coq: `${rholoBase}/spec/coq/README.md`,
  audit: `${rholoBase}/spec/AUDIT.md`,
  passes: `${rholoBase}/spec/audit/passes.md`,
  testnetRelease: `${SITE.links.rholoRepo}/releases/tag/v0.1.0`,
  hazop: `${rholoBase}/docs/src/spec/failure-hazop.md`,
  adversary: `${rholoBase}/docs/src/spec/adversary.md`,
  rustVsScala: `${rholoBase}/spec/RUST-VS-SCALA.md`,
  coverage: `${rholoBase}/spec/COVERAGE-LEDGER.md`,
  testCoverage: `${rholoBase}/spec/TEST-COVERAGE.md`,
  qucalc: `${SITE.links.rholoRepo}/tree/dev/docs/src/qucalc`,
  methodology: `${SITE.links.rholoRepo}/tree/dev/docs/src/methodology`,
  securityAudit: `${SITE.links.rholoRepo}/blob/dev/docs/src/node/security-audit.md`,
  whyRholang: `${rholoBase}/docs/src/rholang/why-rholang.md`,
  objectCapabilities: `${rholoBase}/docs/src/rholang/object-capabilities.md`,
  scaling: `${rholoBase}/docs/src/node/scaling.md`,
  crossShard: `${rholoBase}/docs/src/formal/cross-shard-transactions.md`,
  concurrency: `${rholoBase}/docs/src/formal/concurrency.md`,
  typeSystem: `${rholoBase}/spec/TYPE-SYSTEM.md`,
  rhoPaper: 'https://doi.org/10.1016/j.entcs.2005.05.016',
  meredithCrunchbase: 'https://www.crunchbase.com/person/greg-meredith',
  meredithCypherhunter: 'https://www.cypherhunter.com/en/p/lucius-meredith/',
  arweave: 'https://arweave.net/MK4WA8w3NTIIFd6iaD06EPyxVbFhoV9MtfhMNcHWWMw',
  legacy: `${SITE.links.rholoRepo}/tree/1b7583649/legacy`,
  testnetStatus: SITE.links.testnetStatus,
  rgovPost: SITE.links.rgovPost,
  gorki: SITE.links.gorki,
  gorkiLegacy: SITE.links.gorkiLegacy,
  rgov: SITE.links.rgov,
}

export const rcash = {
  repo: SITE.links.rcashRepo,
  book: `${rcashBase}/book/src/index.md`,
  northStar: `${rcashBase}/book/src/orientation/north-star.md`,
  whyRholo: `${rcashBase}/book/src/orientation/why-rholo.md`,
  status: `${rcashBase}/book/src/orientation/status-and-scope.md`,
  spec: `${rcashBase}/docs/SPEC.md`,
  calculus: `${rcashBase}/docs/spec/00-CALCULUS.md`,
  hazop: `${rcashBase}/docs/spec/HAZOP.md`,
  primitivesHazop: `${rcashBase}/docs/spec/PRIMITIVES-HAZOP.md`,
  auditPrimitives: `${rcashBase}/docs/spec/AUDIT-PRIMITIVES.md`,
  matchReview: `${rcashBase}/docs/spec/MATCH-REVIEW.md`,
  claims: `${rcashBase}/spec/lean/claims.yaml`,
  campaign: `${rcashBase}/docs/spec/flows/CAMPAIGN.md`,
  verification: `${rcashBase}/book/src/trust/verification.md`,
  testing: `${rcashBase}/book/src/trust/testing.md`,
  lean: `${SITE.links.rcashRepo}/tree/main/spec/lean`,
  tla: `${SITE.links.rcashRepo}/tree/main/spec/tla`,
  components: `${rcashBase}/contracts/components.json`,
  checkCaptures: `${rcashBase}/tools/check_captures.py`,
  docs: `${SITE.links.rcashRepo}/tree/main/docs`,
}

export const rgen = {
  repo: SITE.links.rgenRepo,
  readme: `${rgenBase}/README.md`,
  book: 'https://rhovision-org.github.io/r-gen/',
  summary: `${rgenBase}/docs/src/SUMMARY.md`,
  northStar: `${rgenBase}/docs/src/orientation/north-star.md`,
  paretoLedger: `${rgenBase}/docs/src/reference/pareto-ledger.md`,
  paperToCode: `${rgenBase}/docs/src/reference/paper-to-code.md`,
  formalModel: `${rgenBase}/docs/src/reference/formal-model.md`,
  raceProof: `${rgenBase}/docs/src/reference/race-freedom-proof.md`,
  verification: `${rgenBase}/docs/src/reference/verification.md`,
  status: `${rgenBase}/docs/src/appendix/status.md`,
  adversarial: `${rgenBase}/docs/src/reference/adversarial-review.md`,
  pareto: `${rgenBase}/spec/pareto.yaml`,
  raceLean: `${rgenBase}/spec/lean/RGen/RaceFreedom.lean`,
  conventions: `${rgenBase}/docs/src/reference/kasset-conventions.md`,
  objectCapabilities: `${rgenBase}/docs/src/reference/object-capabilities.md`,
  redTeam: `${rgenBase}/docs/src/reference/red-team.md`,
  auditFindings: `${rgenBase}/spec/audit/findings.yaml`,
  arms: `${rgenBase}/docs/src/reference/arms.md`,
  papers: `${rgenBase}/docs/papers/README.md`,
}

export const rshare = {
  repo: SITE.links.rshareRepo,
  readme: `${rshareBase}/README.md`,
  docs: `${rshareBase}/docs/index.md`,
  summary: `${rshareBase}/docs/SUMMARY.md`,
  northStar: `${rshareBase}/docs/orientation/north-star.md`,
  ladder: `${rshareBase}/docs/orientation/use-case-ladder.md`,
  whyPrimitives: `${rshareBase}/docs/orientation/why-primitives.md`,
  doctrine: `${rshareBase}/docs/concepts/concurrency-doctrine.md`,
  contractMap: `${rshareBase}/docs/reference/contract-map.md`,
  verification: `${rshareBase}/docs/reference/verification.md`,
  formalModel: `${rshareBase}/docs/reference/formal-model.md`,
  status: `${rshareBase}/docs/orientation/status-and-scope.md`,
  holiday: `${rshareBase}/docs/case-studies/holiday-letting/index.md`,
  flows: `${rshareBase}/spec/flows/core.yaml`,
  audit: `${rshareBase}/audit/report.md`,
  hazards: `${rshareBase}/audit/registers/hazards.yaml`,
  profiles: `${rshareBase}/harness/profiles.py`,
  notices: `${rshareBase}/THIRD_PARTY_NOTICES.md`,
}

export const rsure = {
  repo: SITE.links.rsureRepo,
  readme: `${rsureBase}/README.md`,
  docs: `${rsureBase}/docs/index.md`,
  summary: `${rsureBase}/docs/SUMMARY.md`,
  status: `${rsureBase}/docs/orientation/project-status.md`,
  insuranceBasics: `${rsureBase}/docs/primer/insurance-basics.md`,
  lloyds: `${rsureBase}/docs/primer/lloyds-for-dummies.md`,
  designPhilosophy: `${rsureBase}/docs/primer/design-philosophy.md`,
  engineeringCover: `${rsureBase}/docs/case-studies/engineering-cover.md`,
  damageWaiver: `${rsureBase}/docs/case-studies/share-damage-waiver.md`,
  formalModel: `${rsureBase}/docs/reference/formal-model.md`,
  verification: `${rsureBase}/docs/reference/verification.md`,
  contractMap: `${rsureBase}/docs/reference/contract-map.md`,
  variance: `${rsureBase}/docs/concepts/variance-is-risk.md`,
  audit: `${rsureBase}/audit/report.md`,
  lean: `${SITE.links.rsureRepo}/tree/main/spec/lean`,
  flows: `${rsureBase}/spec/flows`,
  notices: `${rsureBase}/THIRD_PARTY_NOTICES.md`,
}

export const azoth = {
  repo: SITE.links.azothRepo,
  editor: SITE.links.azothEditor,
  pypi: SITE.links.azothPyPI,
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
    value: '32 (9 genesis, 23 works in progress)',
    source: { label: 'Contract catalog', href: darkWow.contracts },
  },
  {
    measure: 'Manifests',
    value: '31 (8 of 9 genesis + 23 post-genesis); no on-chain manifest hash',
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
    measure: 'Supply audit',
    value: 'Per-block Pedersen mass balance over native-token calls; cumulative supply audit chain',
    source: { label: 'Consensus and supply audit', href: darkWow.consensus },
  },
  {
    measure: 'Obligation status',
    value: 'OBL-Z12 closed for known circuits; OBL-C279 deferred',
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
    value: '100 laws (155 entries)',
    source: { label: 'spec/LAWS.md', href: rholo.laws },
  },
  {
    measure: 'Non-vacuous proofs',
    value: '141 of 155 entries',
    source: { label: 'spec/LAWS.md', href: rholo.laws },
  },
  {
    measure: 'Laws tied to the node',
    value: '31 entries',
    source: { label: 'spec/INVENTORY.md', href: rholo.inventory },
  },
  {
    measure: 'Laws proved over the model',
    value: '110 entries',
    source: { label: 'spec/INVENTORY.md', href: rholo.inventory },
  },
  {
    measure: 'Rust witnesses',
    value: '113 laws; 301 witness entries (277 distinct tests)',
    source: { label: 'spec/LAWS.md', href: rholo.laws },
  },
  {
    measure: 'Vacuous proofs',
    value: '2 entries',
    source: { label: 'spec/LAWS.md', href: rholo.laws },
  },
  {
    measure: 'Entries not counted as proved',
    value: '12: 1 axiom, 1 open, 8 retired, 2 orphaned',
    source: { label: 'spec/INVENTORY.md', href: rholo.inventory },
  },
  {
    measure: 'First-party crates',
    value: '14; 0 unsafe',
    source: { label: 'README', href: rholo.repo },
  },
  {
    measure: 'Node size',
    value: '232,773 Rust lines / 515 files; 47.0 MiB binary (README, 1 November 2026)',
    source: { label: 'README', href: rholo.repo },
  },
  {
    measure: 'Tests',
    value: '~2,615 test functions (README, 30 Oct 2026)',
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
    measure: 'Self-adversarial review (October 2026)',
    value: 'No P0; 3 P1, 3 P2, 2 P3/assurance; C345–C352 addressed',
    source: { label: 'Security audit', href: rholo.securityAudit },
  },
  {
    measure: 'Audit check-off',
    value: '402 of 408 findings done; 6 in progress',
    source: { label: 'spec/AUDIT.md', href: rholo.audit },
  },
  {
    measure: 'Upstream corpus',
    value: '165 files, run 1:1 (README)',
    source: { label: 'README', href: rholo.repo },
  },
]

export const rcashEvidence: EvidenceRow[] = [
  {
    measure: 'Behavioural suites',
    value: '13/13 plus CLI demo, fixed-node devnet, 27 October 2026',
    source: { label: 'Testing record', href: rcash.testing },
  },
  {
    measure: 'Specification',
    value: '932 lines; 207 requirements, 207 MUST, 19 areas',
    source: { label: 'docs/SPEC.md', href: rcash.spec },
  },
  {
    measure: 'Components',
    value: '40 catalogued',
    source: { label: 'Component catalogue', href: rcash.components },
  },
  {
    measure: 'Calculus record',
    value: 'L1–L8, N1–N7, S1–S18, WF1–WF8, P1–P6, C1–C3',
    source: { label: 'docs/spec/00-CALCULUS.md', href: rcash.calculus },
  },
  {
    measure: 'Lean 4',
    value: 'S1–S12; rejects D1–D6; axiom audit',
    source: { label: 'spec/lean', href: rcash.lean },
  },
  {
    measure: 'Lean claims',
    value: '44 claims; 17 covered (review 4 November 2026)',
    source: { label: 'spec/lean/claims.yaml', href: rcash.claims },
  },
  {
    measure: 'TLA+',
    value: '7 models; TLC over bounded domains',
    source: { label: 'spec/tla', href: rcash.tla },
  },
  {
    measure: 'Capture checks',
    value: 'Replies, stored maps, bundles, attestations',
    source: { label: 'tools/check_captures.py', href: rcash.checkCaptures },
  },
]

export const rgenEvidence: EvidenceRow[] = [
  {
    measure: 'Core',
    value: '7 contracts; 16 components; 10 state cells; acyclic',
    source: { label: 'Verification record', href: rgen.verification },
  },
  {
    measure: 'Behavioural suites',
    value: '10/10; 307 ok assertions; Rholo e2d073d; 7 November 2026',
    source: { label: 'Verification record', href: rgen.verification },
  },
  {
    measure: 'Lean 4 build',
    value: '45 files; no Mathlib; no sorry, admit, native_decide, or declared axiom',
    source: { label: 'Formal model', href: rgen.formalModel },
  },
  {
    measure: 'Theorem audit',
    value: '241 public theorems; propext and Quot.sound only',
    source: { label: 'Formal model', href: rgen.formalModel },
  },
  {
    measure: 'Race matrix',
    value: '32 pairs: 19 exclusive, 11 ordered, 2 independent',
    source: { label: 'Race-freedom proof', href: rgen.raceProof },
  },
  {
    measure: 'Arm map',
    value: '67 arms: 0 proved-model, 35 proved-conformance, 32 owed',
    source: { label: 'Formal model', href: rgen.formalModel },
  },
  {
    measure: 'Conformance corpus',
    value: '46 emitted rows; 37 mutating arms tied to a consumed cell',
    source: { label: 'Verification record', href: rgen.verification },
  },
  {
    measure: 'Audit',
    value: '62 findings; 38-row capability audit; RT-004–RT-037',
    source: { label: 'Verification record', href: rgen.verification },
  },
  {
    measure: 'Adversarial review',
    value: '4 P0 defects removed from the legacy 12-term prototype',
    source: { label: 'Adversarial review', href: rgen.adversarial },
  },
]

export const rshareEvidence: EvidenceRow[] = [
  {
    measure: 'Behavioural suites',
    value: '24/24 recorded; 27 defined, 3 pending; 7 November 2026',
    source: { label: 'Verification record', href: rshare.verification },
  },
  {
    measure: 'Deploy terms',
    value: '15 safe / 20 cover-demo; build, measure, and parse with the target node parser',
    source: { label: 'Contract map', href: rshare.contractMap },
  },
  {
    measure: 'Claim coverage',
    value: '20 of 30 cells; four claim classes across five kinds',
    source: { label: 'Verification record', href: rshare.verification },
  },
  {
    measure: 'Conservation',
    value: '8 settlement scenarios; closed balance set; negative control',
    source: { label: 'Verification record', href: rshare.verification },
  },
  {
    measure: 'Lean 4',
    value: '105 axiom audits; 21 vectors; 101 registered theorems; no sorry, admit, axiom, or native_decide',
    source: { label: 'Formal model', href: rshare.formalModel },
  },
  {
    measure: 'Flow manifest',
    value: '43 rules; 39 arms; 13 core arms proved-model',
    source: { label: 'Formal model', href: rshare.formalModel },
  },
  {
    measure: 'Audit',
    value: '21 findings (5 P0, 5 P1); 63 hazards; 23 improvements',
    source: { label: 'Audit report', href: rshare.audit },
  },
  {
    measure: 'Allocator theorem',
    value: 'acquire_no_double_owner; single-owner, atomic acquisition, bounded holds',
    source: { label: 'Formal model', href: rshare.formalModel },
  },
  {
    measure: 'Client campaign',
    value: 'CLI journey plus guest, provider, and admin-multisig browser journeys; 3–7 November 2026',
    source: { label: 'Status and scope', href: rshare.status },
  },
]

export const rsureEvidence: EvidenceRow[] = [
  {
    measure: 'Contracts',
    value: '17 deploy terms; 30 components; 19 state cells',
    source: { label: 'Project status', href: rsure.status },
  },
  {
    measure: 'Behavioural campaign',
    value: '38 runs; 410 assertions; 0 failures; 7 November 2026',
    source: { label: 'Project status', href: rsure.status },
  },
  {
    measure: 'Registered suites',
    value: '42: 37 passing, 3 process gates not run, 2 implemented',
    source: { label: 'Project status', href: rsure.status },
  },
  {
    measure: 'Lean',
    value: '285 theorems; 48 vectors; 58 flow rules; 11 proved-model core arms; 15 critical primitives',
    source: { label: 'Formal model', href: rsure.formalModel },
  },
  {
    measure: 'Audit',
    value: '28 findings: 25 fixed, 3 accepted; 37 hazards; 30 improvements',
    source: { label: 'Audit report', href: rsure.audit },
  },
  {
    measure: 'Concurrency and interfaces',
    value: '30/30 reviews; 46/46 composition interfaces',
    source: { label: 'Project status', href: rsure.status },
  },
  {
    measure: 'Coverage',
    value: '126/151 public arms (83.4%); 139/168 registered (82.7%)',
    source: { label: 'Project status', href: rsure.status },
  },
  {
    measure: 'Variance',
    value: 'K-Asset engineering variance; liability share excluded',
    source: { label: 'Variance is risk', href: rsure.variance },
  },
  {
    measure: 'Clients',
    value: '3 Playwright journeys; 8 Vitest; 13 Rust tests pass',
    source: { label: 'Verification', href: rsure.verification },
  },
]

export const azothEvidence: EvidenceRow[] = [
  {
    measure: 'Upstream issues filed',
    value: '97 (80 closed, 17 open)',
    source: { label: 'NeqSim issue search', href: azoth.issues },
  },
  {
    measure: 'Provenance tests',
    value: '264',
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
