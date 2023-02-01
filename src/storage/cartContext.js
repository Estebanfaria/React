import { createContext, useState } from "react";

const cartContext = createContext()

function CartProvider(props){
    const[cart, setCart] = useState([]);

    function agregarAlCarrito(item){
        let isInCart = cart.findIndex((productoInCart)=> productoInCart.id === item.id )
        let newCart = cart.map((item)=>item);
        if(isInCart !== -1){
            // newCart[isInCart]
            alert('Producto repetido')    
        }else{
            newCart.push(item);
            setCart(newCart);
        }
        
    }

    return(
        <cartContext.Provider value={{cart, agregarAlCarrito}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartProvider, cartContext}
