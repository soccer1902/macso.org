import { PageLayout } from '~/components/layout/PageLayout'
import { AboutSection, AlumniSection } from '~/features/careers/AboutSection'
import { ApplyCta } from '~/features/careers/ApplyCta'
import { CareersHero } from '~/features/careers/CareersHero'
import { PositionsSection } from '~/features/careers/PositionsSection'
import { ProcessSection } from '~/features/careers/ProcessSection'

export function CareersPage() {
  return (
    <PageLayout page="careers">
      <CareersHero />
      <AboutSection />
      <PositionsSection />
      <ProcessSection />
      <AlumniSection />
      <ApplyCta />
    </PageLayout>
  )
}
