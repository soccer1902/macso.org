import type { ReactNode } from 'react'
import styles from './Section.module.css'

type SectionProps = {
  id?: string
  title?: ReactNode
  className?: string
  children?: ReactNode
}

export function Section({ id, title, className, children }: SectionProps) {
  const classes = className ? `${styles.section} ${className}` : styles.section

  return (
    <section className={classes} id={id}>
      {title !== undefined && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  )
}
