import { Link } from 'react-router-dom'
import Comida from '../../assets/comida.jpg'
import './Recipe.css'
const Recipe = ({ recipe }) => {
  const {
    id,
    name,
    description,
    image,
    ingredients,
    preparation,
    preparation_time,
  } = recipe
  
  return (
    <div className="palette-container">
      <div className="palette">
        <h3>{name}</h3>
        <img src={Comida} alt="" className='img-recipe'/>
        <div className='recipe-body'>
          <span>Descripción: {description}</span>
          <span>Ingredientes: {ingredients}</span>
          <span>Preparación: {preparation}</span>
          <span>Duración: {preparation_time}</span>
        </div>        
      </div>
      <div className="palette-actions">
        <Link className="btn-see-more" to={`/recipe/${id}`}>Ver más</Link>
        <Link className="btn-see-more" to={`/recipe/update/${id}`}>Editar Receta</Link>
      </div>
    </div>
  )
}

export default Recipe
