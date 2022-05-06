export interface CocktailResponse {
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

export interface CocktailsResponse {
    drinks: CocktailResponse[];
};

export interface Ingredient {
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