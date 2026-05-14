import { Routes, Route } from "react-router-dom"
// Paginas
import Home from "../pages/Home"
import Empresa from "../pages/Empresa"
import Contacto from "../pages/Contacto"


export default function Rotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
    )
}