import styles from './MeuNome.module.css'


function MeuNome(props) {
    return (
        <div className={styles.meuNomeContainer}>
            <p>Fala ai <span>{props.nome}</span>, suave?</p>
        </div>
    )
}


export default MeuNome