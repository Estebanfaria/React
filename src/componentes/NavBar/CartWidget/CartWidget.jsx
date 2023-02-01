import './CartWidget.css'
import { useContext } from 'react'
import { cartContext } from '../../../storage/cartContext'

function CartWidget() { 
const contexto = useContext(cartContext);

    return (
            <button className='button-carrito'> 
            <div className='carrito-container'>
            <img className='img-carrito' src="/multimedia/carrito.png" alt="" />
            <span className='carrito-number'>{contexto.cart.length}</span>
            </div> 
            </button>)
}

export default CartWidget