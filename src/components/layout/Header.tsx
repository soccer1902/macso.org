import { navLinks } from '~/data/site'
import { type PageId, pageMeta } from './pages'
import styles from './Header.module.css'

type HeaderProps = {
  page: PageId
}

export function Header({ page }: HeaderProps) {
  const { topId } = pageMeta[page]
  const isHome = page === 'home'
  const hashBase = isHome ? '' : 'index.html'

  return (
    <header className={styles.header} id={topId}>
      <a className={styles.brand} href={isHome ? '#notebook-top' : 'index.html'}>
        macso<span>.</span>
      </a>
      <nav className={styles.nav} aria-label="Main">
        {navLinks.map(({ label, hash }) => (
          <a key={hash} href={`${hashBase}${hash}`}>
            {label}
          </a>
        ))}
        <a
          className={styles.hire}
          href="/careers"
          aria-current={page === 'careers' ? 'page' : undefined}
        >
          We're hiring &rarr;
        </a>
      </nav>
    </header>
  )
}
