import {useState, useEffect} from 'react'
import { getProducto } from '../../mock';
import ItemDetail from './ItemDetail/ItemDetail'
import './IDC.css'

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);

  useEffect(
    ()=>{
      getProducto()
       .then((respuesta) => { setProducto(respuesta)})
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