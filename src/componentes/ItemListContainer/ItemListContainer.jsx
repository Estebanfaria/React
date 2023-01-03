import Card from "../Card/Card"
import "./ItemList.css"

function ItemListContainer(){

const productos = [
        {id:'1',title:'Remera',modelo:'1978',img:'/multimedia/1978.jpg',price:'200',stock:'5'},
        {id:'2',title:'Remera',modelo:'1986',img:'/multimedia/1986.webp',price:'300',stock:'8'},
        {id:'3',title:'Remera',modelo:'2022',img:'/multimedia/2022.webp',price:'1500',stock:'10'},
        ]

    return (
        <>
        <div className="contenedor-cards"> 
            {productos.map((producto)=> <Card key={producto.id} item={producto}/> )}
        </div>
        
        </>
    )
}

export default ItemListContainer