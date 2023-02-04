import React, {useState} from 'react'
import InputForm from './InputForm/InputForm';
import { cartContext } from '../../storage/cartContext'
import { useContext } from 'react'
import { createOrder } from '../../services/firebase'
import './FormCheckout.css'
import { Link } from 'react-router-dom';
  
  export default function FormCheckout(props) {
    const [userData, setUserData] = useState({
      name: "",
      phone: "",
      email: "",
    });
    const { cart, calcularPrecioTotal, vaciarCarrito} = useContext(cartContext)
    const [orderid, setOrderid] = useState()
  
  function handleCheckout(userData){
    const items = cart.map(({id,price,title, count})=>({id,price,title, count}))
    const order = {
      buyer: userData,
      items: items,
      total: calcularPrecioTotal(),
      fecha: new Date(), 
    }
  
    async function enviarOrder(){
      let id = await createOrder(order);
      setOrderid(id);
    }
    enviarOrder()
}

  if(orderid){
  return(
    <>
    <div style={{margin:'0 auto', fontSize:'larger'}}>
     Gracias por tu compra 
     </div>
     <Link style={{margin:'1rem auto'}} to='/'><button onClick={vaciarCarrito} style={{border:'solid 1px', backgroundColor:'cyan'}}>Volver al Inicio</button></Link>
     </>
  )
}
  
    function onInputChange(evt) {
      let value = evt.target.value;
      let inputName = evt.target.name;
  
      let newState = { ...userData };
      // dynamic props
      newState[inputName] = value;
      setUserData(newState);
    }
  
    function onSubmit(evt) {
      evt.preventDefault();
    }
  
    function formIsInvalid() {
      return !(
        userData.name !== "" &&
        userData.phone !== "" &&
        userData.email !== ""
      );
    }
  
    return (
      <form className='form-container' onSubmit={onSubmit}>
        <h1>Llena tus datos para finalizar la compra 🛍</h1>
        <InputForm
          value={userData.name}
          name="name"
          onChange={onInputChange}
          label="Nombre"
          userData={userData}
        />
        <InputForm
          value={userData.phone}
          name="phone"
          onChange={onInputChange}
          label="phone"
          userData={userData}
        />
        <InputForm
          value={userData.email}
          name="email"
          onChange={onInputChange}
          label="email"
          userData={userData}
        />
  
        <button style={{border:'none', margin:'1rem', fontFamily: 'Georgia, Times New Roman, Times, serif'}} onClick={()=>handleCheckout(userData)} disabled={formIsInvalid()} type="submit">
          Crear orden
        </button>
        <button style={{border:'none', fontFamily: 'Georgia, Times New Roman, Times, serif'}} onClick={() => setUserData({ name: "", email: "", phone: "" })}>
          Limpiar
        </button>
      </form>
    );
  }