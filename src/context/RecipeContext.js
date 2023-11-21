import { createContext, useState } from "react";

export const RecipeContext = createContext({
  recipes: [],
  setRecipes: () => {}
})

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const value = { recipes, setRecipes };

  return <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>;
}