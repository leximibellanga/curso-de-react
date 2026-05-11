import { useState } from "react"

const Condicional = () => {
    // states
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    const enviarEmail = (e) => {
        e.preventDefault()
        setUserEmail(email)

        userEmail ? alert(userEmail) : alert("VAziOOOOO...")
    }

    const limparEmail = () => { setUserEmail("") }

    return (
        <>
            <div className="p-3 bg-ligth text-center">
                <h2>Cadastre o seu email:</h2>

                <form>
                    <div className="mb-2">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Digite o seu email..."
                            className="w-25 form-control m-auto"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit" onClick={enviarEmail} className="btn btn-sm btn-success">
                        Enviar email
                    </button>

                    {userEmail ? (
                        <div className="mt-5 bg-dark text-center text-light py-3 px-2">
                            <p>O email do usuario eh: <strong>{userEmail}</strong></p>
                            <button type="submit" onClick={limparEmail} className="btn btn-sm btn-danger">
                                Limpar email
                            </button>
                        </div>
                    ) : (
                        <div className="mt-5 bg-dark text-center text-light py-3 px-2 ">
                            <p className="m-0">Nao foi encontrado nenhum email</p>
                        </div>
                    ) }
                </form>
            </div>
        </>
    )
}

export default Condicional
