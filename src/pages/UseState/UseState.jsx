import { useState } from "react"


const UseState = () => {
    const cadastrarUsuario = (e) => {
        e.preventDefault()
        
        if (name === "" && email === "" && senha === "") {
            alert("ERRO!!! Por favor preencha todos os campos!")
        } else if (senha.length < 4) {
            alert("Sua senha eh invalida, deve ter no minimo 4 caracteres")
        } else {
            alert(`Usuario cadastrado!
NOME: ${name} | EMAIL: ${email} | SENHA: ${senha}`)
        }
    }

    const [name, setName] = useState("")
    const [email, setEmail] = useState("seu@email.com")
    const [senha, setSenha] = useState("1234")


    return (
        <>
            <div className="container vh-100 d-flex align-items-center justify-content-center">
                <form onSubmit={cadastrarUsuario} className="w-75">
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input 
                            type="text" 
                            name="nome" 
                            id="nome" 
                            className="form-control" 
                            placeholder="Informe seu nome" 
                            value={name}  // serve para guardar o valor padrao passado na useState("<valorPadrao>")
                            onChange={(e) => setName(e.target.value)}  // Serve para atribuir um valor para a useState()
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="Informe seu email" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="div-senha mb-3">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input 
                            type="password" 
                            name="senha" 
                            id="senha" 
                            className="form-control" 
                            placeholder="Informe sua senha" 
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                        {/* <i style={{fontStyle: "normal"}} id={mostrarSenha}>👁️</i> */}
                    </div>

                    <button type="submit" className="btn btn-sm btn-success">Ativar</button>
                </form>
            </div>
        </>
    )
}

export default UseState