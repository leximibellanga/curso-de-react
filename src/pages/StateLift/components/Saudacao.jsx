
const Saudacao = ({ nome }) => {
    const gerarSaudacao = (nome) => {
        return `Ola ${nome}!`
    }

    return (
        <>{nome && <p className="text-start p-2 bg-dark text-white">{gerarSaudacao(nome)}</p>}</>
    )
}

export default Saudacao
