import Recipe from "./Recipe";
import './Recipes.css'

const Recipes = ({ recipes }) => {
  
  return (
    <div className='container-recipes'>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}

export default Recipes