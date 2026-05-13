import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

const Home =() =>{

  const [products , setProducts] = useState([])
  const [limit , setLimit] = useState([])
  const [skip , setSkip] = useState([])
//
  const urlProducts = `https://dummyjson.com/products?limit=${0}&skip=${0}`

  useEffect(()=>{

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
        
  
  const handlePagination =()=>{


  }

  
 



  return (
    <>
    <section className='home-searchbar'>
      <input type="text" />
    </section>

    <section className='home-grid'>
      {products.map((product )=>{
        return <article className='card-container' key={product.id}>{<ProductCard product={product} />}</article>
      })}
      
    </section>
    <section className='home-pagination'>
      <button className='home-pagination-btn btn'
              >Ver Más</button>
      </section>
    </>
  )
}

export default Home