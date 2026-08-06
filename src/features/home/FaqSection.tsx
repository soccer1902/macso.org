import { Section } from '~/components/ui/Section'
import { TextLink } from '~/components/ui/TextLink'
import { faqItems } from '~/data/faq'
import { site } from '~/data/site'
import typography from '~/styles/typography.module.css'
import styles from './FaqSection.module.css'

export function FaqSection() {
  return (
    <Section id="faq" title="Questions we get a lot" className={styles.faq}>
      <p className={`${typography.lede} ${styles.contact}`}>
        Contact <TextLink href={`mailto:${site.email}`}>{site.email}</TextLink>{' '}
        for any questions.
      </p>
      {faqItems.map((item) => (
        <details key={item.question}>
          <summary>
            <span className={styles.q} aria-hidden="true">
              Q.
            </span>
            {item.question}
          </summary>
          <p>
            <span className={styles.a} aria-hidden="true">
              A.
            </span>
            {item.answer}
          </p>
        </details>
      ))}
    </Section>
  )
}
