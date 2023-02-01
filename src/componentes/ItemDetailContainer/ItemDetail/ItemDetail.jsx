import React from 'react'
import { Link } from 'react-router-dom';
import ItemCounter from '../../CounterItem/ItemCounter';
import'./ItemDetail.css'

function ItemDetail({img, title, price, modelo, stock, detail, onAddToCart, isInCart}) {
 
  return (
    <div className="card-detail_main">
    <div className="card-detail_img">
      <img src={img} alt={title} />
    </div>
    <div className="card-detail_detail">
      <h1 className='detalle'>{detail}</h1>
      <h4 className="priceTag">$ {price}</h4>
      <p>{modelo}</p>
      {isInCart?(
        <Link to="/carrito"><button>ir al carrito</button></Link>
      ):(<li><ItemCounter className='detail-boton' onAddToCart={onAddToCart} stock={stock}/></li>)}
      
    </div>
    </div>
  )
}

export default ItemDetail;
