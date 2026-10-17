import { EvidenceTable } from '../components/EvidenceTable'
import { Figure } from '../components/Figure'
import { MethodRefrain } from '../components/MethodRefrain'
import { Section } from '../components/Section'
import { TitleBlock } from '../components/TitleBlock'
import { mudra, mudraEvidence } from '../data/projects'

export function MudraTab() {
  return (
    <>
      <TitleBlock
        descriptor="Proof of computation"
        title="Mudra"
        subtitle="Prove a calculation was done correctly without revealing the spreadsheet or its inputs."
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
            value: <a href={mudra.repo}>github.com/PatrickMockridge/Mudra</a>,
          },
          {
            label: 'Documentation',
            value: <a href={mudra.docs}>docs/</a>,
          },
        ]}
      />

      <MethodRefrain />

      <Section number="1" title="Claim" id="mudra-claim">
        <p className="lede">
          A hash on Arweave proves a file existed. It does not prove the math inside it
          was right. Mudra closes that gap: a spreadsheet or program runs locally,
          produces a constant-size proof that a specific program ran on specific inputs
          to a specific output, and posts a permanent receipt to Arweave. The verifier
          checks the proof without seeing the formulas or the data. The trust problem is
          concrete: an insurance broker cannot hand a ten-year model to a regulator, and
          an offshore operator cannot prove a custody-transfer reading without trusting
          a vendor’s sealed black box. Mudra lets either post a receipt the other side
          can verify. The VM is BigInt-native, so there is no overflow; the Halo2 circuit
          seals a Poseidon hash chain across 21 field elements, so one verifying key
          covers every program; the verifier runs in WASM in a browser, on a phone, or
          from the CLI. It is a research build, not a production audit system: the
          circuit seals the hash chain, and per-instruction correctness relies on
          deterministic replay.
        </p>
      </Section>

      <Section number="2" title="Design" id="mudra-design">
        <ul className="prose">
          <li>
            <strong>Prove the calculation, not just the file.</strong> The proof binds a
            program digest, input and output hashes, the return value, the step count,
            and the specification digest into one seal; a file hash cannot.
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
            correctness relies on deterministic replay; if you need per-opcode
            constraints, use RISC Zero, SP1, or zkWASM.
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
            <a href={mudra.repo}>Repository</a>
          </li>
          <li>
            <a href={mudra.executive}>Executive summary</a>
          </li>
          <li>
            <a href={mudra.unique}>What makes it different</a>
          </li>
          <li>
            <a href={mudra.architecture}>Architecture</a>
          </li>
          <li>
            <a href={mudra.future}>Future work and limits</a>
          </li>
          <li>
            <a href={mudra.demos}>Demos</a>
          </li>
          <li>
            <a href={mudra.insurance}>Insurance case study</a>
          </li>
          <li>
            <a href={mudra.fiscal}>Fiscal metering case study</a>
          </li>
          <li>
            <a href={mudra.lean}>Lean specification</a>
          </li>
          <li>
            <a href={mudra.npm}>npm package</a>
          </li>
        </ul>
      </Section>
    </>
  )
}
