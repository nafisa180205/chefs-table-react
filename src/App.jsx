
import './App.css'
import Header from './Component/Header/Header'
import OurRecipes from './Component/OurRecipes/OurRecipes'
import Banner from './Component/Banner/Banner'
import Recipes from './Component/Recipes/Recipes'
import Sidebar from './Component/Sidebar/Sidebar'
import { useState } from 'react'

function App() {

  const [recipeQueue, setRecipeQueue] = useState([])
  const [preparedRecipe, setPreparedRecipe] =useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)

  const addRecipeQueue = (recipe) =>{
    const isExist =recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
    )

    if(!isExist){
      const newRecipeQueue = [...recipeQueue,recipe]
      setRecipeQueue(newRecipeQueue)
    }
    else{
      alert('Recipe Already exists in the queue')
    }
  }

  const handleRemove = id =>{
    // find which recipe to remove
    const deleteRecipe = recipeQueue.find(recipe => recipe.recipe_id === id)

    //remove from want to cook table
    const updatedQueue = recipeQueue.filter(recipe => recipe.recipe_id !== id)
    setRecipeQueue(updatedQueue)
    
    setPreparedRecipe([...preparedRecipe,deleteRecipe])

  }

  const calculateTimeAndCalories = (time,calorie) =>{
    setTotalTime(totalTime +time)
    setTotalCalories(totalCalories + calorie)

  }
  

  return (
    <div className='w-full'>
      {/* header / nav bar section */}
      <Header></Header>
      {/* Banner section */}
      <Banner></Banner>
      {/* our recipe section */}
      <OurRecipes></OurRecipes>

      <section className='md:w-10/12 w-11/12 flex flex-col md:flex-row gap-6 mx-auto'>
        {/* cards section */}
        <Recipes addRecipeQueue={addRecipeQueue}></Recipes>
        {/* sidebar section */}
        <Sidebar recipeQueue={recipeQueue} handleRemove={handleRemove} preparedRecipe={preparedRecipe} 
        calculateTimeAndCalories={calculateTimeAndCalories} totalCalories={totalCalories} totalTime={totalTime}></Sidebar>
      </section>
    </div>
  )
}

export default App
