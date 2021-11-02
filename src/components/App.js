import React, {useState} from 'react';
import RecipeList from "./RecipeList";
import '../css/app.css'
import "@material-tailwind/react/tailwind.css";

function App() {
  return (
     <RecipeList recipes={sampleRecipes}/>
  )
}

const sampleRecipes = [
  {
    id:1,
    image:'https://martin-skills.ch/uploads/hobby/c978fd72ed8f311eda1052056532e31b-616df48645086.jpg',
    name:'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: [
      {
        id:1,
        name:'first'
      },
      {
        id:1,
        name:'second'
      }
    ],
    ingredients: [
      {
        id:1,
        name:'Chicken',
        amount: '2 Pounds'
      }
    ]
  },
  {
    id:2,
    image:'https://martin-skills.ch/uploads/hobby/FILE0014-616df1b950208.jpg',
    name:'Plain Pork',
    servings: 2,
    cookTime: '0:50',
    instructions: [
      {
        id:1,
        name:'first'
      },
      {
        id:1,
        name:'second'
      }
    ],
    ingredients: [
        {
          id:1,
          name:'Chicken',
          amount: '2 Pounds'
        },
        {
          id:1,
          name:'Chicken',
          amount: '2 Pounds'
        }
    ]
  },

]

export default App;
