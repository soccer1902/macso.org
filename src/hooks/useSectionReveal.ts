import { useEffect, type RefObject } from 'react'

const FAILSAFE_MS = 2500

export function useSectionReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const sections = container.querySelectorAll<HTMLElement>(':scope > section')

    const reveal = (el: HTMLElement) => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          reveal(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    for (const el of sections) {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) continue
      el.style.opacity = '0'
      el.style.transform = 'translateY(18px)'
      el.style.transition = 'opacity .65s ease, transform .65s ease'
      observer.observe(el)
    }

    const failsafe = window.setTimeout(() => {
      for (const el of sections) reveal(el)
    }, FAILSAFE_MS)

    return () => {
      observer.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [containerRef])
}
