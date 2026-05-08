import styles from "./styles/Event.module.css"


const FormEvent = () => {
    // funcao que eh executada quando o botao eh clicado
    const cadastrarEvent = (e) => {
        e.preventDefault()
        let nome = document.getElementById('nome').value

        if (nome !== "") {
            alert(`Usuario ${nome}, cadastrado com sucesso!`)
        } else {
            alert(`Preencha o campo, por favor`)
        }
        
    }

    return (
        <form onSubmit={cadastrarEvent} className={styles.form}>
            <div>
                <label htmlFor="nome">Nome:</label> 
                <br />
                <input className={styles.input} type="text" name="nome" id="nome" />
            </div>
            <div>
                <button className={styles.btn} type="submit">Cadastrar</button>
            </div>
        </form>
        
    )
}

export default FormEvent