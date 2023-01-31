import React from 'react'
import ItemCounter from '../../CounterItem/ItemCounter';
import'./ItemDetail.css'

function ItemDetail({img, title, price, modelo, stock, detail}) {
  function handleAddToCart(count){
    console.log(`agregaste al carrtio ${count} unidades de el producto ${title}`);
  }
  return (
    <div className='detail-contenedor'>
      <div className='detail-flex'>
        <h1  className='titulo-detail'>{title}</h1>
        <img className='img-detail' src={img} alt="Avatar" />
      </div>
      <div> 
          <ul className='detalles'>
           <li><p> Tipo: {title} </p></li> 
           <li><p> Precio: ${price}</p></li> 
           <li><p>Modelo: {modelo}</p> </li>
           <li><p> Detail: {detail}</p> </li> 
           <li><ItemCounter onAddToCart={handleAddToCart} stock={stock}/></li>
          </ul> 
            
        </div>
        
</div>
  )
}

export default ItemDetail;