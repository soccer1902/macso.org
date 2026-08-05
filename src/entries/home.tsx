import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HomePage } from '~/pages/HomePage'
import '~/styles/tokens.css'
import '~/styles/base.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
