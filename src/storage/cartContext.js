import { createContext, useState } from "react";

const cartContext = createContext()

function CartProvider(props){
    const[cart, setCart] = useState([]);

    function agregarAlCarrito(item){
        let isInCart = cart.findIndex((productoInCart)=> productoInCart.id === item.id )
        let newCart = [...cart];
        if(isInCart !== -1){    
            
        }else{
            newCart.push(item);
            setCart(newCart);
        }
        
    }

    function removeItem(id){
        let newCart = [...cart]
        newCart = newCart.filter((producto)=>producto.id !== id)
        setCart(newCart)
    }

    function vaciarCarrito(){
        let newCart = [...cart]
        newCart.length = 0 
        setCart(newCart)
    }

    function calcularPrecioTotal(){        
            let totalPrecio = 0
            cart.forEach(producto => {totalPrecio += (producto.count * producto.price)}) 
            return totalPrecio
    }

    return(
        <cartContext.Provider value={{cart, agregarAlCarrito, removeItem, calcularPrecioTotal, vaciarCarrito}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartProvider, cartContext}
