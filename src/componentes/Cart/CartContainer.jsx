import './CartContainer.css'
import { cartContext } from '../../storage/cartContext'
import { useContext } from 'react'
import ProductStyle from './Product/ProductStyle'
import { Link } from "react-router-dom"

function CartContainer() {

  const { cart, vaciarCarrito, calcularPrecioTotal } = useContext(cartContext)

  if(cart.length === 0){
    return (
      <>
        <div style={{margin:'2rem auto', fontFamily:'inherit', color:'red'}} className='error'>No hay elementos cargados en el carrito</div>
        <Link style={{margin:'1rem auto'}} to='/'> <button className='volver-al-inicio'>Volver al Inicio</button> </Link>
      </>
    )
    
  } else{
     return (
      <> 

      <button onClick={vaciarCarrito} style={{border:'none', color:'white', backgroundColor:'red', width:'10rem', margin:'0 1rem'}}>Vaciar carrito</button>

      <div className='cart-container'> 

        {cart.map((itemInCart)=>(
          <ProductStyle key={itemInCart.id} item={itemInCart}/>
        ))}

        <Link style={{margin:'0 auto'}} to='/FormCheckout'><button style={{ backgroundColor:'pink', border:'none' }}>Finalizar Compra</button></Link>
          <h4> Monto total: ${calcularPrecioTotal()}</h4>
    </div>
    </>  
    ) 
    
  }
}

export default CartContainer