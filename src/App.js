import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Inicio from './components/paginas/Inicio';
import Formulario from './components/paginas/Formulario';
import Mas from './components/paginas/Mas';
import { ItemListDetail } from './components/cards/ItemListDetail';
import { ItemListCard } from './components/cards/ItemListCard';


function App() {
  return (
      <BrowserRouter>
    <div className="App">

        <NavBar/>
       <Routes>
          <Route path='/'> 
          <Route index element={<Inicio/>}/>
      
          <Route path='formulario' element={<Formulario/>}/>
          </Route>
          <Route path='mas'/>
          <Route index element={<Mas/>}/>
          <Route path="detail">
           <Route path=':productosId' element={<ItemListDetail/>}/>    
          </Route>
       
          </Routes> 
         
          
      </div>
      </BrowserRouter>
  );
}

export default App;
