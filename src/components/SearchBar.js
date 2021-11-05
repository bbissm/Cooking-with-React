import React, {useContext} from 'react';
import NavbarInput from "@material-tailwind/react/NavbarInput";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import {RecipeContext} from "./App";

function SearchBar(props) {
    const {handleSearch} = useContext(RecipeContext)

    return (
        <div>
            <NavbarInput type="text" placeholder="Search here" onChange={(e) => handleSearch(e.target.value)} />
        </div>
    );
}

export default SearchBar;