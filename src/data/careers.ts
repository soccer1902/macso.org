export type Stat = {
  readonly value: string
  readonly label: string
}

export const stats: readonly Stat[] = [
  { value: '350+', label: 'contest participants' },
  { value: '$80,000+', label: 'sponsorships & prizes' },
  { value: '6', label: 'open positions' },
]

export type Role = {
  readonly title: string
  readonly hours: string
  readonly description: string
  readonly openEnded?: boolean
}

export const roles: readonly Role[] = [
  {
    title: 'Operations Lead',
    hours: '~20 hrs/week',
    description:
      'Coordinate the logistics, scheduling, and day-of operations that keep our competitions running smoothly.',
  },
  {
    title: 'Problem Writer',
    hours: '~15 hrs/week',
    description:
      'Design and test competitive programming problems for our contests. USACO Silver+ experience or equivalent preferred.',
  },
  {
    title: 'Fundraising Lead',
    hours: '~15 hrs/week',
    description:
      'Build relationships with sponsors and help secure the funding and prizes that power MACSO.',
  },
  {
    title: 'Outreach Lead',
    hours: '~10–15 hrs/week',
    description:
      'Spread the word about MACSO to schools and CS communities across Massachusetts. Strong communication skills required.',
  },
  {
    title: 'Website Developer',
    hours: '~5–10 hrs/week',
    description:
      'Help maintain and improve macso.org. Familiarity with HTML/CSS/JS is a plus.',
  },
  {
    title: 'Your Dream Role',
    hours: 'you tell us',
    description:
      "Have a skill we didn't list? We're open to suggestions. Pitch us the role you'd create.",
    openEnded: true,
  },
]

export type ApplicationStep = {
  readonly number: string
  readonly title: string
  readonly description: string
}

export const applicationSteps: readonly ApplicationStep[] = [
  {
    number: '01.',
    title: 'Apply',
    description:
      'Fill out the application form. Applications are reviewed on a rolling basis, so apply early.',
  },
  {
    number: '02.',
    title: 'Review',
    description:
      'We read every application first and shortlist candidates for the next round.',
  },
  {
    number: '03.',
    title: 'Interview',
    description:
      'Selected candidates are invited to an online or in-person interview.',
  },
]

export const applicationFacts: readonly string[] = [
  'Applicants should live in or near Massachusetts.',
  'This is a volunteer position. Verified community service hours are provided upon successful completion of your responsibilities.',
  "It's a competitive process, so tell us clearly what you'd bring to the team.",
]
