import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import './RecipeDisplay.css'
import { RecipeContext } from '../../context/RecipeContext'

const RecipeDisplay = () => {
  const { id } = useParams()
  const { recipes } = useContext(RecipeContext)
  const [recipe] = recipes.filter((recipe) => recipe.id === id)

  return (
    <div className="recipe-display-container">
      <div className="recipe-display-card">
        <h1 className="recipe-display-name">{recipe.name}</h1>
        <div className="section-img">
          <img src={recipe.image} alt="" className="img-recipe-display" />
          <p>{recipe.description}</p>
        </div>
        <div className="section-body">
          <p>
            <b>Ingredientes:</b>
          </p>
          <p> {recipe.ingredients}</p>
          <p>
            <b>Preparación:</b>{' '}
          </p>
          <p>{recipe.preparation}</p>
          <p>
            <b>Tiempo de Preparación:</b> {recipe.preparation_time}
          </p>
        </div>
        <Link className="btn-back" to="/">
          Volver al Inicio
        </Link>
      </div>
    </div>
  )
}
export default RecipeDisplay
