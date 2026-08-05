export type PageId = 'home' | 'careers'

export const pageMeta: Record<PageId, { topId: string }> = {
  home: { topId: 'notebook-top' },
  careers: { topId: 'careers-top' },
}
