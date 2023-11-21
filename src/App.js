import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './routes/Home/Home'
import Navigation from './routes/Navigation/Navigation'

// import LoginRef from './routes/Login/LoginRef'
import RecipeDisplay from './routes/Recipe/RecipeDisplay'
import RecipeCreation from './routes/Recipe/RecipeCreation'
import RecipeUpdate from './routes/Recipe/RecipeUpdate'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Navigation />}> */}
              <Route index element={<Home />} />
              {/* <Route path="login" element={<LoginRef />} /> */}
              <Route path="recipe/:id" element={<RecipeDisplay />} />
              <Route path="recipe/update/:id" element={<RecipeUpdate />} />
              <Route path="recipe/create" element={<RecipeCreation />} />
            {/* </Route> */}
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
