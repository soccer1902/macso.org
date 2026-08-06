import { Button } from '~/components/ui/Button'
import { Pin } from '~/components/ui/Pin'
import { Section } from '~/components/ui/Section'
import { TextLink } from '~/components/ui/TextLink'
import { ArrowRightIcon } from '~/components/ui/icons'
import { site } from '~/data/site'
import styles from './ApplyCta.module.css'

export function ApplyCta() {
  return (
    <Section id="apply" className={styles.section}>
      <div className={styles.card}>
        <Pin />
        <h2>Ready? Apply to MACSO</h2>
        <p className={styles.lede}>
          We look forward to reading your application. Good luck!
        </p>
        <Button href={site.applicationForm}>
          Apply Now
          <ArrowRightIcon />
        </Button>
        <p className={styles.note}>
          questions?{' '}
          <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>
        </p>
      </div>
    </Section>
  )
}
