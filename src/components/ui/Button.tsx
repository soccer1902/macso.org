import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'primary' | 'ghost'
  children: ReactNode
}

export function Button({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = [styles.btn, styles[variant], className]
    .filter(Boolean)
    .join(' ')

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}
