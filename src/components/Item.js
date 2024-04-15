import Proptypes from 'prop-types'

function Item({marca, anoLancamento}){
    return (
        <>
            <li>{marca} - {anoLancamento}</li>
        </>
    )
}
/* PASSANDO UM TIPO PARA A PROPRIEDADE (.STRING)
    E TAMBÉM QUE ELA É OBRIGATÓRIA (.ISREQUIRED)
*/
Item.propTypes = {
    marca: Proptypes.string.isRequired,
    anoLancamento: Proptypes.number.isRequired,
}

Item.defaultProps ={
    marca: "Informe a marca",
    anoLancamento: 0,
}

export default Item