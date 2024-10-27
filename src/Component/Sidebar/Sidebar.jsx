

const Sidebar = ({recipeQueue,handleRemove,preparedRecipe, calculateTimeAndCalories, totalTime, totalCalories}) => {
    return (
        <div className="md:w-1/3 w-full border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
            {/* want to cook table  */}
            <div className="overflow-x-auto mt-8">
                <h2 className=" border-b-2 mx-auto font-semibold text-2xl text-gray-700  text-center pb-3">Want to Cook : {recipeQueue.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr  className="hover">
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            recipeQueue.map((recipe, index) =>(
                                <tr key={index}  className="hover">
                                    <th>{index+1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                    <td>
                                    <button onClick={()=>{handleRemove(recipe.recipe_id)
                                        calculateTimeAndCalories(recipe.preparing_time, recipe.calories )
                                    }} className="mt-2 py-1  px-6 bg-green-400 rounded-full text-xl text-gray-700">Preparing</button>
                                    </td>
                                    
                                    
                                </tr>
                            ))
                        }
                    
                    
                   
                    </tbody>
                </table>
            </div>

            {/* currently cooking table */}
            <div className="overflow-x-auto mt-8">
                <h2 className=" border-b-2 mx-auto font-semibold text-2xl text-gray-700  text-center pb-3">Currently cooking : {preparedRecipe.length}</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr  className="hover">
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        {
                            preparedRecipe.map((recipe, index) =>(
                                <tr key={index}  className="hover">
                                    <th>{index+1}</th>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                       
                                    
                                </tr>
                            ))
                        }

                                <tr   className="border-none">
                                    <th></th>
                                    <td></td>
                                    <td>Total Time: {totalTime}</td>
                                    <td>Total Calories: {totalCalories} </td>
                                       
                                    
                                </tr>
                    
                    
                   
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default Sidebar;