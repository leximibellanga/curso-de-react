import Button from "./components/Button"

const MetodosProps = () => {

    function eventOne() {
        alert("Clicou no primeiro")
    }
    function eventTwo() {
        alert("Clicou no segundo")
    }

    return (
        <>
            <div className="container vh-100 d-flex align-items-center justify-content-center flex-column gap-2">
                <p>Metodos por componentes</p>
                <Button text="Primerio evento" event={eventOne}></Button>
                <Button text="Segundo evento" event={eventTwo}></Button>
            </div>
        </>
    )
}

export default MetodosProps
