import { Section } from '~/components/ui/Section'
import { site } from '~/data/site'
import typography from '~/styles/typography.module.css'
import { VenueMap } from './VenueMap'
import styles from './LocationSection.module.css'

export function LocationSection() {
  return (
    <Section id="location" title="Where to Find Us" className={styles.location}>
      <p className={typography.lede}>
        {site.venue.name}, {site.venue.address}
      </p>
      <VenueMap />
    </Section>
  )
}
