import Lista from "./components/Lista"

const RenderizacaoListas = () => {
    // Array de Frameworks
    const frameworks = ['React', 'Vue', 'Angular', 'BootStrap', 'Tailwind CSS']

    return (
        <main className="vh-100 bg-light">
            <section className="container">
                <h2 className="text-center">Renderizando de Listas</h2>
                {/* Imprimindo a lista de frameworks */}
                <Lista items={frameworks} title={"Frameworks de Frontend"} />
            </section>
        </main>
    )
}

export default RenderizacaoListas
