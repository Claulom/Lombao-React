import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Productos from './components/paginas/Productos';
import Inicio from './components/paginas/Inicio';
import { ItemListDetail } from './components/cards/ItemListDetail';
import CartPage from './components/paginas/CartPage';
import {CartProvider} from "./context/cartContext";
import Fin from './components/paginas/Fin'
import SendOrder from './components/paginas/SendOrder'
import Categorias from './components/paginas/Categorias'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
    <div className="App">
        <NavBar/>
        
       <Routes>
          <Route path='/' index element={<Inicio/>}/> 
          <Route>
          <Route path='Productos'element={<Productos/>}/>
          <Route path="detail">
           <Route path=':productosId' element={<ItemListDetail/>}/>    
          </Route>
          </Route>
          <Route path='Categorias' element={<Productos/>}/>
          <Route path='Categorias'>
          <Route path=':categoryId' element={<Categorias/>}/>
          </Route>
          <Route path='Cart' element={<CartPage/>}/>
          <Route path='Cart'>
            <Route path='Cart' element={<CartPage/>}/>
          </Route>
          <Route path='Fin' element={<Fin/>}/>
          <Route path='Fin'>
            <Route path='Fin' element={<Fin/>}/>
          </Route>
          <Route path='SendOrder' element={<SendOrder/>}/>
          <Route path='SendOrder'>
            <Route path='/SendOrder/:orderId' element={<SendOrder/>}/>
          </Route>
          </Routes> 
         
          
      </div>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;
