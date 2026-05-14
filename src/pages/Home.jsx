import React, { useEffect, useState } from 'react'
import CategoryCard from '../components/CategoryCard';

import electronicsImg from "../assets/electronics.jpg";
import menImg from "../assets/men.jpg";
import womenImg from "../assets/women.jpg";
import beautyImg from "../assets/beauty.jpg";
import homeImg from "../assets/home.jpg";
import vehiclesImg from "../assets/vehicles.jpg";


const Home =() =>{

  const categories = [
    { name:"Men",
      image:menImg,
      descript: "Tu mejor versión empieza aquí"
    },

    { name:"Electronics",
      image: electronicsImg,
      descript: "Haz más, vive más"
    },

    { name:"Vehicles",
      image:vehiclesImg,
      descript: "Diseñado para sentir"
    },

    { name:"Women",
      image:womenImg,
      descript: "Brilla a tu manera"
    },

    { name:"Beauty",
      image:beautyImg,
      descript: "Confianza en cada detalle"
    },
    { name:"Home",
      image:homeImg,
      descript: "Crea momentos que importan"
    },
    
    
  ]

 



  return (
    <>
  {/*   <section className='home-searchbar'>
      <input type="text" />
    </section> */}

    <section className='home-grid'>
      {categories.map((category, index )=>{
        return <article className='category-container' key={index}>
                  <CategoryCard categoryname={category.name}
                  categoryimage={category.image}
                  categorydescript={category.descript}/>
                </article>
      })}
      
    </section>
    </>
  )
}

export default Home