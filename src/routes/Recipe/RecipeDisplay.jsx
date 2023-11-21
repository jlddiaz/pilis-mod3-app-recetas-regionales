import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import './RecipeDisplay.css'
import Comida from '../../assets/comida.jpg'
import { RecipeContext } from '../../context/RecipeContext'

const RecipeDisplay = () => {
  const { id } = useParams()
  const { recipes } = useContext(RecipeContext)
  const [recipe] = recipes.filter((recipe) => recipe.id === id)

  return (
    <div className="palette-display-container">
      <div className="palette-display-card">
        <h1 className="palette-display-name">{recipe.name}</h1>
        <img src={Comida} alt="" className="img-recipe-display" />
        <span>{recipe.description}</span>
        <span>Ingredientes: {recipe.ingredients}</span>
        <span>Preparación: </span>
        <span>{recipe.preparation}</span>
        <span>Tiempo de Preparación: {recipe.preparation_time}</span>
      </div>
      <Link className="btn-back" to="/">
        Volver al Inicio
      </Link>
    </div>
  )
}
export default RecipeDisplay
