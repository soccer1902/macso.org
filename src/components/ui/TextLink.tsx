import type { AnchorHTMLAttributes } from 'react'
import typography from '~/styles/typography.module.css'

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function TextLink({ className, ...props }: TextLinkProps) {
  return (
    <a
      className={className ? `${typography.link} ${className}` : typography.link}
      {...props}
    />
  )
}
