import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="position-relative bg-dark p-2">
            <ul className="container text-white list-unstyled d-flex gap-3 my-0 p-2">
                <li>
                    <Link className="text-decoration-none text-light py-2 px-3 bg-black rounded-3" to="/">Home</Link>
                </li>
                <li>
                    <Link className="text-decoration-none text-light py-2 px-3 bg-black rounded-3" to="/empresa">Empresa</Link>
                </li>
                <li>
                    <Link className="text-decoration-none text-light py-2 px-3 bg-black rounded-3" to="/contacto">Contacto</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
