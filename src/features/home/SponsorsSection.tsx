import { Section } from '~/components/ui/Section'
import { partners, sponsors } from '~/data/sponsors'
import typography from '~/styles/typography.module.css'
import { TileGrid } from './TileGrid'

export function SponsorsSection() {
  return (
    <Section id="sponsors" title="Our Sponsors">
      <p className={typography.lede}>A huge thanks to our sponsors.</p>
      <TileGrid tiles={sponsors} />
    </Section>
  )
}

export function PartnersSection() {
  return (
    <Section id="partners" title="Partner Competitions">
      <p className={typography.lede}>
        We recommend trying their competitions as well!
      </p>
      <TileGrid tiles={partners} wide />
    </Section>
  )
}
