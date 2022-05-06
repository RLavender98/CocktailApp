import { CocktailResponse, Ingredient, Cocktail } from './Cocktail';

const getIngredientsFromCocktailResponse = (cocktailResponse: CocktailResponse): Ingredient[] => {
    const ingredients = [];
    if (cocktailResponse.strIngredient1) {
        ingredients.push({ingredient: cocktailResponse.strIngredient1, measure: cocktailResponse.strMeasure1});
    }
    if (cocktailResponse.strIngredient2) {
        ingredients.push({ingredient: cocktailResponse.strIngredient2, measure: cocktailResponse.strMeasure2});
    }
    if (cocktailResponse.strIngredient3) {
        ingredients.push({ingredient: cocktailResponse.strIngredient3, measure: cocktailResponse.strMeasure3});
    }
    if (cocktailResponse.strIngredient4) {
        ingredients.push({ingredient: cocktailResponse.strIngredient4, measure: cocktailResponse.strMeasure4});
    }
    if (cocktailResponse.strIngredient5) {
        ingredients.push({ingredient: cocktailResponse.strIngredient5, measure: cocktailResponse.strMeasure5});
    }
    if (cocktailResponse.strIngredient6) {
        ingredients.push({ingredient: cocktailResponse.strIngredient6, measure: cocktailResponse.strMeasure6});
    }
    if (cocktailResponse.strIngredient7) {
        ingredients.push({ingredient: cocktailResponse.strIngredient7, measure: cocktailResponse.strMeasure7});
    }
    if (cocktailResponse.strIngredient8) {
        ingredients.push({ingredient: cocktailResponse.strIngredient8, measure: cocktailResponse.strMeasure8});
    }
    if (cocktailResponse.strIngredient9) {
        ingredients.push({ingredient: cocktailResponse.strIngredient9, measure: cocktailResponse.strMeasure9});
    }
    if (cocktailResponse.strIngredient10) {
        ingredients.push({ingredient: cocktailResponse.strIngredient10, measure: cocktailResponse.strMeasure10});
    }
    if (cocktailResponse.strIngredient11) {
        ingredients.push({ingredient: cocktailResponse.strIngredient11, measure: cocktailResponse.strMeasure11});
    }
    if (cocktailResponse.strIngredient12) {
        ingredients.push({ingredient: cocktailResponse.strIngredient12, measure: cocktailResponse.strMeasure12});
    }
    if (cocktailResponse.strIngredient13) {
        ingredients.push({ingredient: cocktailResponse.strIngredient13, measure: cocktailResponse.strMeasure13});
    }
    if (cocktailResponse.strIngredient14) {
        ingredients.push({ingredient: cocktailResponse.strIngredient14, measure: cocktailResponse.strMeasure14});
    }
    if (cocktailResponse.strIngredient15) {
        ingredients.push({ingredient: cocktailResponse.strIngredient15, measure: cocktailResponse.strMeasure15});
    }
    return ingredients;
  }
  
  export const mapCocktailResponseToCocktail = (cocktailResponse: CocktailResponse): Cocktail => {
      return {
          id: cocktailResponse.idDrink,
          name: cocktailResponse.strDrink,
          glass: cocktailResponse.strGlass,
          instructions: cocktailResponse.strInstructions,
          ingredients: getIngredientsFromCocktailResponse(cocktailResponse)
      }
  }