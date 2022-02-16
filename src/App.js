import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Productos from './components/paginas/Productos';
import Categorias from './components/paginas/Categorias';
import Inicio from './components/paginas/Inicio';
import { ItemListDetail } from './components/cards/ItemListDetail';
import CartPage from './components/paginas/CartPage';
import {CartProvider} from "./context/cartContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
    <div className="App">

        <NavBar/>
       <Routes>
          <Route path='/' index element={<Inicio/>}/> 
          {/* <Route path='formulario' element={<Formulario/>}/> */}
          <Route>
          <Route path='Productos'element={<Productos/>}/>
          <Route path="detail">
           <Route path=':productosId' element={<ItemListDetail/>}/>    
          </Route>
          </Route>
          <Route path='Categorias' element={<Categorias/>}/>
          <Route path='Categorias'>
          <Route path=':categoryId' element={<Categorias/>}/>
          </Route>
          <Route path='Cart' element={<CartPage/>}/>
          <Route path='Cart'>
            <Route path='Cart' element={<CartPage/>}/>
          </Route>
          </Routes> 
         
          
      </div>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
