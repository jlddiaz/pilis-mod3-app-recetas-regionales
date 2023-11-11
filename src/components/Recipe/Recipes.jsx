import Recipe from "./Recipe";

const Recipes = ({ recipes }) => {
  return (
    <div className='grid'>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} palette={recipe} />
      ))}
    </div>
  );
}

export default Recipes