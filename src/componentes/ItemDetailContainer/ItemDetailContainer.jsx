import {useState, useEffect, useContext} from 'react'
import { getProducto } from '../../services/mock';
import ItemDetail from './ItemDetail/ItemDetail'
import './IDC.css'
import { useParams } from 'react-router-dom';
import { cartContext } from '../../storage/cartContext';

function  ItemDetailContainer() {

  const [producto, setProducto] = useState([]);

  let params = useParams();
  
  const context = useContext(cartContext);

  function handleAddToCart(count){
      const productoAndCount = {...producto, count:count}
      context.agregarAlCarrito(productoAndCount)
  }

  useEffect(
    ()=>{
      getProducto(params.id)
       .then((respuesta) => { setProducto(respuesta)})
       .catch( (error)=> alert(error));
      },
   [])

  return (
      <div className='detail-container'>
      <ItemDetail 
      onAddToCart={handleAddToCart}
      img={producto.img} 
      title={producto.title} 
      price={producto.price} 
      modelo={producto.modelo} 
      stock={producto.stock} 
      detail={producto.detail}
      />
      </div>
  )
}

export default ItemDetailContainer