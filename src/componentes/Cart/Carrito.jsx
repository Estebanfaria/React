import './carrito.css'
import { cartContext } from '../../storage/cartContext'
import { useContext } from 'react'
import ProductStyle from './ProductStyle/ProductStyle'
import { Link } from "react-router-dom"
import { createOrder } from '../../services/firebase'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Carrito() {
  const { cart, agregarAlCarrito,  eliminarDelCarrito,  calcularCantidadTotal,  calcularPrecioTotal} = useContext(cartContext)
  
  const styleLink = {
    margin:'5rem auto'
  }

  const [orderid, setOrderid] = useState()
  
  const finalizarCompra = {
    border:'none',
    width:'20%',
    margin:'0 auto',
    backgroundColor:'pink',
    borderRadius:'5px'
  }


  function handleCheckout(evt){
    const items = cart.map(({id,price,title})=>({id,price,title}))
    const order = {
      buyer: {
        nombre: 'Santiago',
        email:'santiago45@gmail.com',
        telefono: 123456,
      },
      items: items,
      total: calcularPrecioTotal(),
      fecha: new Date(), 
    }

    // createOrder(order).then((id)=>{
    //   Swal.fire({
    //     position: 'top-end',
    //     icon: 'success',
    //     title: 'Compra realizada con exito',
    //     showConfirmButton: false,
    //     timer: 1500
    //   }).then((res)=>{
    //     if(res.isConfirmed){
    //       enviarOrder()
    //     }else{
    //     }
    //   })
    // })

    async function enviarOrder(){
      let id = await createOrder(order);
      setOrderid(id);
    }
    enviarOrder()
}

if(orderid){
  return(
    <div style={{margin:'0 auto'}}>
      <h1 >Gracias por tu compra</h1>
    </div>
  )
}
 

  

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
        <ProductStyle key={itemInCart.id} item={itemInCart}/>
      ))}
      <button style={finalizarCompra} onClick={handleCheckout}>Finalizar Compra</button>
    </div>
    )
    
  }
}

export default Carrito