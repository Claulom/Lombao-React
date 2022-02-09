import { createContext, useContext, useState} from 'react'

export const CartContext = createContext([]);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    
    const addItem = (item, quantity) =>{
        if (cart.some ((p) => p.id === item.id)){
        const newItem = [...cart]
        const repetido = newItem.find((p) => p.id === item.id)
            repetido += quantity
            setCart([repetido])
        }else{
            const newItem = {quantity, item}
            setCart([...cart, newItem]);    
        }
    }
  
        const removeItem = (id) =>{
            setCart((prev)=> prev.filter((element)=> element.id !== id));
        };
        
        const clear = ()=>{
            setCart((prev) => prev.filter((element)=> element !== element));
        };
        
        
        
        return(
            <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)
