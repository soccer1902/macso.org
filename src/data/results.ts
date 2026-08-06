export type Placement = {
  readonly award: string | null
  readonly name: string
  readonly school: string
}

export type Scoreboard = {
  readonly title: string
  readonly rows: readonly Placement[]
}

export const scoreboards: readonly Scoreboard[] = [
  {
    title: 'In-Person HS Finals',
    rows: [
      { award: '1st', name: 'Mark Zhou', school: 'George School, PA' },
      {
        award: '2nd',
        name: 'Artur Gilfanov',
        school: 'Fairview High School, CO',
      },
      {
        award: '3rd',
        name: 'Yancheng Zhao',
        school: 'Buckingham Browne & Nichols School, MA',
      },
      {
        award: null,
        name: 'Zachary Rogers',
        school: 'Brookline High School, MA',
      },
      {
        award: null,
        name: 'Leran Tao',
        school: 'Newton North High School, MA',
      },
      {
        award: null,
        name: 'Milo Chourmet',
        school: 'Roxbury Latin School, MA',
      },
      { award: null, name: 'Austin Liu', school: 'Belmont High School, MA' },
    ],
  },
  {
    title: 'Online Open Finals',
    rows: [
      {
        award: '1st',
        name: 'Jaehyun Koo',
        school: 'Massachusetts Institute of Technology, MA',
      },
      { award: '2nd', name: 'Julian Wu', school: 'Westview High School, CA' },
      {
        award: '3rd',
        name: 'Yu Zheyuan',
        school: 'NUS High School of Math and Science, Singapore',
      },
    ],
  },
]
