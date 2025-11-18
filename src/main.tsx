import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "@radix-ui/themes/styles.css";
import { ArtisanApp } from './ArtisanApp';


createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ArtisanApp />
    </StrictMode>,
)
