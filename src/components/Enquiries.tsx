import { MAILTO, SITE } from '../data/site'

export function Enquiries() {
  return (
    <div className="enquiries">
      <p>
        <strong>Enquiries:</strong> <a href={MAILTO}>{SITE.email}</a>. A short note
        describing the system and the question is sufficient.
      </p>
      <p>
        {SITE.location} · <a href={SITE.links.github} target="_blank" rel="noopener noreferrer">GitHub</a> ·{' '}
        <a href={SITE.links.substack} target="_blank" rel="noopener noreferrer">Substack</a> · <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV (PDF)</a>
      </p>
    </div>
  )
}
