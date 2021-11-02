import React from 'react';
import Recipe from "./Recipe";
import Button from "@material-tailwind/react/Button";


function RecipeList({recipes}) {
    return (
        <>
        <div className="w-1/2">
            {recipes.map(recipe => {
                return <Recipe
                    key={recipe.id}
                    {...recipe}
                />
            })}
        </div>
        <Button className="mt-12">Add Recipe</Button>
        </>
    );
}

export default RecipeList;