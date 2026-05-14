import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./components/Navbar"
import Rotas from "./Routes/Route"

const ReactRouter = () => {
    return (
        <>
            <Router>
                {/* Navegacao */}
                <Navbar />

                {/* Rotas */}
                <Rotas />
            </Router>
        </>
    )
}

export default ReactRouter
