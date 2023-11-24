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
    <div className="card-recipe">
      <div className="card-recipe-header">
        <img src={Comida} alt="" />
        <h4>{name}</h4>
      </div>
      <div className="card-recipe-body">
        <p>Descripción: {description}</p><br />
        {/* <p>Ingredientes: {ingredients}</p>
        <p>Preparación: {preparation}</p> */}
        <p>Duración: {preparation_time}hs</p>
      </div>

      <div className="card-recipe-footer">
        <Link className="btn-see-more" to={`/recipe/${id}`}>
          Ver más
        </Link>
        <Link className="btn-edit" to={`/recipe/update/${id}`}>
          Editar Receta
        </Link>
      </div>
    </div>
  )
}

export default Recipe
