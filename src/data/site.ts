export const site = {
  name: 'Massachusetts Computer Science Olympiad',
  shortName: 'MACSO',
  email: 'team@macso.org',
  registrationForm: 'https://forms.gle/aJY8tYkmpUaRMRQcA',
  applicationForm: 'https://forms.gle/vrjsWqovnnwBsivb6',
  discord: 'https://discord.gg/cX7tmKwJ8f',
  instagram:
    'https://www.instagram.com/bhs.computerscience?utm_source=ig_web_button_share_sheet&igshid=ZDNlZDc0MzIxNw==',
  instagramHandle: '@bhs.computerscience',
  venue: {
    name: 'The Foundry',
    address: '101 Rogers Street, Cambridge, MA 02142',
    lat: 42.36662,
    lng: -71.08276,
  },
  credits: {
    lucasChen: 'https://lucasrchen.com',
    mishaZhernevskii:
      'https://www.linkedin.com/in/mikhail-zhernevskii-117477282',
  },
} as const

export type NavLink = {
  readonly label: string
  readonly hash: string
}

export const navLinks: readonly NavLink[] = [
  { label: 'Highlights', hash: '#highlights' },
  { label: 'Results', hash: '#results' },
  { label: 'FAQ', hash: '#faq' },
  { label: 'Team', hash: '#team' },
  { label: 'Sponsors', hash: '#sponsors' },
  { label: 'Location', hash: '#location' },
]
