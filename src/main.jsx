import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Importando aulas 
import PrimeiroContacto from './pages/PrimeiroContacto/PrimeiroContacto.jsx'
import AvancandoProps from './pages/AvancandoProps/AvancandoProps.jsx'
import EventosReact from './pages/EventosReact/Events.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Aula 01 */}
    {/* <PrimeiroContacto /> */}
    {/* =============================== */}


    {/* Aula07 */}
    {/* <AvancandoProps /> */}
    {/* =============================== */}


    {/* Aula08 */}
    <EventosReact />
    {/* =============================== */}



    




    {/* <App /> */}
  </StrictMode>,
)

