import './ProductStyle.css'
import { useContext } from 'react';
import { cartContext } from '../../../storage/cartContext';

function ProductStyle(props) {
    const {removeItem, calcularPrecioTotal, cart} = useContext(cartContext)
    const {img, title, count, id} = props.item
    const price = calcularPrecioTotal()

    function precioTotal(){
      const total = cart.reduce((acc, prod)=> acc + prod.price, 0)
      return total
}

  return (
    <>
        <div className='cart-item'>
            <img className='cart-img'src={img} alt={title} />
            <p>{title}</p>
            <p>${price}</p> 
            <p>Cantidad: {count}</p>
            <button style={{border:'none' , backgroundColor:'red', color:'white', borderRadius:'0.2rem'}} onClick={()=>removeItem(id)}>X</button>
        </div>
        </>
  )
}

export default ProductStyle;