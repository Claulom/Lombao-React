import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Productos from './components/paginas/Productos';
import Formulario from './components/paginas/Formulario';
import Inicio from './components/paginas/Inicio';
import { ItemListDetail } from './components/cards/ItemListDetail';
import Cart from './components/paginas/Cart';
import {cartContext} from "./context/cartContext";


function App() {
  return (
    <cartContext.Provider value={[]}>
      <BrowserRouter>
    <div className="App">

        <NavBar/>
       <Routes>
          <Route path='/' index element={<Inicio/>}/> 
          <Route path='formulario' element={<Formulario/>}/>
          <Route>
          <Route path='Productos'element={<Productos/>}/>
          <Route path="detail">
           <Route path=':productosId' element={<ItemListDetail/>}/>    
          </Route>
          </Route>
          <Route path='Cart' element={<Cart/>}/>
          <Route path='carrito'>
            <Route path='carrito' element={<Cart/>}/>
          </Route>
          </Routes> 
         
          
      </div>
      </BrowserRouter>
      </cartContext.Provider>
  );
}

export default App;
