import './CartWidget.css'

function CartWidget() { 

    return (
            <button className='carrito button'> 
            <img src="/multimedia/carrito.png" alt="" />
            <span>{}</span> 
            </button>)
}

export default CartWidget