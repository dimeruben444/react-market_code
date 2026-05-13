import React from 'react'


const CategoryCard = ({categoryname , categoryimage}) => {


  return (
    <link  to={`/category/${categoryname}`} className="category-card"> 
        <img src={categoryimage} alt={categoryname} />
        <h2>{categoryname}</h2>
        <button>Comprar</button>

    </link>
  )
}

export default CategoryCard