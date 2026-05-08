// definindo tipos com propType
import PropTypes from 'prop-types'

function Item ({ marca = "Sem marca", ano_lancamento = 0 }) {
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

Item.proptype = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

/* forma tradicional de declarar valores para as props,
   A forma moderna eh atribuir logo na definicao do parametro: function Pessoa ( {nome="Lex", idade=18} ) { return( <></> ) }
*/

Item.defaultProps = {
    marca: "Sem marca",
    ano_lancamento: 0, 
}


export default Item
