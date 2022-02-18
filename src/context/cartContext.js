import { createContext, useContext, useState} from 'react'

export const CartContext = createContext([]);

export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([]);
   


    const addItem = (item, quantity) =>{
        if (isInCart(item.id)){
            const addQty = cart.map((o)=>{
                if(o.id === item.id){
                    return {...o, quantity: quantity + o.quantity}
                }else{
                    return o
                }
            })
            setCart(addQty)
        }else{
        item.quantity = quantity
        const allItems = [...cart, item]
        setCart(allItems)
    }
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
            cart.forEach((element)=>{
                price += element.price * element.quantity
            })
          
            return price
        }
        
        return(
            <CartContext.Provider value={{cart, addItem, removeItem, clear, totalCompra}}>
            {children}
        </CartContext.Provider>
    )
}
export const useCart = () => useContext(CartContext)

