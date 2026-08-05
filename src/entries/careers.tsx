import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CareersPage } from '~/pages/CareersPage'
import '~/styles/tokens.css'
import '~/styles/base.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CareersPage />
  </StrictMode>,
)
