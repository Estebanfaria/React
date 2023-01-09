import React from 'react'
import './card.css'


function Card(props) {

    const {img, title, price,modelo} = props.item

  return (
    <div className="card">
        <img className='img-producto' src={img} alt="Avatar" />
        <div> 
          <ul className='texto-card'>
           <li><p> Tipo: {title} </p></li> 
           <li><p> Precio: ${price}</p></li> 
           <li><p>Modelo: {modelo}</p> </li> 
          </ul> 
        </div>
        
</div>
  )
}

export default Card;