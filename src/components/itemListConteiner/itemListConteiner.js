import './itemListContainer.css'

const ItemListContainer = ({greetings ='TIANA VEGANA'})=>{
    return(
        <div>
            <h1 className='item'>{greetings}</h1>
        </div>
    )
}

export default ItemListContainer;