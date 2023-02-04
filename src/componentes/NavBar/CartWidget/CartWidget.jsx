import './CartWidget.css'
import { useContext } from 'react'
import { cartContext } from '../../../storage/cartContext'


function CartWidget() { 
const contexto = useContext(cartContext);
let cantidad = contexto.cart.length

    if(cantidad){
        return (
            <button className='button-carrito'> 
                <div className='carrito-container'>
                    <img className='img-carrito' src="/multimedia/carrito.png" alt="" />
                    <span className='carrito-number'>{cantidad}</span>
                </div> 
            </button>
        )
    }else{
        return (
            <button className='button-carrito'> 
                <div className='carrito-container'>
                    <img className='img-carrito' src="/multimedia/carrito.png" alt="" />
                </div> 
            </button> 
        )
        
    }
    
}

export default CartWidget