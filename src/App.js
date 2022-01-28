import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Productos from './components/paginas/Productos';
import Formulario from './components/paginas/Formulario';
import Inicio from './components/paginas/Inicio';
import { ItemListDetail } from './components/cards/ItemListDetail';



function App() {
  return (
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
       
          </Routes> 
         
          
      </div>
      </BrowserRouter>
  );
}

export default App;
