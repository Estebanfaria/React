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
        // let newCart = [...cart];
    }

    function vaciarCarrito(){
        setCart([])
    }

    function calcularCantidadTotal(itemId){

    }

    function calcularPrecioTotal(){
        return 1000;
    }

    return(
        <cartContext.Provider value={{cart, agregarAlCarrito, eliminarDelCarrito, calcularCantidadTotal, calcularPrecioTotal, vaciarCarrito}}>
            {props.children}
        </cartContext.Provider>
    )
}

export {CartProvider, cartContext}
