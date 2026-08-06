import { Section } from '~/components/ui/Section'
import { fall25Photos, macso24Photos } from '~/data/photos'
import typography from '~/styles/typography.module.css'
import { PhotoStrip } from './PhotoStrip'

export function HighlightsSection() {
  return (
    <Section id="highlights" title="MACSO Fall '25">
      <PhotoStrip photos={fall25Photos} />
      <h3 className={typography.subhead}>MACSO '24</h3>
      <PhotoStrip photos={macso24Photos} />
    </Section>
  )
}
