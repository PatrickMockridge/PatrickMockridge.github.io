export type TabId =
  | 'cv'
  | 'darkwow'
  | 'rchain-rust'
  | 'azoth'
  | 'mudra'
  | 'research'
  | 'contact'

export const TABS: { id: TabId; label: string }[] = [
  { id: 'cv', label: 'CV' },
  { id: 'darkwow', label: 'DarkWow' },
  { id: 'rchain-rust', label: 'rchain-rust' },
  { id: 'azoth', label: 'Azoth' },
  { id: 'mudra', label: 'Mudra' },
  { id: 'research', label: 'Research' },
  { id: 'contact', label: 'Contact' },
]

export const SITE = {
  name: 'Patrick Mockridge',
  location: 'Aberystwyth, Wales',
  email: 'patrickmockridge@gmail.com',
  url: 'https://patrickmockridge.github.io/',
  updated: 'October 2026',
  links: {
    github: 'https://github.com/PatrickMockridge',
    substack: 'https://technologytruth.substack.com/',
    darkwowRepo: 'https://github.com/PatrickMockridge/DarkWow',
    rchainRepo: 'https://github.com/rchain-community/rchain-rust',
    azothRepo: 'https://github.com/PatrickMockridge/Azoth',
    mudraRepo: 'https://github.com/PatrickMockridge/Mudra',
    romeoArchive:
      'https://app.ardrive.io/#/drives/3783e4d5-2ce0-405c-854a-94eb5a4f4b1a?name=Romeo+Juliet+Framework',
    romeoPlaylist:
      'https://www.youtube.com/playlist?list=PLS0PrDysL4A3r9Ntdb159vsT2lmQK3zAW',
    neqsimIssues:
      'https://github.com/equinor/neqsim/issues?q=author%3APatrickMockridge',
  },
} as const

export const MAILTO = `mailto:${SITE.email}`
