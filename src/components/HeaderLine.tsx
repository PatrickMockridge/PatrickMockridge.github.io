import { MAILTO, SITE, pathForTab } from '../data/site'
import { ThemeToggle } from './ThemeToggle'

export function HeaderLine() {
  return (
    <header className="window-header">
      <a className="brand" href={pathForTab('cv')}>
        {SITE.name}
      </a>
      <nav className="header-links" aria-label="Contact and links">
        <a href={SITE.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={SITE.links.substack} target="_blank" rel="noopener noreferrer">Substack</a>
        <a href={MAILTO}>Email</a>
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">CV (PDF)</a>
        <span className="header-date">{SITE.updated}</span>
        <ThemeToggle />
      </nav>
    </header>
  )
}
