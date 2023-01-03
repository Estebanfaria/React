import {useState} from 'react'
import './ItemCounter.css'

function ItemCounter(props) {

const[click, setClicks] = useState(1);
const stock = props.stock;

function sumar(){
    if(click < stock ){
        setClicks(click + 1)
    }
}

function restar(){
    if (click > 1){
        setClicks(click - 1)
    }
}

function agregarCarrito(){
    if(click > 1){
        console.log(`se agregaron ${click} productos al carrito`);
    } else if(click === 1){
        console.log(`se agregro ${click} producto al carrito `);
    }
    
}

return (
    <div className='boton-contenedor'>
        <button disabled={click === 1} onClick={restar}> - </button> 
        <div className='contador'> {click} </div>
        <button disabled={click === stock} onClick={sumar}> + </button>
        <button onClick={agregarCarrito} className='agregarCarrito'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCounter;