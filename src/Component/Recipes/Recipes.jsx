//import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";


const Recipes = ({addRecipeQueue}) => {
    const [recipes, setREcipes] = useState([])
    useEffect(()=>{
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setREcipes(data))
    },[])
    console.log(recipes)
    return (
        <div className="md:w-2/3 w-full">
           
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {
            recipes.map(recipe => 
                    <div key={recipe.recipe_id} className="card bg-base-100  border-2">
                    <figure className="px-8 pt-6">
                        <img className="w-full md:h-52 rounded-xl"
                        src={recipe.recipe_image}
                        alt="recipe image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-lg font-semibold text-gray-800">{recipe.recipe_name}</h2>
                        <p className="text-gray-600 text-base">{recipe.short_description}</p>
                        
                        
                        <h3 className="text-lg font-medium text-gray-800">Ingredients: {recipe.ingredients.length}</h3>
                        <ul className="ml-8">
                            {
                                recipe.ingredients.map((item, index) => <li className="list-disc text-gray-600" key={index}>{item}</li> )
                            }
                        </ul>
                        <div className="flex gap-4">
                            <div className="flex gap-1 justify-center items-center">
                                <i className="fa-regular fa-clock text-2xl"></i>
                                <p>{recipe.preparing_time} Minute</p>
                            </div>
                            <div className="flex gap-1 justify-center items-center ">
                            <i className="fa-solid fa-fire-flame-curved text-2xl"></i>
                                <p>{recipe.calories} Calories</p>
                            </div>
                            
                        </div>
                        
                        
                        <div className="card-actions justify-start ">
                        <button onClick={()=>{addRecipeQueue(recipe)}} className="btn bg-green-500 rounded-full font-medium px-8 text-xl text-gray-800 mt-6">Want to cook</button>
                        </div>
                    </div>
                    </div>
            )
           }
           </div>
            
        </div>
    );
};

export default Recipes;