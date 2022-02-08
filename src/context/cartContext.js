import { createContext, useContext, useState} from 'react'

export const CartContext = createContext([]);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
    
    const addItem = (item, quantity) =>{
        if (cart.some ((p) => p.id === item.id)){
        let newItem = [...cart] 
        let repetido = newItem.find((p) => p.id === item.id)
            repetido.quantity += quantity
            setCart(newItem)
        }else{
            setCart([...cart, item]);    
        }
    }
    
        const removeItem = (id) =>{
            setCart((prev)=> prev.filter((element)=> element.id !== id));
        };
        
        const clear = ()=>{
            setCart((prev) => prev.filter((element)=> element !== element));
        };
        
      /*   const isInCart = (id)=>{
            const repetido = cart.find(item => item.id === id)
            return repetido;
        } */
        
        
        return(
            <CartContext.Provider value={{cart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)
/* const newItem = { item, quantity};
console.log('Se agrego al carrito', newItem) */
/*     setCart((prevState) => [...prevState, newItem]) */