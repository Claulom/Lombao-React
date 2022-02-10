import { createContext, useContext, useState} from 'react'

export const CartContext = createContext([]);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
   


    const addItem = (item, quantity) =>{
        if (isInCart(item.id)){
            alert('Error: el producto ya ha sido agregado')
            return
        }

        item.quantity = quantity
        const allItems = [...cart, item]
        setCart(allItems)
    }
    
    const removeItem = (itemId) =>{
           const allItems = cart.filter(item => item.id !== itemId)
           setCart(allItems)
        };
        
        const clear = ()=>{
            setCart([]);
        }; 
        
        const isInCart = (id) => {
            return cart.filter(item => item.id === id).length === 1
        }
      
        const totalCompra = ()=>{
            let price = 0
            if(cart.length > 0){
                for (const item of cart){
                    price += item.price * item.quantity
                }
            }
            return price
        }
        
        return(
            <CartContext.Provider value={{cart, addItem, removeItem, clear, totalCompra}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)

/*  const addItem = (item, quantity) =>{
     if (cart.some ((p) => p.id === item.id )){
     const newItem = [...cart]
     const repetido = newItem.find((p) => p.id === item.id )
         repetido.quantity += quantity
         setCart([repetido])
     }else{
         const newItem = {quantity, item}
         setCart([...cart, newItem]);    
     }
 } */