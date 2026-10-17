import { MAILTO, SITE } from '../data/site'

export function Enquiries() {
  return (
    <div className="enquiries">
      <p>
        <strong>Enquiries:</strong> <a href={MAILTO}>{SITE.email}</a>. A short note
        describing the system and the question is sufficient.
      </p>
      <p>
        {SITE.location} · <a href={SITE.links.github}>GitHub</a> ·{' '}
        <a href={SITE.links.substack}>Substack</a> · <a href="/cv.pdf">CV (PDF)</a>
      </p>
    </div>
  )
}
