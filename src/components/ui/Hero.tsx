import type { ReactNode } from 'react'
import animations from '~/styles/animations.module.css'
import typography from '~/styles/typography.module.css'
import styles from './Hero.module.css'

export function Highlight({ children }: { children: ReactNode }) {
  return <span className={typography.highlight}>{children}</span>
}

export function Hero({ children }: { children: ReactNode }) {
  return <section className={styles.hero}>{children}</section>
}

export function HeroTitle({ children }: { children: ReactNode }) {
  return <h1 className={animations.rise1}>{children}</h1>
}

type HeroStatusProps = {
  label: ReactNode
  value: ReactNode
}

export function HeroStatus({ label, value }: HeroStatusProps) {
  return (
    <p className={`${styles.status} ${animations.rise2}`} role="status">
      <strong>{label}</strong>
      <span className={styles.arrow} aria-hidden="true">
        &rarr;
      </span>
      <span className={styles.oval}>{value}</span>
    </p>
  )
}

export function HeroActions({ children }: { children: ReactNode }) {
  return (
    <div className={`${styles.actions} ${animations.rise3}`}>{children}</div>
  )
}
