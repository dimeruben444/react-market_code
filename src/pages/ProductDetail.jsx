import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const ProductDetail =() => {
  const { id } = useParams()
  const [singleProduct , setSingleProduct] = useState({})

  const[isLoading , setIsLoading]= useState(true)

  const [error, setError] = useState(null)
  
  


  useEffect(()=>{

    const MIN_SPINNER_TIME = 600
    const startTime = Date.now()

    const getSingleProduct = async () => {
      try {
        const url = `https://dummyjson.com/products/${id}`
        const response = await fetch(url)
        if (!response.ok) throw new Error("Error en el fetch")
        

        const producto = await response.json()
        setSingleProduct( producto)

      } catch (error) {
        setError(error.message)

      } finally {
        
        const elapsed = Date.now() - startTime
        const remaining = Math.max(0, MIN_SPINNER_TIME - elapsed)
        

        setTimeout(() => {
          setIsLoading(false)
          
        }, remaining)
      }
    }

    getSingleProduct()

  },[id])
  


   const getUnitPrice = (product) => {
    if (!product.price) return { before: 0, after: 0 }

    const before = product.price
    const after = product.price * (1 - product.discountPercentage / 100)

    return {
      before: Number(before.toFixed(2)),
      after: Number(after.toFixed(2))
    }
  }

  const { before, after } = getUnitPrice(singleProduct)
  const isAvailable = singleProduct.availabilityStatus === "In Stock"


  return (
    <>
      {isLoading && (
        <div className="grid-spinner">
          <div className="spinner"></div>
        </div>
      )}

      {!isLoading && (
      <section className='single-product'>

        <div className='single-product-header'>

          <h3>{singleProduct.title}</h3>
          <h4>{singleProduct.brand}</h4>

          <div className='card-prices'>
            <div className='card-prices-after' >{after} €</div>
              -
            <div className='card-prices-before' >{before}</div>  
          </div>

        </div>

        <img className='card-img' src={singleProduct.images?.[0]} alt="" />


        <p>{singleProduct.description}</p>

       

        <section className='single-product-status'>
          <div>{singleProduct.warrantyInformation}</div>
          <div>{singleProduct.shippingInformation}</div>
          <div className={`card-action-avaliable ${isAvailable? "stock" : ""}`} >{singleProduct.availabilityStatus}</div> 
          <div>{singleProduct.rating}estrellas</div>
        </section>

        <button>Añadir a la cesta</button>

      </section>
      )}




    </>
  )
}

export default ProductDetail