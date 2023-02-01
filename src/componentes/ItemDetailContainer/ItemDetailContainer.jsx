import {useState, useEffect, useContext} from 'react'
import { getProducto } from '../../services/mock';
import ItemDetail from './ItemDetail/ItemDetail'
import './IDC.css'
import { useParams } from 'react-router-dom';
import { cartContext } from '../../storage/cartContext';
import Loader from '../Loader/Loader';

function  ItemDetailContainer() {

  const [producto, setProducto] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  const [isInCart, setIsInCart] = useState(false);

  let params = useParams();
  
  const {agregarAlCarrito} = useContext(cartContext);

  function handleAddToCart(count){
    setIsInCart(true);
      const productoAndCount = {...producto, count:count}
      agregarAlCarrito(productoAndCount)
  }

  useEffect(
    ()=>{
      getProducto(params.id)
       .then((respuesta) => { setProducto(respuesta)})
       .catch( (error)=> alert(error))
       .finally(()=> setIsLoading(false))
      },
   [])

if(isLoading){
  return <Loader/>
} else{
  return (
    <div className='detail-container'>
    <ItemDetail 
    isInCart={isInCart}
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
}



export default ItemDetailContainer