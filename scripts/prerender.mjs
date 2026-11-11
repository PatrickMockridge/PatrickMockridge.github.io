import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PAGE_META, TABS, render } from '../dist-ssr/entry-server.js'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const dist = join(root, 'dist')
const base = await readFile(join(dist, 'index.html'), 'utf8')

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')

const SITE_URL = 'https://patrickmockridge.github.io'
const PERSON_ID = `${SITE_URL}/#person`

const PROJECTS = {
  darkwow: {
    name: 'DarkWow',
    description:
      'A private bearer-note system: the note is the asset, possession is authority, and no protocol-level administrator can freeze or confiscate it. ZK Box and Purse, a ZK-based identity/oracle/attestation/stablecoin suite, a no-freeze Promissory Note, an o-cap bridge, Uncle Merkle consensus, a per-block Pedersen supply audit, and a Lean 4 proof-status ledger.',
    codeRepository: 'https://github.com/PatrickMockridge/DarkWow',
    programmingLanguage: 'Rust',
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
  rholo: {
    name: 'Rholo',
    description:
      'Rholo is a Rust node for the rho-calculus, from the RChain lineage: native object capabilities, horizontal scale-out by design, and laws proved at the model and tied to the node.',
    codeRepository: 'https://github.com/rhovision-org/rholo',
    site: 'https://rholo.org/',
    programmingLanguage: 'Rust',
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
  rcash: {
    name: 'R-Cash',
    description:
      'A permissionless multi-currency account and cross-border payments network on Rholo: direct FX pools, local stablecoins, and a transfer contract with one terminal state.',
    codeRepository: 'https://github.com/rhovision-org/r-cash',
    programmingLanguage: ['Rholang', 'Python', 'Rust', 'TypeScript', 'Lean 4', 'TLA+'],
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
  rgen: {
    name: 'R-Gen',
    description:
      'On-chain records for engineering work: a claim records what was done, a credentialed reviewer validates it, and the approved K-Asset keeps its credentials, disputes, and provenance.',
    codeRepository: 'https://github.com/rhovision-org/r-gen',
    programmingLanguage: ['Rholang', 'Lean 4', 'Python', 'Rust'],
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
  rshare: {
    name: 'R-Share',
    description:
      'On-chain booking and rental primitives for Rholo, settled through R-Cash: one booking, escrow, and settlement path for holiday letting, events, ticketing, bike share, car rental, and robotics-as-a-service.',
    codeRepository: 'https://github.com/rhovision-org/r-share',
    programmingLanguage: ['Rholang', 'Rust', 'Python', 'TypeScript', 'Lean 4'],
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
  rsure: {
    name: 'R-Sure',
    description:
      'On-chain insurance market primitives for Rholo: Lloyd’s-style syndicates, brokers, placing slips, policies, and claims, settled through R-Cash and evidenced by R-Gen.',
    codeRepository: 'https://github.com/rhovision-org/r-sure',
    programmingLanguage: ['Rholang', 'Lean 4', 'Rust', 'Python', 'TypeScript'],
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
  azoth: {
    name: 'Azoth',
    description:
      'Chemical-engineering calculations in Python and Rust, where every number carries its provenance, with a browser flowsheet editor and an installable Python package for chemical engineers and AI agents.',
    codeRepository: 'https://github.com/PatrickMockridge/Azoth',
    editor: 'https://patrickmockridge.github.io/azoth/',
    pypi: 'https://pypi.org/project/azoth-engine/',
    programmingLanguage: ['Rust', 'Python'],
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
  mudra: {
    name: 'Mudra',
    description:
      'A proof-of-trace system for spreadsheets and small programs: a constant-size proof that a committed calculation trace is unchanged.',
    codeRepository: 'https://github.com/PatrickMockridge/Mudra',
    programmingLanguage: 'Rust',
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
}

for (const { id } of TABS) {
  const meta = PAGE_META[id]
  const url = `${SITE_URL}${meta.path}`
  const appHtml = render(id)

  let html = base.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`,
  )
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(meta.title)}</title>`,
  )
  html = html.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*>/i,
    `<meta name="description" content="${escapeHtml(meta.description)}">`,
  )
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${url}">`,
  )
  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${escapeHtml(meta.title)}">`,
  )
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[\s\S]*?"\s*>/i,
    `<meta property="og:description" content="${escapeHtml(meta.description)}">`,
  )
  html = html.replace(
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="${url}">`,
  )
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}">`,
  )
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*>/i,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}">`,
  )

  const project = PROJECTS[id]
  const routeLd = project
    ? {
        '@context': 'https://schema.org',
        '@type': 'SoftwareSourceCode',
        name: project.name,
        description: project.description,
        url,
        codeRepository: project.codeRepository,
        sameAs: project.site ?? (project.editor ? [project.editor, project.pypi].filter(Boolean) : undefined),
        programmingLanguage: project.programmingLanguage,
        license: project.license,
        author: { '@type': 'Person', '@id': PERSON_ID },
      }
    : {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: meta.title,
        description: meta.description,
        url,
      }

  html = html.replace(
    '</head>',
    `    <script type="application/ld+json">${JSON.stringify(routeLd)}</script>\n  </head>`,
  )

  const output =
    id === 'cv'
      ? join(dist, 'index.html')
      : join(dist, meta.path.replace(/^\/|\/$/g, ''), 'index.html')

  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, html)
  console.log(`prerendered ${meta.path}`)
}
