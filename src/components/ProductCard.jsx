import React from 'react'

const ProductCard =({product}) => {


  //funcion para pintar los precios en productCard
  const getUnitPrice = (product) => {
    const before = product.price
    const after = product.price * (1 - product.discountPercentage / 100)

    return {
      before: Number(before.toFixed(2)),
      after: Number(after.toFixed(2))
    }
  }

  const { before, after } = getUnitPrice(product)

  const isAvailable = product.availabilityStatus === "In Stock"

  


  return (
    <div className='card' >
      <img src={product.images[0]} alt="" />
      <h3>{product.title}</h3>
      <h4>{product.brand}</h4>
      <p className='card-description'>{product.description}</p>
      
      <div className='card-prices'>
        <div className='card-prices-before' >{before}</div>
        ⮕
        <div className='card-prices-after' >{after} €</div>
      </div>


      <div className='card-action'>
        <div className={`card-action-avaliable ${isAvailable? "stock" : ""}`} >{product.availabilityStatus}</div> 
        <button className='card-action-button button' disabled={!isAvailable} onClick={() => addToCart(product)}>Comprar</button>
      </div>

      
    </div>
  )
}

export default ProductCard