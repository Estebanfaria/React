import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './item.css'

function Card(props) {

const {img, title, price,modelo, id} = props.item

return (
  <div className="card">
    <img className='img-producto' src={img} alt="Avatar" />
    <div> 
      <ul className='texto-card'>
      <li><p> Tipo: {title} </p></li> 
      <li><p> Precio: ${price}</p></li> 
      <li><p>Modelo: {modelo}</p> </li> 
      <li><Link to={`/detail/${id}`}> <Button/> </Link></li> 
      </ul> 
    </div>
  </div>
)
}

export default Card;