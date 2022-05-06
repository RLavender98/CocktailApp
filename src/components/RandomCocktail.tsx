import { useState } from 'react';
import { Ingredient, Cocktail, CocktailsResponse } from '../types/Cocktail';
import { mapCocktailResponseToCocktail } from '../types/CocktailMapper';
import CocktailRecipe from './CocktailRecipe';
import NavBar from './NavBar';
import './RandomCocktail.css';


function RandomCocktail() {

  const [cocktail, setCocktail] = useState<Cocktail>();
  
  const getRandomCocktail = async () => {
      const randomCocktailResponse: CocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(response => response.json());
      setCocktail(mapCocktailResponseToCocktail(randomCocktailResponse.drinks[0]));
  }

  return (
        <>
            <NavBar />
          <button className="button-1" type="button" onClick={getRandomCocktail}>
              Get Random Cocktail!
          </button>
          <CocktailRecipe cocktail={cocktail} />
        </>
  )
}

export default RandomCocktail