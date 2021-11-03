import React, { useContext } from 'react';
import Input from "@material-tailwind/react/Input";
import Textarea from "@material-tailwind/react/Textarea"
import Button from "@material-tailwind/react/Button"
import RecipeIngredientEdit from './RecipeIngredientEdit'
import {RecipeContext} from "./App";
import uuidv4 from 'uuid/dist/v4'

function RecipeEdit({recipe}) {
    const {handleRecipeChange,handleRecipeSelect} = useContext(RecipeContext)

    function handleChange(changes) {
        handleRecipeChange(recipe.id, {...recipe, ...changes})
    }

    function handleIngredientChange(id, ingredient) {
        const newIngredients = [...recipe.ingredients]
        const index = newIngredients.findIndex(i => i.id === id)
        newIngredients[index] = ingredient
        handleChange({ingredients: newIngredients})
    }

    function handleIngredientAdd() {
        const newIngredient = {
            id: uuidv4(),
            name: '',
            amount: ''
        }
        handleChange({ingredients: [...recipe.ingredients, newIngredient]})
    }

    function handleIngredientDelete(id) {
        handleChange({ingredients: recipe.ingredients.filter(i => i.id !== id)})
    }

    return (
        <div className="w-full">
            <div className="md:fixed md:w-1/2 md:pr-8">
                <button className="text-6xl flex ml-auto"
                        onClick={() => handleRecipeSelect(undefined)
                        }>
                    &times;
                </button>
                <div className="space-y-4">
                    <Input
                        type="text"
                        color="pink"
                        size="regular"
                        outline={true}
                        placeholder="Name"
                        value={recipe.name}
                        onChange={e => handleChange({name: e.target.value})}
                    />
                    <Input
                        type="text"
                        color="pink"
                        size="regular"
                        outline={true}
                        placeholder="Image"
                        value={recipe.image}
                        onChange={e => handleChange({image: e.target.value})}
                    />
                    <Input
                        type="text"
                        color="pink"
                        size="regular"
                        outline={true}
                        placeholder="Cook Time"
                        value={recipe.cookTime}
                        onChange={e => handleChange({cookTime: e.target.value})}
                    />
                    <Input
                        type="number"
                        color="pink"
                        size="regular"
                        outline={true}
                        placeholder="Servings"
                        value={recipe.servings}
                        onChange={e => handleChange({servings: parseInt(e.target.value)})}
                    />
                    <Textarea
                        type="text"
                        color="pink"
                        size="regular"
                        outline={true}
                        placeholder="Instructions"
                        value={recipe.instructions}
                        onChange={e => handleChange({instructions: e.target.value})}
                    />
                    <div className="ingredients">
                        <div className="flex">
                            <div className="flex-1">Name</div>
                            <div className="flex-1">Amount</div>
                            <div></div>
                        </div>
                        {recipe.ingredients.map(ingredient => (
                            <RecipeIngredientEdit
                                key={ingredient.id}
                                handleIngredientChange={handleIngredientChange}
                                handleIngredientDelete={handleIngredientDelete}
                                ingredient={ingredient}
                            />
                        ))}
                        <Button
                            className="mx-auto my-12"
                            onClick={() => handleIngredientAdd()
                            }>
                            Add Ingredient
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecipeEdit;