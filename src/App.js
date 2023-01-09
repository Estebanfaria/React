import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className='contenedor'>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos'/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
