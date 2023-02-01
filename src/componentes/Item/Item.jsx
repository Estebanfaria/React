import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './item.css'

function Card(props) {

const {img, title, price,modelo, id} = props.item

return (
  <div className="item-card">
  <div className="item-card_header">
    <h2>{title}</h2>
  </div>
  <div className="item-card_img">
    <img src={img} alt={title} />
  </div>
  <div className="item-card_detail">
    <h3 className="item-card_price">$ {price}</h3>
    <small>{modelo}</small>
  </div>
  <li><Link to={`/detail/${id}`}> <Button/> </Link></li>
  <br></br>
</div>
)
}

export default Card;

