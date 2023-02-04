import {useState} from 'react'
import './ItemCounter.css'

function ItemCounter({stock, onAddToCart }) {

const[count, setCount] = useState(1);
const deposito = stock;

function sumar(){
    if(count < deposito ){
        setCount(count + 1)
    }
}

function restar(){
    if (count > 1){
        setCount(count - 1)
    }
}


return (
    <div className='boton-contenedor'>
        <button className='suma-resta' disabled={count === 1} onClick={restar}> - </button> 
        <div className='contador'> {count} </div>
        <button className='suma-resta' disabled={count === stock} onClick={sumar}> + </button>
        <button onClick={()=> onAddToCart(count)} className='agregarCarrito'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCounter;