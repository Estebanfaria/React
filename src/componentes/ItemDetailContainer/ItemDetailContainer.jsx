import {useState, useEffect} from 'react'
import { getProducto } from '../../services/mock';
import ItemDetail from './ItemDetail/ItemDetail'
import './IDC.css'
import { useParams } from 'react-router-dom';

function  ItemDetailContainer() {

  const [producto, setProducto] = useState([]);

  

  let params = useParams();
  
  function handleAddToCart(count){
   console.log('agregado al carrito');
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