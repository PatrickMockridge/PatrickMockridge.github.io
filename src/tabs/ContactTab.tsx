import { Enquiries } from '../components/Enquiries'
import { pathForTab } from '../data/site'

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
        <p>
          Typical questions: is the claim true before an investment; can a system whose
          team has gone be continued; what is proved, assumed, and untested; where did this
          number come from?
        </p>
        <p>
          Engagements begin with a bounded triage: written findings and a go/no-go, then a
          scoped remediation. Remote from Aberystwyth, Wales.
        </p>
        <p>
          Work samples: <a href={pathForTab('darkwow')}>DarkWow</a> (protocol),{' '}
          <a href={pathForTab('rholo')}>Rholo</a> (rescue/port),{' '}
          <a href={pathForTab('azoth')}>Azoth</a> (numerical provenance),{' '}
          <a href={pathForTab('mudra')}>Mudra</a> (proof of trace).
        </p>
      </div>
      <Enquiries />
    </>
  )
}
