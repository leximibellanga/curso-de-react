import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Importando aulas 
import PrimeiroContacto from './pages/PrimeiroContacto/PrimeiroContacto.jsx'
import AvancandoProps from './pages/AvancandoProps/AvancandoProps.jsx'
import EventosReact from './pages/EventosReact/Events.jsx'
import UseState from './pages/useState/useState.jsx'
import MetodosProps from './pages/MetodosProps/MetodosProps.jsx'
import RenderizacaoCondicional from './pages/RenderizacaoCondicional/RenderizacaoCondicional.jsx'
import RenderizacaoListas from './pages/RenderizacaoListas/RenderizacaoListas.jsx'
import StateLift from './pages/StateLift/StateLift.jsx'
import ReactRouter from './pages/ReactRouter/ReactRouter.jsx'
import ReactIcons from './pages/ReactIcons/ReactIcons.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />


{/* =================== AULAS ======================== */}
    {/* Aula 01 */}
    {/* <PrimeiroContacto /> */}
    {/* =============================== */}


    {/* Aula08 */}
    {/* <AvancandoProps /> */}
    {/* =============================== */}


    {/* Aula09 */}
    {/* <EventosReact /> */}
    {/* =============================== */}


    {/* Aula10 */}
    {/* <UseState /> */}
    {/* =============================== */}


    {/* Aula11 */}
    {/* <MetodosProps /> */}
    {/* =============================== */}


    {/* Aula12 */}
    {/* <RenderizacaoCondicional /> */}
    {/* =============================== */}


    {/* Aula13 */}
    {/* <RenderizacaoListas /> */}
    {/* =============================== */}


    {/* Aula14 */}
    {/* <StateLift /> */}
    {/* =============================== */}
    

    {/* Aula15 */}
    {/* <ReactRouter /> */}
    {/* =============================== */}
    

    {/* Aula16 */}
    {/* <ReactIcons /> */}
    {/* =============================== */}

  </StrictMode>,
)

