import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Inicio from './components/paginas/Inicio';
import Formulario from './components/paginas/Formulario';
import Mas from './components/paginas/Mas';
import ItemCard from "./components/cards/ItemCard";
import ItemCount from "./components/paginas/ItemCount";

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar/>
      <ItemCount stock="10" initial="1"/>
      <fragment>
      <ItemCard name="Producto" price="$2000"/>
      <ItemCard name="Producto" price="$3000"/>
      <ItemCard name="Producto" price="$4000"/>
      <ItemCard name="Producto" price="$5000"/>
      <ItemCard name="Producto" price="$6000"/>
      </fragment>
       <Routes>
          <Route path='/' exact element={<Inicio/>}/>
          <Route path='Formulario' element={<Formulario/>}/>
          <Route path='Mas' element={<Mas/>}/>
          </Routes> 
      </Router>
    </div>
  );
}

export default App;
