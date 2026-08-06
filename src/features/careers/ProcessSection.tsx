import { Section } from '~/components/ui/Section'
import { applicationFacts, applicationSteps } from '~/data/careers'
import styles from './ProcessSection.module.css'

export function ProcessSection() {
  return (
    <Section id="process" title="Application Process">
      <div className={styles.steps}>
        {applicationSteps.map((step) => (
          <div className={styles.step} key={step.number}>
            <p className={styles.number}>{step.number}</p>
            <p className={styles.stepTitle}>{step.title}</p>
            <p className={styles.description}>{step.description}</p>
          </div>
        ))}
      </div>
      <ul className={styles.facts}>
        {applicationFacts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </Section>
  )
}
