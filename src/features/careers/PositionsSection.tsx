import { Pin } from '~/components/ui/Pin'
import { Section } from '~/components/ui/Section'
import { roles } from '~/data/careers'
import typography from '~/styles/typography.module.css'
import styles from './PositionsSection.module.css'

export function PositionsSection() {
  return (
    <Section id="positions" title="Available Positions">
      <p className={typography.lede}>
        This is a volunteer leadership internship. Verified community service
        hours are provided for students who successfully complete their
        responsibilities.
      </p>
      <div className={styles.roles}>
        {roles.map((role) => (
          <div
            className={
              role.openEnded ? `${styles.card} ${styles.open}` : styles.card
            }
            key={role.title}
          >
            {!role.openEnded && <Pin />}
            <p className={styles.hours}>{role.hours}</p>
            <h3>{role.title}</h3>
            <p>{role.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
