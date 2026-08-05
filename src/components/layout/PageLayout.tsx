import { useRef, type ReactNode } from 'react'
import { useSectionReveal } from '~/hooks/useSectionReveal'
import { Footer } from './Footer'
import { Header } from './Header'
import { SkipLink } from './SkipLink'
import type { PageId } from './pages'
import styles from './PageLayout.module.css'

type PageLayoutProps = {
  page: PageId
  children: ReactNode
}

export function PageLayout({ page, children }: PageLayoutProps) {
  const mainRef = useRef<HTMLElement>(null)
  useSectionReveal(mainRef)

  return (
    <>
      <SkipLink />
      <Header page={page} />
      <main className={styles.main} id="main" ref={mainRef}>
        {children}
      </main>
      <Footer page={page} />
    </>
  )
}
