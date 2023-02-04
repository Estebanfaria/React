import {useState, useEffect, useContext} from 'react'
import { getProducto } from '../../services/firebase';
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
  
  const {agregarAlCarrito, cart} = useContext(cartContext);

  function handleAddToCart(count){
    setIsInCart(true);
      const productoAndCount = {...producto, count: count}
      agregarAlCarrito(productoAndCount)
  }

  function checkStock(){
    let itemInCart = cart.find((item)=>item.id === producto.id);
    let stockUpdate = producto.stock;
    if(itemInCart){
      stockUpdate = producto.stock - itemInCart.count;
    }
    return stockUpdate
      }

  useEffect(
    ()=>{
      getProducto(params.id)
       .then((respuesta) => { setProducto(respuesta)})
       .catch( (error)=> alert(error))
       .finally(()=> setIsLoading(false))
      },
   []);

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
    detail={producto.detail}
    stockUpdate={checkStock()}
    />
    </div>
)
}
}



export default ItemDetailContainer