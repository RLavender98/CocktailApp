import React, { useState } from "react";
import {Cocktail} from "./App";


const CocktailList = (ingredients: string[]): React.FC => {
    const [cocktailIdeas, setCocktailIdeas] = useState([]);
    const addCocktailToCocktailIdeasIfDoesNotExist = (cocktail: Cocktail) => {
        const indexInIdeas = cocktailIdeas.findIndex
    }

    ingredients.forEach(ingredient => fetch(`www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`))
    return (

    );
}
export default CocktailList;