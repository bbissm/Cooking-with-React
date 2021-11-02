import React from 'react';
import Ingredient from "./Ingredient";

function IngrendientList({ingredients}) {
    const ingriedientElements = ingredients.map(ingredient => {
        return <Ingredient key ={ingredient.id} {...ingredient}/>
    })
    return (
        <ul className="list-disc">
            {ingriedientElements}
        </ul>
    );
}

export default IngrendientList;