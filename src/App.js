import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './storage/cartContext';
import { exportArray } from './services/firebase';
import CartContainer from './componentes/Cart/CartContainer';
import FormCheckout from './componentes/FormCheckout/FormCheckout';

function App() {
 
  return (
    
    <div className='contenedor'>
      <BrowserRouter>
        <CartProvider>
            <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='/category/:categoryid' element={<ItemListContainer/>} />
                <Route path='/carrito' element={<CartContainer/>} />
                <Route path='/FormCheckout' element={<FormCheckout/>} />
                <Route path='*' element={<h2>Ruta no encontrada</h2>}/>
                
              </Routes>
        </CartProvider>    
      </BrowserRouter>
    </div>
  );
}

export default App;
