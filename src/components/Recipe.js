import React, {useContext} from 'react';
import IngrendientList from "./IngrendientList";
import {RecipeContext} from "./App";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

function Recipe(props) {
    const {handleRecipeDelete,handleRecipeSelect} = useContext(RecipeContext)
    const {
        id,
        name,
        image,
        cookTime,
        servings,
        instructions,
        ingredients,
    } = props
    return (
        <div className="px-4 py-8">
            <Card className="h-full">
                <CardImage
                    src={image}
                    alt="Card Image"
                    className="h-48 object-cover"
                />

                <CardBody>
                    <h3 color="gray">{name}</h3>
                    <div>
                        <span>Cook Time</span>
                        <span>{cookTime}</span>
                    </div>
                    <div>
                        <span>Serving:</span>
                        <span>{servings}</span>
                    </div>
                    <div>
                        <span>Instructions:</span>
                        <Paragraph color="grey">
                            {instructions}
                        </Paragraph>
                    </div>
                    <div>
                        <span>Ingredients:</span>
                        <div>
                            <IngrendientList ingredients={ingredients}/>
                        </div>
                    </div>
                </CardBody>

                <CardFooter className="flex">
                    <Button
                        onClick={() => handleRecipeSelect(id)}
                        color="lightBlue"
                        size="lg"
                        ripple="light"
                    >
                        Edit
                    </Button>
                    <Button onClick={() => handleRecipeDelete(id)} color="red" size="lg" ripple="light" className="ml-2">
                        Delete
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default Recipe;