import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Home =() =>{

  const [products , setProducts] = useState([])

  useEffect(()=>{
    
    const urlProducts = "https://dummyjson.com/products"

    const getAllProducts = async() =>{
      const allProducts = await fetch(urlProducts)
      .then((response)=>{
        return response.ok? response.json() : Promise.reject(`mensaje error`)
      })
      .then((productos)=> setProducts(productos.products))
      .catch((error)=> console.log(error))

      
      
    }


    getAllProducts()

   
    
    

  },[])
        
  


  
 



  return (
    <>
    <section className='home-searchbar'>
      <input type="text" />
    </section>

    <section className='home-grid'>
      {products.map((product )=>{
        return <article key={product.id}>{<ProductCard product={product} />}</article>
      })}
      
    </section>
    </>
  )
}

export default Home