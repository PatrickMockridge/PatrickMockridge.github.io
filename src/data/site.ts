export type TabId =
  | 'cv'
  | 'darkwow'
  | 'rholo'
  | 'azoth'
  | 'mudra'
  | 'research'
  | 'contact'

export const TABS: { id: TabId; label: string }[] = [
  { id: 'cv', label: 'CV' },
  { id: 'darkwow', label: 'DarkWow' },
  { id: 'rholo', label: 'Rholo' },
  { id: 'azoth', label: 'Azoth' },
  { id: 'mudra', label: 'Mudra' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
]

export const LEGACY_TAB_ALIASES: Record<string, TabId> = {
  'rchain-rust': 'rholo',
  'rnode-rust': 'rholo',
}

export const PAGE_META: Record<
  TabId,
  { title: string; description: string; path: string; updated: string }
> = {
  cv: {
    title: 'Patrick Mockridge — Protocol engineer',
    description:
      'Independent protocol engineer working on privacy protocols, consensus systems, formal verification, and numerical provenance. Selected work: DarkWow, Rholo, Azoth, Mudra.',
    path: '/',
    updated: '2026-10-30',
  },
  darkwow: {
    title: 'DarkWow — Patrick Mockridge',
    description:
      'A private bearer-note system: the note is the asset, possession is authority, and no protocol-level administrator can freeze or confiscate it. ZK Box and Purse, a ZK-based identity/oracle/attestation/stablecoin suite, a no-freeze Promissory Note, an o-cap bridge, a per-block Pedersen supply audit, and a Lean 4 proof-status ledger.',
    path: '/darkwow/',
    updated: '2026-10-30',
  },
  rholo: {
    title: 'Rholo — Patrick Mockridge',
    description:
      'Rholo is a Rust node for the ρ-calculus: native object capabilities, horizontal scale-out by design, and laws proved at the model and tied to the node.',
    path: '/rholo/',
    updated: '2026-10-30',
  },
  azoth: {
    title: 'Azoth — Patrick Mockridge',
    description:
      'Chemical-engineering calculations in Python and Rust, where every number carries its provenance.',
    path: '/azoth/',
    updated: '2026-10-30',
  },
  mudra: {
    title: 'Mudra — Patrick Mockridge',
    description:
      'A proof-of-trace system for spreadsheets and small programs: a constant-size proof that a committed calculation trace is unchanged.',
    path: '/mudra/',
    updated: '2026-10-26',
  },
  research: {
    title: 'Research & Writing — Patrick Mockridge',
    description:
      'Research and writing on the Romeo–Juliet critical risk-analysis framework, network influence, secrecy, compromise, the Ingenesist/UNISS simulations, an NFL Big Data Bowl entry on the Combine pressure signal and playing-time allocation gap, and a free-agent valuation of the role premium.',
    path: '/research/',
    updated: '2026-10-30',
  },
  contact: {
    title: 'Enquiries — Patrick Mockridge',
    description: 'Protocol review, rescue, verification, and advisory enquiries.',
    path: '/contact/',
    updated: '2026-10-26',
  },
}

export function pathForTab(tab: TabId): string {
  return PAGE_META[tab].path
}

export function tabForPath(pathname: string): TabId | null {
  const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`
  const entry = (Object.entries(PAGE_META) as [TabId, (typeof PAGE_META)[TabId]][]).find(
    ([, meta]) => meta.path === normalized,
  )
  return entry ? entry[0] : null
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export function formatUpdated(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number)
  return `${day} ${MONTHS[month - 1]} ${year}`
}

export const SITE = {
  name: 'Patrick Mockridge',
  location: 'Aberystwyth, Wales',
  email: 'patrickmockridge@gmail.com',
  url: 'https://patrickmockridge.github.io/',
  updated: 'October 2026',
  links: {
    github: 'https://github.com/PatrickMockridge',
    substack: 'https://technologytruth.substack.com/',
    fitba: 'https://patrickmockridge.github.io/fitba/',
    darkwowRepo: 'https://github.com/PatrickMockridge/DarkWow',
    rholoRepo: 'https://github.com/rhovision-org/rholo',
    azothRepo: 'https://github.com/PatrickMockridge/Azoth',
    mudraRepo: 'https://github.com/PatrickMockridge/Mudra',
    romeoArchive:
      'https://app.ardrive.io/#/drives/3783e4d5-2ce0-405c-854a-94eb5a4f4b1a?name=Romeo+Juliet+Framework',
    romeoPlaylist:
      'https://www.youtube.com/playlist?list=PLS0PrDysL4A3r9Ntdb159vsT2lmQK3zAW',
    ingenesistArchive:
      'https://app.ardrive.io/#/drives/57a3e07f-7adb-4bcf-b013-154869c56e33?name=Ingenesist+Project',
    neqsimIssues:
      'https://github.com/equinor/neqsim/issues?q=author%3APatrickMockridge',
    gorki: 'https://github.com/Gorki-Project',
    gorkiLegacy: 'https://github.com/Gorki-Project/legacy',
    rgov: 'https://github.com/rhovision-org/rgov',
    rgovPost: 'https://technologytruth.substack.com/p/rgov-and-rhobot',
    testnetStatus: 'https://testnet.rhobot.net/status',
    nflBigDataBowl: 'https://github.com/PatrickMockridge/nfl-big-data-bowl-2027',
    nflBigDataBowlWriteup:
      'https://github.com/PatrickMockridge/nfl-big-data-bowl-2027/blob/main/writeup/submission.md',
    nflFreeAgency:
      'https://github.com/PatrickMockridge/nfl-big-data-bowl-2027/blob/main/implications/free_agency/README.md',
    nflBigDataBowlNotebook:
      'https://www.kaggle.com/code/patrickm/nfl-bdb-2027-combine-allocation-price',
    nflBigDataBowlCompetition:
      'https://www.kaggle.com/competitions/nfl-big-data-bowl-2027',
  },
} as const

export const MAILTO = `mailto:${SITE.email}`
