import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='contenedor'>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos'/>
    </div>
  );
}

export default App;
