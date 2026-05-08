import styles from "./styles/Event.module.css"


const Event = ({ nr }) => {
    // funcao que eh executada quando o botao eh clicado
    const myEvent = () => {
        alert(`O Botao foi ativado com sucesso! BTN ${nr}`)
    }

    return (
        <div className={styles.divContainer}>
            <h3>Evento</h3>
            <p>Clique para disparar um evento:</p>
            <button className={styles.btn} onClick={myEvent}>Ativar btn {nr}</button>
        </div>
    )
}

export default Event