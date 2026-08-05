import type { SVGProps } from 'react'

function StrokeIcon({
  strokeWidth = 2.2,
  ...props
}: SVGProps<SVGSVGElement> & { strokeWidth?: number }) {
  return (
    <svg
      aria-hidden="true"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    />
  )
}

export function PencilIcon() {
  return (
    <StrokeIcon>
      <path d="M17 3l4 4L8 20l-5 1 1-5z" />
    </StrokeIcon>
  )
}

export function ChatIcon() {
  return (
    <StrokeIcon>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
    </StrokeIcon>
  )
}

export function ArrowRightIcon() {
  return (
    <StrokeIcon strokeWidth={2.4}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </StrokeIcon>
  )
}

export function MailIcon() {
  return (
    <StrokeIcon>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </StrokeIcon>
  )
}
