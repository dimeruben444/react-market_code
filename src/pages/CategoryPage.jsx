import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { subcategories } from "../data/subcategories"



const CategoryPage = () => {
  const { mainCategory } = useParams()

  const subcats = subcategories[mainCategory] || []   // evita errores si no existe

  const [currentIndex, setCurrentIndex] = useState(0)

  const currentSubcategory = subcats[currentIndex]

  const [products , setProducts] = useState([])
  
 
  const urlProducts = `https://dummyjson.com/products/category/${currentSubcategory}`
  
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

export default CategoryPage
