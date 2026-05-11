import React from 'react'


const Cart = () =>{

  const urlProducts = "https://dummyjson.com/products"

  const getAllProducts = async() =>{
    const allProducts = await fetch(urlProducts)
    .then((response)=>{
      response.ok? response.json : Promise.reject(`mensaje error`)
    })
    .then((products)=> products)
    .catch((error)=> console.log(error))

    console.log(allProducts)
  }

  getAllProducts()

  return (
    <div></div>
  )
}

export default Cart