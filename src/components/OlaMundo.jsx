import Frase from "./Frase";

function OlaMundo() {
    return (
        <div>
            <h3>Ola Mundo! <br /><small style={{fontWeight: "lighter"}}>Meu primeiro componente</small></h3>

            <span><strong>Pegando Componente Frase: </strong></span>
            <Frase />
        </div>
    )
}


export default OlaMundo;
