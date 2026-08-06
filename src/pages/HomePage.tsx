import { PageLayout } from '~/components/layout/PageLayout'
import { FaqSection } from '~/features/home/FaqSection'
import { HighlightsSection } from '~/features/home/HighlightsSection'
import { HomeHero } from '~/features/home/HomeHero'
import { IntroSection } from '~/features/home/IntroSection'
import { LocationSection } from '~/features/home/LocationSection'
import { ResourcesSection } from '~/features/home/ResourcesSection'
import { ResultsSection } from '~/features/home/ResultsSection'
import {
  PartnersSection,
  SponsorsSection,
} from '~/features/home/SponsorsSection'
import { TeamSection } from '~/features/home/TeamSection'

export function HomePage() {
  return (
    <PageLayout page="home">
      <HomeHero />
      <IntroSection />
      <HighlightsSection />
      <ResultsSection />
      <FaqSection />
      <TeamSection />
      <SponsorsSection />
      <PartnersSection />
      <ResourcesSection />
      <LocationSection />
    </PageLayout>
  )
}
