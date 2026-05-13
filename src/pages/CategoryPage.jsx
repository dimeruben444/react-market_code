import { useParams } from "react-router-dom"

const CategoryPage = () => {
  const { mainCategory } = useParams()

  return <h1>{mainCategory}</h1>
}


export default CategoryPage