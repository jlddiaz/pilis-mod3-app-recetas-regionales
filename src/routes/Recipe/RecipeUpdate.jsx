import { useParams } from 'react-router-dom'
import FormRecipe from '../../components/FormRecipe/FormRecipe'
import { useContext } from 'react'
import { RecipeContext } from '../../context/RecipeContext'

const RecipeUpdate = () => {
  const { id } = useParams()
  const { recipes } = useContext(RecipeContext)
  const [recipe] = recipes.filter((recipe) => recipe.id === id)

  return (
    <div className="form-container">
      <FormRecipe recipe={recipe} isUpdate={true} />
    </div>
  )
}
export default RecipeUpdate
