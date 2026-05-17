import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { subcategories } from "../data/subcategories"
import ProductCard from "../components/ProductCard"



const CategoryPage = () => {
  const { mainCategory } = useParams() // devuelve la categoria principal

  const subcats = subcategories[mainCategory] || []   //si la categoria existe devuelve un array de subcategorias

  const [currentIndex, setCurrentIndex] = useState(0) //enpieza en la primera subcategoria 
  const [products , setProducts] = useState([]) //arary de productos
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false) // estado para saber si se ha cargado una vez o mas

  const currentSubcategory = subcats[currentIndex]//es la subcategoria en la que estoy
  const sensorRef = useRef(null)


  const[isLoading , setIsLoading]= useState(false)
  const lastFetchedIndexRef = useRef(null)

 
 
  /*  

  // mi version
  useEffect(()=>{
    if (currentIndex > subcats.length -1 ) return

    setIsLoading(true)

    const getAllProducts = async() =>{
      const urlProducts = `https://dummyjson.com/products/category/${subcats[currentIndex]}`
      const allProducts = await fetch(urlProducts)
      .then((response)=>{
        return response.ok? response.json() : Promise.reject(`Error en el fetch`)
      })
      .then((productos)=> setProducts(prev=>[...prev, ...productos.products]))
      .catch((error)=> console.log(error))
      .finally(()=>setIsLoading(false))
    }
  
    getAllProducts()

  
  },[currentIndex])
    
  
  */
  
  useEffect(() => {

    if (currentIndex > subcats.length - 1) return

    //Si ya hemos hecho fetch para este índice, no lo repetimos
    if (lastFetchedIndexRef.current === currentIndex) return
    lastFetchedIndexRef.current = currentIndex

    const MIN_SPINNER_TIME = 600
    const startTime = Date.now()

    setIsLoading(true)

    const getAllProducts = async () => {
      try {
        const url = `https://dummyjson.com/products/category/${subcats[currentIndex]}`
        const response = await fetch(url)
        if (!response.ok) throw new Error("Error en el fetch")

        const productos = await response.json()

        setProducts(prev => [...prev, ...productos.products])

      } catch (error) {
        console.log(error)

      } finally {
        const endTime = Date.now()
        const elapsed = endTime - startTime
        const remaining = Math.max(0, MIN_SPINNER_TIME - elapsed)

        setTimeout(() => {
          setIsLoading(false)
          setHasLoadedOnce(true)
        }, remaining)
      }
    }

    getAllProducts()

  }, [currentIndex])

  














  
  useEffect(()=>{
    if (!sensorRef.current) return  // comprueba si el sensor existe sino return hace que el observer no se pueda crear antes de que react haya renderizado el div sensorref
    
    function callback(entries){
      const entry = entries[0] //entradas entries[0] es lainformacion del sensor
      

      if (entry.isIntersecting && //entry.isIntersecting significa el sensor esta en pantalla
          //entry.intersectionRatio >= 0.5 &&//entry.intersectionRatio el sensor se minimoel 50%(cargas tempranas)
          !isLoading && 
          currentIndex < subcats.length -1){ 

        setCurrentIndex( prev => prev + 1) //setea el valor actual al valor previo prev + 1 
      }
    }
    const observer = new IntersectionObserver(callback) // crea el observer y le pasa el callback 

    observer.observe(sensorRef.current) //vigila este elemento del dom 

    return () => observer.disconnect() //limpia el observer cuando se desmonta 
  },[isLoading, currentIndex, hasLoadedOnce])
   
  if (!hasLoadedOnce && isLoading) {
    return (
      <div className="fullscreen-loader">
        <div className="spinner"></div>
      </div>
    )
  }

  
  
  return (
    <>
    
    <section className={`home-grid grid-products`}>

      {products.map((product, index) => {
        return (
          <article className='card-container' key={`${product.id}-${index}`}>
            <ProductCard product={product} />
          </article>
        )
      })}

      {isLoading && hasLoadedOnce && (
        <div className="grid-spinner">
          <div className="spinner"></div>
        </div>
      )}

      
      <div ref={sensorRef} style={{ height: "40px" }}></div>
    </section>
    
    </>
  )

  
}

export default CategoryPage
