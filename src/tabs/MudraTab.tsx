import { ComparisonTable, type ComparisonRow } from '../components/ComparisonTable'
import { EvidenceTable } from '../components/EvidenceTable'
import { Figure } from '../components/Figure'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { WhatWhy } from '../components/WhatWhy'
import { mudra, mudraEvidence } from '../data/projects'

const CONTRAST_COLUMNS = [
  { label: 'Measure' },
  { label: 'Hash + timestamp' },
  { label: 'Mudra' },
]

const CONTRAST_ROWS: ComparisonRow[] = [
  {
    key: 'proved',
    header: 'What is proved',
    cells: [
      'A file existed at a time.',
      'A specific program, its inputs, its output, and the step count are bound in one proof.',
    ],
  },
  {
    key: 'private',
    header: 'What stays private',
    cells: [
      'Usually nothing; the file is revealed to check it.',
      'The formulas, inputs, and business logic; the proof carries fingerprints. Replay requires the witness, optionally shared encrypted.',
    ],
  },
  {
    key: 'needed',
    header: 'What the verifier needs',
    cells: [
      'The file and its hash.',
      'The proof (~6 KB), the verifying key, and the program digest; replay requires the witness.',
    ],
  },
  {
    key: 'not',
    header: 'What it does not prove',
    cells: [
      'That the math inside the file is right.',
      'That the spreadsheet is a good model, that every instruction is constrained, or that a proof-only verifier can check execution.',
    ],
  },
]

const CONTRAST_NOTE =
  'The circuit seals a hash chain, not every instruction; per-instruction correctness relies on deterministic replay.'

