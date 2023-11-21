import { useContext, useEffect, useState } from 'react'

import Recipes from '../../components/Recipe/Recipes'
import { RecipeContext } from '../../context/RecipeContext'
import { getRecipes } from '../../services/recipe.service'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  const { recipes, setRecipes } = useContext(RecipeContext)
  const [search, setSearch] = useState('')

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  let results = []
  if (!search) {
    results = recipes
  } else {
    results = recipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.toLowerCase())
    )
  }

  useEffect(() => {
    getRecipes()
      .then((data) => {
        setRecipes(data)
      })
      .catch((err) => console.warn(err))
  }, [])

  return (
    <div className="main-container">
      <header className="header">
        <input
          type="text"
          onChange={searcher}
          value={search}
          placeholder="Buscar Receta"
        />

        <Link className="nav-link" to="/recipe/create">
          Nueva Receta
        </Link>
      </header>
      <main>{results && <Recipes recipes={results} />}</main>
    </div>
  )
}

export default Home
