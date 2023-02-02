import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductoByCategory } from "../../services/firebase"
import { obtenerProductos } from "../../services/firebase";
import Item from "../Item/Item"
import Loader from "../Loader/Loader";
import "./ItemList.css"

function ItemListContainer(){

 const [productos, setProductos] = useState([]);
 const [isLoading, setIsLoading] = useState(true);

    let {categoryid} = useParams();
    
    useEffect(()=>{
        if(!categoryid){
            obtenerProductos()
            .then( (respuesta)=>{
                 setProductos(respuesta)
                }) 
                .catch((error) => alert(error))   
                .finally(
                    () => setIsLoading(false)
                ) 
            } else {
                getProductoByCategory(categoryid)
                .then((respuesta)=>{setProductos(respuesta)}) 
                .finally(()=> setIsLoading(false))
            }
    }, [categoryid])


if(isLoading){
    return <Loader/>
} else {
    return (
        <>
        <div className="contenedor-cards"> 
         {productos.map((producto)=> {
            return (<Item key={producto.stock} item={producto}/>)
         } )}
        </div>
        
        </>
    )
}
} 

export default ItemListContainer