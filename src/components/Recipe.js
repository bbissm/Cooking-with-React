import React from 'react';
import IngrendientList from "./IngrendientList";

import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

function Recipe(props) {
    const {
        name,
        image,
        cookTime,
        servings,
        instructions,
        ingredients
    } = props
    return (
        <Card className="mt-12">
            <CardImage
                src={image}
                alt="Card Image"
                className="h-48 object-cover"
            />

            <CardBody>
                <h3 color="gray">{name}</h3>
                <Paragraph color="gray">
                    Don't be scared of the truth because we need to restart the human
                    foundation in truth And I love you like Kanye loves Kanye I love
                    Rick Owens’ bed design but the back is...
                </Paragraph>
                <div>
                    <span>Cook Time</span>
                    <span>{cookTime}</span>
                </div>
                <div>
                    <span>Serving: 3</span>
                    <span>{servings}</span>
                </div>
                <div>
                    <span>Instructions:</span>
                    <div>
                        instructions
                    </div>
                </div>
                <div>
                    <span>Ingredients:</span>
                    <div>
                        <IngrendientList ingredients={ingredients}/>
                    </div>
                </div>
            </CardBody>

            <CardFooter className="flex">
                <Button color="lightBlue" size="lg" ripple="light">
                    Edit
                </Button>
                <Button color="red" size="lg" ripple="light" className="ml-2">
                    Delete
                </Button>
            </CardFooter>
        </Card>
    );
}

export default Recipe;