import {useState, useEffect} from 'react'
import { getProducto } from '../../services/mock';
import ItemDetail from './ItemDetail/ItemDetail'
import './IDC.css'
import { useParams } from 'react-router-dom';

function  ItemDetailContainer() {
  const [producto, setProducto] = useState([]);

  let params = useParams();
  console.log(params);

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