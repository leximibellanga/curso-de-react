import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este componente vai guardar a seguinte frase: "So sei que nada sei".</p>
        </div>
    )
}


export default Frase