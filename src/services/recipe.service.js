import { api } from './api'

export const getRecipes = async () => {
  try {
    const response = await fetch(`${api.server}/recipes`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}

export const getRecipeById = async (id) => {
  try {
    const response = await fetch(`${api.server}/recipes/${id}`)
    return response.json()
  } catch {
    throw new Error('could not fetch')
  }
}
export const createRecipe = async ({
  name,
  description,
  image,
  ingredients,
  preparation,
  preparation_time,
}) => {
  try {
    const response = await fetch(`${api.server}/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        image,
        ingredients,
        preparation,
        preparation_time,
      }),
    })
    return response
  } catch {
    throw new Error('could not fetch')
  }
}

export const updateRecipe = async (
  id,
  { name, description, image, ingredients, preparation, preparation_time }
) => {
  try {
    const response = await fetch(`${api.server}/recipes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        description,
        image,
        ingredients,
        preparation,
        preparation_time,
      }),
    })
    return response
  } catch {
    throw new Error('could not fetch')
  }
}
