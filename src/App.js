import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Productos from './components/paginas/Productos';
import Formulario from './components/paginas/Formulario';
import Inicio from './components/paginas/Inicio';
import { ItemListDetail } from './components/cards/ItemListDetail';
import CartPage from './components/paginas/CartPage';
import {CartProvider} from "./context/CartContext";


function App() {
  return (
    <CartProvider>
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
          <Route path='Cart' element={<CartPage/>}/>
          <Route path='carrito'>
            <Route path='carrito' element={<CartPage/>}/>
          </Route>
          </Routes> 
         
          
      </div>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
