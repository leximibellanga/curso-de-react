
const SeuNome = ({ setNome }) => {
    return (
        <div className="text-start">
            <label htmlFor="nome" className="mb-2">Nome:</label>
            <input 
                type="text" 
                name="nome" 
                id="nome" 
                placeholder="Digite seu nome" 
                className="form-control"
                onChange={(e) => setNome(e.target.value)}
            />
        </div>
    )
}

export default SeuNome
