import { useState } from 'react';
import { Ingredient, Cocktail, CocktailsResponse } from '../types/Cocktail';
import { mapCocktailResponseToCocktail } from '../types/CocktailMapper';
import './cocktailRecipe.css';

interface CocktailRecipeProps {
    cocktail?: Cocktail;
}

function CocktailRecipe({ cocktail }: CocktailRecipeProps) {
  
  return (
          <div className="Recipe">
            <p className="CocktailName">
              {cocktail?.name}
            </p>
            {cocktail && 'Glass Type: '}
            {cocktail?.glass}
            <br/>
            {cocktail && 'Ingredients List:'}
            {cocktail?.ingredients.map((ingredient: Ingredient) => {
              return (
                <div>
                    {ingredient.ingredient}, {ingredient.measure}
                </div>
              );
            })}
            <br/>
            {cocktail && 'Instructions: '}
            <div className="Instructions">
              {cocktail?.instructions.split(/(?<=\.)/).map((line, index) => {
               return <div>
                   {index + 1}. {line}
                 </div>;
              })}
            </div>
          </div>
  )
}

export default CocktailRecipe