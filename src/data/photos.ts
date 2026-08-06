export type Photo = {
  readonly src: string
  readonly alt: string
  readonly caption: string
  readonly width?: number
  readonly height?: number
}

const FALL_25_COUNT = 10

export const fall25Photos: readonly Photo[] = Array.from(
  { length: FALL_25_COUNT },
  (_, i) => {
    const n = i + 1
    return {
      src: `/images/fall25/${n}.webp`,
      alt: `MACSO Fall 2025 contest photo ${n}`,
      caption: `macso fall '25 · #${n}`,
      width: 800,
      height: 600,
    }
  },
)

const MACSO_24_INDICES = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
] as const

export const macso24Photos: readonly Photo[] = MACSO_24_INDICES.map((n) => ({
  src: `https://static.macso.org/output/low_res/_${n}.webp`,
  alt: `MACSO 2024 contest photo ${n}`,
  caption: `macso '24 · #${n}`,
}))
