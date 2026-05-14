import { useState } from "react"
import SeuNome from "./components/SeuNome"
import Saudacao from "./components/Saudacao"

const StateLift = () => {
    const [nome, setNome] = useState()

    return (
        <main className="m-3">
            <section className="container text-center">
                <h1>State Lift</h1>
                <hr />
                <SeuNome setNome={setNome} />
                <br />
                <Saudacao nome={nome} />
            </section>
        </main>
    )
}

export default StateLift