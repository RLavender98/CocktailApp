import { ReactNode, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface CocktailResponse {
    idDrink: string;
    strDrink: string;
    strGlass: string;
    strInstructions: string;
    strIngredient1: string;
    strMeasure1: string;
    strIngredient2: string;
    strMeasure2: string;
    strIngredient3: string;
    strMeasure3: string;
    strIngredient4: string;
    strMeasure4: string;
    strIngredient5: string;
    strMeasure5: string;
    strIngredient6: string;
    strMeasure6: string;
    strIngredient7: string;
    strMeasure7: string;
    strIngredient8: string;
    strMeasure8: string;
    strIngredient9: string;
    strMeasure9: string;
    strIngredient10: string;
    strMeasure10: string;
    strIngredient11: string;
    strMeasure11: string;
    strIngredient12: string;
    strMeasure12: string;
    strIngredient13: string;
    strMeasure13: string;
    strIngredient14: string;
    strMeasure14: string;
    strIngredient15: string;
    strMeasure15: string;
}

interface CocktailsResponse {
    drinks: CocktailResponse[];
};

interface Ingredient {
  ingredient: string;
  measure: string;
}

export interface Cocktail {
  id: string;
  name: string;
  glass: string;
  instructions: string;
  ingredients: Ingredient[];
}

const getIngredientsFromCocktailResponse = (cocktailResponse: CocktailResponse): Ingredient[] => {
  return [
    {ingredient: cocktailResponse.strIngredient1, measure: cocktailResponse.strMeasure1},
    {ingredient: cocktailResponse.strIngredient2, measure: cocktailResponse.strMeasure2},
    {ingredient: cocktailResponse.strIngredient3, measure: cocktailResponse.strMeasure3},
    {ingredient: cocktailResponse.strIngredient4, measure: cocktailResponse.strMeasure4},
    {ingredient: cocktailResponse.strIngredient5, measure: cocktailResponse.strMeasure5},
    {ingredient: cocktailResponse.strIngredient6, measure: cocktailResponse.strMeasure6},
    {ingredient: cocktailResponse.strIngredient7, measure: cocktailResponse.strMeasure7},
    {ingredient: cocktailResponse.strIngredient8, measure: cocktailResponse.strMeasure8},
    {ingredient: cocktailResponse.strIngredient9, measure: cocktailResponse.strMeasure9},
    {ingredient: cocktailResponse.strIngredient10, measure: cocktailResponse.strMeasure10},
    {ingredient: cocktailResponse.strIngredient11, measure: cocktailResponse.strMeasure11},
    {ingredient: cocktailResponse.strIngredient12, measure: cocktailResponse.strMeasure12},
    {ingredient: cocktailResponse.strIngredient13, measure: cocktailResponse.strMeasure13},
    {ingredient: cocktailResponse.strIngredient14, measure: cocktailResponse.strMeasure14},
    {ingredient: cocktailResponse.strIngredient15, measure: cocktailResponse.strMeasure15},
  ] 
}

const mapCocktailResponseToCocktail = (cocktailResponse: CocktailResponse): Cocktail => {
    return {
        id: cocktailResponse.idDrink,
        name: cocktailResponse.strDrink,
        glass: cocktailResponse.strGlass,
        instructions: cocktailResponse.strInstructions,
        ingredients: getIngredientsFromCocktailResponse(cocktailResponse)
    }
}

function App() {

  const [cocktail, setCocktail] = useState<Cocktail>();
  
  const getCocktails = async () => {
      const randomCocktailResponse: CocktailsResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php').then(response => response.json());
      setCocktail(mapCocktailResponseToCocktail(randomCocktailResponse.drinks[0]));
  }

  return (
    <div className="App">
      <header className="App-header">
          <button type="button" onClick={getCocktails}>
              Cocktails
          </button>
          <div>
            {cocktail?.name}
            <br/>
            {cocktail?.glass}
            <br/>
            Ingredients List
            <br/>
            {cocktail?.instructions}
          </div>
      </header>
    </div>
  )
}

export default App
