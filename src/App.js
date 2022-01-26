import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Inicio from './components/paginas/Inicio';
import Formulario from './components/paginas/Formulario';
import Mas from './components/paginas/Mas';
import {ItemListContainer} from './components/cards/ItemListContainer';
import ItemDetailProduct  from './components/cards/ItemDetailProduct';
import ItemDetailContainer from './components/cards/ItemDetailContainer';
import { ItemListDetail } from './components/cards/ItemListDetail';
import { ItemListCard } from './components/cards/ItemListCard';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBar/>
       <Routes>
          <Route path='/'> 
          <Route index element={<Inicio/>}/>
          <Route path='formulario' element={<Formulario/>}/>
          </Route>
          <Route path='mas'/>
          <Route index element={<Mas/>}/>
          <Route path="ItemDetailContainer">
           <Route path=':productosId' element={<ItemDetailContainer/>}/>    
          </Route>
       
          </Routes> 
      </BrowserRouter>
          <ItemListContainer/>
          
      </div>
  );
}

export default App;
