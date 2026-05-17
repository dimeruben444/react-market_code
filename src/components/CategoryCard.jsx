import React from 'react'
import { Link } from 'react-router-dom'


const CategoryCard = ({categoryname , categoryimage, categorydescript}) => {


  return (
    <Link to={`/category/${categoryname}`} className="category-card">
      <div className="category-card__overlay">
        <p>{categorydescript}</p>
        <h2>{categoryname}</h2>
        <button className="category-card__button">Comprar</button>
      </div>
      <img src={`${categoryimage}?width=300&quality=60`} alt={categoryname} className="category-card__image" loading='lazy' />
      
    </Link>
  )
}

export default CategoryCard