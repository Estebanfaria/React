import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import obtenerProductos, { getProductoByCategory } from "../../services/mock"
import Item from "../Item/Item"
import "./ItemList.css"

function ItemListContainer(){
 const [productos, setProductos] = useState([]);
let {categoryid} = useParams();
    useEffect(()=>{
        if(!categoryid){
            obtenerProductos()
            .then( (respuesta)=>{
                 setProductos(respuesta)
                })
            } else {
                getProductoByCategory(categoryid)
                .then((respuesta)=>{setProductos(respuesta)})
            }
    }, [categoryid])

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

export default ItemListContainer