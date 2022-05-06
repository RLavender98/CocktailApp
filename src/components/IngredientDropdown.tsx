import { MultiSelect, MultiSelectChangeEvent } from "@progress/kendo-react-dropdowns";  
import { useState } from "react"; 
import './IngredientDropdown.css';

interface TagsMultiSelectProps {
  selectedTags: string[],
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>
}

const getIngredients = async () => {
    const ingredientList = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list').then(response => response.json());
    return ingredientList.drinks.map((ingredient: {strIngredient1: string}) => ingredient.strIngredient1);
}

const tags = await getIngredients(); 

const sortedTags = tags.map((ingredient : string) => ingredient.charAt(0).toUpperCase() + ingredient.substring(1).toLowerCase()).sort();
  
export const TagsMultiSelect = (props: TagsMultiSelectProps) => {  
  const onChange = (event: MultiSelectChangeEvent) => props.setSelectedTags([...event.value]);  
  
  return ( 
    <div> 
    <h2>Search for a cocktail by ingredients</h2>
    <form className="k-form k-my-8">  
      <label className="k-label k-mb-3"> Select your Ingredients: </label>  
      <MultiSelect data={sortedTags} value={props.selectedTags} onChange={onChange} autoClose={false} />  
    </form>  
    </div>
  );  
};  