export function MudraTab() {
  return (
    <>
      <TitleBlock
        descriptor="Proof of computation"
        title="Mudra"
        subtitle="Prove that a committed calculation trace is unchanged — and, when the witness is shared for replay, that it was executed correctly — without revealing the model."
        metadata={[
          {
            label: 'Role',
            value:
              'Design, implementation: ZK VM, spreadsheet transpiler, verifier, Arweave receipt',
          },
          { label: 'Period', value: '2026' },
          { label: 'Status', value: 'Research build; v1.0.x; AGPL-3.0-only' },
          {
            label: 'Repository',
            value: <a href={mudra.repo} target="_blank" rel="noopener noreferrer">github.com/PatrickMockridge/Mudra</a>,
          },
          {
            label: 'Documentation',
            value: <a href={mudra.docs} target="_blank" rel="noopener noreferrer">docs/</a>,
          },
        ]}
      >
        <WhatWhy
          what={
            <>
              A proof-of-trace system: it binds a program digest, input/output hashes, the
              return value, and the step count in a constant-size proof. It does not
              constrain each instruction; per-instruction correctness comes from
              deterministic replay with the witness, or from trusting the prover.
            </>
          }
          why={
            <>
              A hash on Arweave proves a file existed. It does not prove the math inside it was
              right. Regulated work still moves as spreadsheets and sealed models, and the
              counterparty has to trust the vendor’s black box. Mudra replaces that trust with
              a receipt the other side can verify. What a regulator or counterparty needs is
              not “here is our file hash”, but “here is proof this calculation produced this
              number, and you can check it without seeing our model.” The case studies are
              insurance brokering and fiscal metering.
            </>
          }
          combination={
            <>
              A BigInt-native ZK VM + a constant-size Halo2 hash-chain seal (~6 KB; one
              verifying key for every program) + an Arweave receipt with an entropy beacon.
            </>
          }
        />
      </TitleBlock>

      <MethodRefrain />

      <Section number="1" title="The difference" id="mudra-difference">
        <ComparisonTable
          variant="contrast"
          caption="Table 1. What a hash proves, and what a proof of computation adds."
          subtitle="The difference is the calculation, not the file."
          columns={CONTRAST_COLUMNS}
          rows={CONTRAST_ROWS}
          note={CONTRAST_NOTE}
        />
      </Section>

      <Section number="2" title="Design" id="mudra-design">
        <ul className="prose">
          <li>
            <strong>Prove the trace, not just the file.</strong> The proof binds a
            program digest, input and output hashes, the return value, the step count,
            and the specification digest into one seal; a file hash cannot. It does not
            constrain each instruction; replay does that.
          </li>
          <li>
            <strong>Keep the formulas private.</strong> The proof contains fingerprints,
            not the spreadsheet; the program, inputs, and business logic stay on the
            prover’s machine. Encrypted witness sharing is optional for a counterparty
            that must replay.
          </li>
          <li>
            <strong>Use one circuit for every program.</strong> The Halo2 circuit seals a
            Poseidon hash chain across 21 field elements; it is constant-size regardless
            of the program, so every program uses the same verifying key. Halo2 is the
            seal, not the execution engine.
          </li>
          <li>
            <strong>Make the seed independently chosen.</strong> The entropy beacon
            derives the seed from Arweave block hashes that did not exist when the intent
            was posted, so a prover cannot rerun with favourable seeds and publish only
            the best result.
          </li>
          <li>
            <strong>Verify anywhere.</strong> A lightweight WASM verifier checks the hash
            chain in a browser, on a phone, or from the CLI.
          </li>
        </ul>
      </Section>

      <Section number="3" title="Provenance" id="mudra-provenance">
        <div className="prose">
          <p>
            Mudra is extracted from DarkFi; the ZK VM lineage is inherited. The
            spreadsheet transpiler, the constant-circuit hash-chain seal, the verifier
            WASM, the Arweave receipt pipeline, the entropy beacon, and the Lean 4
            specification are the project’s work. The code is AGPL-3.0-only.
          </p>
        </div>
      </Section>

      <Section number="4" title="Evidence" id="mudra-evidence">
        <EvidenceTable
          rows={mudraEvidence}
          caption="Mudra evidence"
          note="Sources: repository README and docs, as of October 2026. Proof size and circuit properties are implementation claims; the Lean specification and demos are in the repository."
        />
        <Figure id="mudra-pipeline" caption="Figure 1. Mudra proof and verification flow, abridged.">
          <div
            className="pipeline"
            role="img"
            aria-label="Pipeline: spreadsheet or program; BigInt VM execution; about 6 KB Halo2 proof; Arweave receipt; browser or CLI verifier."
          >
            <span className="pipeline-step">Spreadsheet or program</span>
            <span className="pipeline-arrow" aria-hidden="true">
              →
            </span>
            <span className="pipeline-step">BigInt VM execution</span>
            <span className="pipeline-arrow" aria-hidden="true">
              →
            </span>
            <span className="pipeline-step">~6 KB Halo2 proof</span>
            <span className="pipeline-arrow" aria-hidden="true">
              →
            </span>
            <span className="pipeline-step">Arweave receipt (TXID)</span>
            <span className="pipeline-arrow" aria-hidden="true">
              →
            </span>
            <span className="pipeline-step">Browser / CLI verifier</span>
          </div>
        </Figure>
      </Section>

      <Section number="5" title="Limits" id="mudra-limits">
        <ul className="prose">
          <li>
            Research build; not a production audit system; no third-party audit is
            claimed.
          </li>
          <li>
            The circuit seals a hash chain, not every instruction. Per-instruction
            correctness relies on deterministic replay; a verifier with only the proof
            and public inputs cannot check it without the witness. The encrypted-witness
            path is how that can be shared without publishing the model. If you need
            per-opcode constraints, use RISC Zero, SP1, or zkWASM.
          </li>
          <li>
            Proving runs on a single machine and needs the ~2 MB Halo2 parameters for
            k=15; distributed proving is future work.
          </li>
          <li>
            The entropy beacon adds roughly six minutes of latency and requires Arweave
            gateways; the instant path uses a user-supplied seed.
          </li>
          <li>
            The spreadsheet transpiler supports a subset of spreadsheet functions — 33
            in the insurance case study — and roughly 1,024 dense cells; it is not a full
            Excel engine.
          </li>
          <li>
            The browser-side verifier is a lightweight check; full Halo2 verification
            uses the CLI with the parameters.
          </li>
        </ul>
      </Section>

      <Section number="6" title="Links" id="mudra-links">
        <ul className="link-list">
          <li>
            <a href={mudra.repo} target="_blank" rel="noopener noreferrer">Repository</a>
          </li>
          <li>
            <a href={mudra.executive} target="_blank" rel="noopener noreferrer">Executive summary</a>
          </li>
          <li>
            <a href={mudra.unique} target="_blank" rel="noopener noreferrer">What makes it different</a>
          </li>
          <li>
            <a href={mudra.architecture} target="_blank" rel="noopener noreferrer">Architecture</a>
          </li>
          <li>
            <a href={mudra.future} target="_blank" rel="noopener noreferrer">Future work and limits</a>
          </li>
          <li>
            <a href={mudra.demos} target="_blank" rel="noopener noreferrer">Demos</a>
          </li>
          <li>
            <a href={mudra.insurance} target="_blank" rel="noopener noreferrer">Insurance case study</a>
          </li>
          <li>
            <a href={mudra.fiscal} target="_blank" rel="noopener noreferrer">Fiscal metering case study</a>
          </li>
          <li>
            <a href={mudra.lean} target="_blank" rel="noopener noreferrer">Lean specification</a>
          </li>
          <li>
            <a href={mudra.npm} target="_blank" rel="noopener noreferrer">npm package</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
