import { Section } from '~/components/ui/Section'
import typography from '~/styles/typography.module.css'
import shared from './shared.module.css'

export function AboutSection() {
  return (
    <Section
      id="about"
      title="A little bit about MACSO"
      className={shared.narrow}
    >
      <p className={typography.prose}>
        MACSO (Massachusetts Computer Science Olympiad) is one of the largest
        competitive programming organizations in Massachusetts. Since our
        founding, we've hosted competitions with 350+ participants, secured over
        $80,000 in sponsorships and prizes, and reached students across
        Massachusetts and around the world through our competitions, educational
        initiatives, and outreach.
      </p>
      <p className={typography.prose}>
        As we prepare for our biggest summer competition yet, we're looking for
        motivated students to join our leadership team and help grow the
        organization.
      </p>
    </Section>
  )
}

export function AlumniSection() {
  return (
    <Section id="alumni" title="Life after MACSO" className={shared.narrow}>
      <p className={typography.prose}>
        Over the past year, members of our leadership team have gone on to
        attend universities including Penn, Johns Hopkins, and the University of
        Michigan. During their freshman year of college, several have earned
        internships at companies such as Bloomberg and Stripe, while others have
        founded startups valued at over seven figures.
      </p>
    </Section>
  )
}
