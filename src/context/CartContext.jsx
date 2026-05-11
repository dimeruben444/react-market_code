
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





  ///FUNCIONES QUE MODIFICAN EL CARRITO
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


    
  //funcion que borra producto del carrito
  const removeFromCart = (productFromRemove)=>{

    //devuelve un array sin ese producto 
    const newCartItems = cartItems.filter((item)=>{
      return item.id !== productFromRemove.id
    })

    setCartItems(newCartItems)//setea el carrito sin el producto indicado
  }



  //funcion que resta uno a la cantidad de un producto del carrito 
  const decreaseQuantity =(productToDecrease)=>{

     // Si solo queda 1 → eliminarlo
    if(productToDecrease.quantity ===1){
      const newCartItems = cartItems.filter((item)=>{
        return item.id !== productToDecrease.id
      })
      
      setCartItems(newCartItems)
      return
    }


    // Si hay más de 1 → restar
    const newCartItems = cartItems.map((item)=>{

      if (item.id === productToDecrease.id){
        return{
          ...item, 
          quantity: item.quantity - 1
        }
      }else{
        return item
      }  
    })

    setCartItems(newCartItems)
  }

  //vaciar todo el carrito
  const clearCart = () => {
    setCartItems([])
  }






  ///FUNCIONES QUE DEVUELVEN DATOS 

  //devuelve el numero de articulos del carrito
  const getCartCount = ()=>{
    const cartCount = cartItems.reduce((acum, item)=>{
      return acum + item.quantity

    },0)

    return cartCount
  }


  //capcula el precio total del carrito
  const getCartTotal= ()=>{

    const cartTotal = cartItems.reduce((acum, item)=>{
      return acum +  ((item.quantity * item.price) * ( 1- item.discountPercentage /100)) 
    },0)

    return Number(cartTotal).toFixed(2)
  }


  //calcula el precio total del producto antes y despues del descuento 
  const getTotalProduct = (product) =>{

    const totalDiscount = ((product.quantity * product.price) * ( 1- product.discountPercentage /100))
    const totalBeforeDiscount = product.quantity * product.price

    return { 
      beforeDiscount : Number(totalBeforeDiscount.toFixed(2)),
      totalProduct: Number(totalDiscount.toFixed(2))
    }
  }

  //devuelve true or false si el producto se encuentra en el carrito 
  const isInCart = (productId) => {
    return cartItems.some(item => item.id === productId)
  }






  return (
    <CartContext.Provider value={{
      
      cartItems,// CARRITO

      //FUNCIONES QUE MODIFICAN EL CARRITO 
      addToCart,
      removeFromCart,
      decreaseQuantity,
      clearCart,

      //FUNCIONES QUE DEVUELVEN DATOS DEL CARRITO
      getCartCount,
      getCartTotal,
      getTotalProduct,
      isInCart
      
    }}>

      {children}
    </CartContext.Provider>
  );
}