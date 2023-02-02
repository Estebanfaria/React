import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './storage/cartContext';
import Carrito from './componentes/Cart/Carrito';
import app, { obtenerProductos } from './services/firebase'

function App() {
  console.log(obtenerProductos());
  return (
    <div className='contenedor'>
      <BrowserRouter>
        <CartProvider>
            <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='/category/:categoryid' element={<ItemListContainer/>} />
                <Route path='/carrito' element={<Carrito/>} />
                <Route path='*' element={<h2>Ruta no encontrada</h2>}/>
              </Routes>
        </CartProvider>    
      </BrowserRouter>
    </div>
  );
}

export default App;
