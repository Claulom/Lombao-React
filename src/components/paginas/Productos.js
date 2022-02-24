import '../cards/card.css';
import {ItemListCard} from "../cards/ItemListCard"
import {Menu,MenuList,MenuButton,MenuLink,} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
import { useNavigate } from 'react-router-dom';


const Productos = () => {
  let navigate = useNavigate();

  const Categorias = (categoryId) => {
    navigate(`/Categorias/${categoryId}`)
  }
  return (
    <div>
      <h1>Productos</h1>
      < Menu className="cat-style">
        < MenuButton className="btn-detail-item"> Categorias </ MenuButton >
        < MenuList className="cat-style">
          < MenuLink onClick={()=> Categorias(1)} className="cat-style">Calzado</ MenuLink >
          < MenuLink onClick={()=> Categorias(2)} className="cat-style">Ropa</ MenuLink >
          < MenuLink onClick={()=> Categorias(3)} className="cat-style">Accesorios</ MenuLink >
          < MenuLink onClick={()=> Categorias(4)} className="cat-style">Perfumeria</ MenuLink >
          < MenuLink onClick={()=> Categorias(5)} className="cat-style">Bolsos</ MenuLink >
        </ MenuList >
      </ Menu >
      <ItemListCard />
    </div>
  )
}

export default Productos
