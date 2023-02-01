import './ProductStyle.css'
function ProductStyle(props) {
    const {img, title, price} = props.item
  return (
    
    
        <div className='cart-item'>
            <img className='cart-img'src={img} alt={title} />
            <p>{title}</p>
            <p>{price}</p> 
        </div>
  )
}

export default ProductStyle;