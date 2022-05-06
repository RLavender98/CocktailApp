import React, { useState, useEffect } from "react";
import { Cocktail, CocktailResponse } from "../types/Cocktail";
import { mapCocktailResponseToCocktail } from "../types/CocktailMapper";

interface CocktailListProps {
    ingredients: string[]
}

const CocktailList = ({ingredients}: CocktailListProps): React.ReactElement => {
    const [cocktailIdeas, setCocktailIdeas] = useState<Cocktail[]>([]);
    const addCocktailToCocktailIdeasIfDoesNotExist = (newCocktail: Cocktail) => {
        if (cocktailIdeas.findIndex(c => c.id === newCocktail.id) === -1) {
            console.log(newCocktail);
            setCocktailIdeas(cocktailIdeas => [...cocktailIdeas, newCocktail]);
        } 
    }
    
    ingredients.forEach(ingredient => 
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`)
            .then(response => response.json())
            .then(response => response.drinks.forEach((drink: CocktailResponse) => addCocktailToCocktailIdeasIfDoesNotExist(mapCocktailResponseToCocktail(drink))))
            );


    return (
        <div>
            {cocktailIdeas.map(cocktail => {
                return (
                    <div key={cocktail.id}>
                        {cocktail.name}
                    </div>
            )})}
        </div>
    );
}
export default CocktailList;