import { createContext, useState } from "react";

const cartContext = createContext()

function CartProvider(props){
    const[cart, setCart] = useState([]);

    function agregarAlCarrito(item){
        let isInCart = cart.findIndex((productoInCart)=> productoInCart.id === item.id )
        let newCart = [...cart];
        if(isInCart !== -1){
            // newCart[isInCart] = 0;
            // console.log(newCart[isInCart]); 
        }else{
            newCart.push(item);
            setCart(newCart);
        }
        
    }

    function eliminarDelCarrito(itemId){
        let newCart = [...cart];
    }

    function calcularCantidadTotal(itemId){

    }

    function calcularPrecioTotal(itemId){

    }

    return(
        <cartContext.Provider value={{cart, agregarAlCarrito, eliminarDelCarrito, calcularCantidadTotal, calcularPrecioTotal}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartProvider, cartContext}
