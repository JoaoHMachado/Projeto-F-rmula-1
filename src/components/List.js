import Item from './Item'
/* 
    <> </> --> ISSO É UM FRAGMENTS, 
    PODE SER UTILIZADO QUANDO NÃO É PRECISO UTILIZAR UMA <DIV>

*/
function List(){
    return(
        <> 
            <h1>Lista Marcas:</h1>
            <ul>
                <Item marca="Ferrari" anoLancamento={2024}/>
                <Item marca="Mercedes" anoLancamento={2024}/>
                <Item />

            </ul>
        </>
    )
}

export default List