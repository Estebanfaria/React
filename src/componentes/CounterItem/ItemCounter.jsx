import {useState} from 'react'
import './ItemCounter.css'

function ItemCounter({stock, onAddToCart }) {

const[click, setClicks] = useState(1);
const deposito = stock;

function sumar(){
    if(click < deposito ){
        setClicks(click + 1)
    }
}

function restar(){
    if (click > 1){
        setClicks(click - 1)
    }
}


return (
    <div className='boton-contenedor'>
        <button className='suma-resta' disabled={click === 1} onClick={restar}> - </button> 
        <div className='contador'> {click} </div>
        <button className='suma-resta' disabled={click === stock} onClick={sumar}> + </button>
        <button onClick={()=> onAddToCart(click)} className='agregarCarrito'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCounter;