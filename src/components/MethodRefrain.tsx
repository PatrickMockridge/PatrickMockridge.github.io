const REFRAIN =
  'Specify the failure mode before the architecture; prove what can be proved; contain what cannot; record provenance with every result. Where proof stops is stated in the limits.'

export function MethodRefrain() {
  return (
    <aside className="method-refrain" aria-label="Method">
      <span className="method-label">Method</span>
      <p>{REFRAIN}</p>
    </aside>
  )
}
