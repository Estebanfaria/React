import { useState, useEffect } from "react";
import obtenerProductos from "../../mock"
import Card from "../Card/Card"
import "./ItemList.css"

function ItemListContainer(){
 const [productos, setProductos] = useState([]);

    useEffect(()=>{
        obtenerProductos().then((respuesta)=>{ setProductos(respuesta)})
    }, [])

    return (
        <>
        <div className="contenedor-cards"> 
         {productos.map((producto)=> {
            return (<Card key={producto.stock} item={producto}/>)
         } )}
        </div>
        
        </>
    )
}

export default ItemListContainer