import React from 'react';
import Input from "@material-tailwind/react/Input";

function RecipeIngredientEdit(props) {
    const {
        ingredient,
        handleIngredientChange,
        handleIngredientDelete
    } = props

    function handleChange(changes) {
        handleIngredientChange(ingredient.id, {...ingredient, ...changes})
    }

    return (
        <div className="flex space-x-10">
            <Input
                type="text"
                color="pink"
                size="regular"
                value={ingredient.name}
                onChange={(e) => handleChange({name: e.target.value})}
            />
            <Input
                type="text"
                color="pink"
                size="regular"
                value={ingredient.amount}
                onChange={(e) => handleChange({amount: e.target.value})}
            />
            <span
                className="text-red-500 text-5xl"
                onClick={() => handleIngredientDelete(ingredient.id)}
            >
                &times;
            </span>
        </div>
    );
}

export default RecipeIngredientEdit;