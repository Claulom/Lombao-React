import { createContext, useContext, useState} from 'react'

export const CartContext = createContext([]);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);

     const addItem = (item, quantity) =>{
        const newItem = { item, quantity};
        setCart((prevState) => [...prevState, newItem])
        } 
  
        const removeItem = (id) =>{
            setCart((prev)=> prev.filter((element)=> element.item.id !== id));
        };
        
        const clear = ()=>{
            setCart((prev) => prev.filter((element)=> element !== element));
        };
        
        const isInCart = (id)=>{
            const repetido = cart.find(item => item.id === id)
            return repetido;
        }
        
        
        return(
            <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)
/* const newItem = { item, quantity};
console.log('Se agrego al carrito', newItem) */
/*     setCart((prevState) => [...prevState, newItem]) */