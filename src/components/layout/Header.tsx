import { useEffect, useState } from 'react'
import { navLinks } from '~/data/site'
import { type PageId, pageMeta } from './pages'
import styles from './Header.module.css'

type HeaderProps = {
  page: PageId
}

export function Header({ page }: HeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const { topId } = pageMeta[page]
  const isHome = page === 'home'
  const hashBase = isHome ? '' : 'index.html'

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('macso-theme') as 'light' | 'dark' | null
    const nextTheme = savedTheme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
  }, [])

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('macso-theme', nextTheme)
  }

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
        <button
          className={styles.themeButton}
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '☾' : '☀'}
        </button>
        <a
          className={styles.hire}
          href="careers.html"
          aria-current={page === 'careers' ? 'page' : undefined}
        >
          We're hiring &rarr;
        </a>
      </nav>
    </header>
  )
}
