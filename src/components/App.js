import React, {useState, useEffect} from 'react';
import NavigationBar from "./NavigationBar";
import RecipeList from "./RecipeList";
import RecipeEdit from "./RecipeEdit";
import '../css/app.css'
import "@material-tailwind/react/tailwind.css";
import uuidv4 from 'uuid/dist/v4'

export const RecipeContext = React.createContext();
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)
  const [selectedRecipeId, setSelectedRecipeId] = useState()
  const [shownRecipes, setShownRecipes] = useState(recipes)
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  // always when the dom changes
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  // only when recipes changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    setShownRecipes(recipes)
  }, [recipes])

  const recipeContextValue =  {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange,
    handleSearch
  }

  function handleRecipeSelect(id) {
    if (setSelectedRecipeId != null && setSelectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: '',
      image:'',
      servings: 1,
      cookTime: '',
      instructions: '',
      ingredients: [
        {
          id:uuidv4(),
          name: '',
          amount: ''
        }
      ]
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleResetLocalstorage() {
    localStorage.clear()
    window.location.reload()
  }

  function handleSearch (search) {
    setShownRecipes(recipes.filter(r => r.name.toLowerCase().includes(search)))
  }

  return (
      <RecipeContext.Provider value={recipeContextValue}>
        <NavigationBar
            handleResetLocalstorage={handleResetLocalstorage}
        />
        <div className="md:p-4 md:flex p-4 md:p-0 md:space-x-4 md:flex-row-reverse">
          {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
           <div className="w-full">
            <RecipeList
                recipes={shownRecipes}
                width={!selectedRecipe && "grid md:grid-cols-2"}
            />
          </div>
        </div>
      </RecipeContext.Provider>
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    image:'https://martin-skills.ch/uploads/hobby/c978fd72ed8f311eda1052056532e31b-616df48645086.jpg',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: 2,
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    image:'https://martin-skills.ch/uploads/hobby/FILE0014-616df1b950208.jpg',
    servings: 5,
    cookTime: '0:45',
    instructions: "1. Put paprika on pork\n2. Put pork in oven\n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Pork',
        amount: '3 Pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
]

export default App;
