import React, {useContext} from 'react';
import Recipe from "./Recipe";
import Button from "@material-tailwind/react/Button";
import {RecipeContext} from "./App";

function RecipeList(props) {
    const {handleRecipeAdd} = useContext(RecipeContext)
    const {
        recipes,
        width
    } = props
    return (
        <>
            <Button className="mx-auto my-12" onClick={handleRecipeAdd}>Add Recipe</Button>
            <div className={width}>
                {recipes.map(recipe => {
                    return <Recipe
                        key={recipe.id}
                        {...recipe}
                    />
                })}
            </div>
        </>
    );
}

export default RecipeList;