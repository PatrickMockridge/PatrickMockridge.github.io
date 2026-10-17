import { Enquiries } from '../components/Enquiries'

export function ContactTab() {
  return (
    <>
      <header className="title-block">
        <p className="descriptor">Contact</p>
        <h1 className="case-title">Enquiries</h1>
      </header>
      <div className="prose contact-scope">
        <p>
          Enquiries are most useful where correctness has to be demonstrated: protocol
          review, rescue work, and verification, including numerical systems where the
          failure mode is a plausible number rather than a crash.
        </p>
      </div>
      <Enquiries />
    </>
  )
}
