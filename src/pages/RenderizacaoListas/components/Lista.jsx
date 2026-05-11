
const Lista = ({ items, title }) => {
    return (
        <>
            <div className="mt-4 mb-3">
                <h4 className="text-center">{title}</h4>
            </div>
            {items.length > 0 ? (
                items.map((item, index) => (
                    <p key={index} className="p-3 m-0 mb-2 bg-dark text-white text-center rounded-4">
                        {item.toUpperCase()}
                    </p>
                ))) : (
                <p className="p-3 m-0 mb-2 bg-dark text-danger text-center rounded-4">
                    Nao tem nenhum item na lista!
                </p>
            )}
        </>
    )
}

export default Lista
