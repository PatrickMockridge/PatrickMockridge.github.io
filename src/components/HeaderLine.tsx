import { MAILTO, SITE } from '../data/site'
import { ThemeToggle } from './ThemeToggle'

export function HeaderLine() {
  return (
    <header className="window-header">
      <a className="brand" href="?tab=cv">
        {SITE.name}
      </a>
      <nav className="header-links" aria-label="Contact and links">
        <a href={SITE.links.github}>GitHub</a>
        <a href={SITE.links.substack}>Substack</a>
        <a href={MAILTO}>Email</a>
        <a href="/cv.pdf">CV (PDF)</a>
        <span className="header-date">{SITE.updated}</span>
        <ThemeToggle />
      </nav>
    </header>
  )
}
