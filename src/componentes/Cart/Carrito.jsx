import './carrito.css'
import { cartContext } from '../../storage/cartContext'
import { useContext } from 'react'
import ProductStyle from './ProductStyle/ProductStyle'

function Carrito() {
  const {cart, agregarAlCarrito, eliminarDelCarrito, calcularCantidadTotal, calcularPrecioTotal} = useContext(cartContext)
  if(cart.length === 0){
    return (<div>No hay elementos cargados en el carrito</div>)
    
  } else{
    return (
      <div className='cart-container'>
      {cart.map((itemInCart)=>(
        <ProductStyle item={itemInCart}/>
      ))}
    </div>
    )
    
  }
}

export default Carrito