
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartContextProvider({ children }) {

  //inicializa el arr cartItems vacio 
  const[cartItems, setCartItems] = useState([])

  //si hay halgo en ls inicializa con lo que halla guardado 
  useEffect(()=>{
    const localStorageCart = JSON.parse(localStorage.getItem("cart"))
    
    if (localStorageCart){
      setCartItems(localStorageCart)
    }  
  },[])

  //cada vez que se actualiza carItems se guarda en ls
  useEffect(()=>{

    localStorage.setItem("cart",  JSON.stringify(cartItems))

  },[cartItems])



  //funcion que añade producto que se pasa por parametro al carrito
  const addToCart =(productToAdd)=>{

    //buscamos si el producto que se quiere añadir ya esta en el carrito
    const productoBuscado = cartItems.find((item)=>{ 
      return item.id === productToAdd.id
    })

    if(!productoBuscado){ //si productToAdd no existe en el carrito
      const nuevoProducto ={//copia el producto y le añade cantidad 1
        ...productToAdd,
        quantity: 1
      }
      const newCartItems =[  //copia el cartItems y le añade el nuevo producto 
        ...cartItems,
        nuevoProducto
      ]
      setCartItems(newCartItems) //setea cartItems con el array nuevo

    }else{

      const newCartItems = cartItems.map((item)=>{
        if(item.id === productoBuscado.id){
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }else{
          return item
        }
      })

      setCartItems(newCartItems)
    }
  }
    
  //funcion que borra  
  

  return (
    <CartContext.Provider value={{
      cartItems,
      
    }}>

      {children}
    </CartContext.Provider>
  );
}