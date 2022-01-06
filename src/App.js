import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/navegacion/NavBar';
import Inicio from './components/paginas/Inicio';
import Formulario from './components/paginas/Formulario';
import Mas from './components/paginas/Mas';

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar/>
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
