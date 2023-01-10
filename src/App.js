import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='contenedor'>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/detail/:id' element={<ItemDetailContainer/>} />
          <Route path='/category/:categoryid' element={<ItemListContainer/>} />
          <Route path='/contacto' element={<div><h1>Hola mundo</h1></div>} />
          <Route path='*' element={<h2>Ruta no encontrada</h2>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
