
import Item from "./Item"

const List = () => {
    return (
        <>
            <h2>Minha Lista </h2>
            <hr />
            <ul>
                <Item marca={`Mercedes`} ano_lancamento={2011} />
                <Item marca={`Mazda`} ano_lancamento={2005} />
                <Item marca={`Mahindra`} ano_lancamento={2007} />
                <Item marca={`Lexus`} ano_lancamento={2025} />
                <Item />
            </ul>
        </>
    )
}

export default List
