import { Button } from '~/components/ui/Button'
import {
  Hero,
  HeroActions,
  HeroStatus,
  HeroTitle,
  Highlight,
} from '~/components/ui/Hero'
import { ArrowRightIcon, MailIcon } from '~/components/ui/icons'
import animations from '~/styles/animations.module.css'
import { site } from '~/data/site'
import { stats } from '~/data/careers'
import styles from './CareersHero.module.css'

export function CareersHero() {
  return (
    <Hero>
      <HeroTitle>
        Join the <Highlight>MACSO team</Highlight>
      </HeroTitle>
      <HeroStatus label="Leadership Internship" value="Applications open" />
      <HeroActions>
        <Button href={site.applicationForm}>
          Apply Now
          <ArrowRightIcon />
        </Button>
        <Button href={`mailto:${site.email}`} variant="ghost">
          <MailIcon />
          Email Us
        </Button>
      </HeroActions>
      <div className={`${styles.stats} ${animations.rise4}`}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className={styles.value}>{stat.value}</p>
            <p className={styles.label}>{stat.label}</p>
          </div>
        ))}
      </div>
    </Hero>
  )
}
