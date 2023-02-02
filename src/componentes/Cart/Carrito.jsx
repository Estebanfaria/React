import './carrito.css'
import { cartContext } from '../../storage/cartContext'
import { useContext } from 'react'
import ProductStyle from './ProductStyle/ProductStyle'
import { Link } from "react-router-dom"

function Carrito() {
  const styleLink = {
    margin:'5rem auto'
  }
  const {cart, agregarAlCarrito, eliminarDelCarrito, calcularCantidadTotal, calcularPrecioTotal} = useContext(cartContext)
  if(cart.length === 0){
    return (
    <>
      <div className='error'>No hay elementos cargados en el carrito</div>
     <Link style={styleLink} to='/'> <button className='volver-al-inicio'>Volver al Inicio</button> </Link>
    </>
    )
    
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