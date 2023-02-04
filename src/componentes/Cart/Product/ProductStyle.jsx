import './ProductStyle.css'
import { useContext } from 'react';
import { cartContext } from '../../../storage/cartContext';

function ProductStyle(props) {
    const {removeItem} = useContext(cartContext)
    const {img, title, count, id, price} = props.item
  
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