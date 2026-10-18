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
      'A Layer 1 design for private organisations on a public chain, with ZK-only Box and Purse, fully ZK identity/oracle/attestation/stablecoin, a promissory note, an object-capability bridge, Uncle Merkle consensus, and a supply audit.',
    codeRepository: 'https://github.com/PatrickMockridge/DarkWow',
    programmingLanguage: 'Rust',
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
  'rnode-rust': {
    name: 'rnode-rust',
    description:
      'A Rust node for the rho-calculus: native object capabilities, horizontal scale-out by design, and laws proved at the model and tied to the node.',
    codeRepository: 'https://github.com/rchain-community/rchain-rust',
    programmingLanguage: 'Rust',
    license: 'https://www.gnu.org/licenses/agpl-3.0.html',
  },
  azoth: {
    name: 'Azoth',
    description:
      'Chemical-engineering calculations in Python and Rust, where every number carries its provenance.',
    codeRepository: 'https://github.com/PatrickMockridge/Azoth',
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
