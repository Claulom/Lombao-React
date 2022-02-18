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
      < Menu >
        < MenuButton className="btn-detail-item"> Categorias </ MenuButton >
        < MenuList >
          < MenuLink onClick={()=> Categorias(1)}>Calzado</ MenuLink >
          < MenuLink onClick={()=> Categorias(2)}>Ropa</ MenuLink >
          < MenuLink onClick={()=> Categorias(3)}>Accesorios</ MenuLink >
          < MenuLink onClick={()=> Categorias(4)}>Perfumeria</ MenuLink >
          < MenuLink onClick={()=> Categorias(5)}>Bolsos</ MenuLink >
        </ MenuList >
      </ Menu >
      <ItemListCard />
    </div>
  )
}

export default Productos
