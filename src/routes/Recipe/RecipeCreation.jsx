import FormRecipe from '../../components/FormRecipe/FormRecipe'

const RecipeCreation = () => {
  const initialStateRecipe = {
    id:'',
    name: '',
    description: '',
    image: '',
    ingredients: '',
    preparation: '',
    preparation_time: '',
  }
  return (
    <div className="main-container">
      <FormRecipe recipe={initialStateRecipe} isUpdate={false} />
    </div>
  )
}
export default RecipeCreation
