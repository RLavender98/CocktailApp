import { MultiSelect } from "@progress/kendo-react-dropdowns";  
import { useState } from "react";  

const getIngredients = async () => {
    const ingredientList = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list').then(response => response.json());
    return ingredientList.drinks.map((ingredient) => ingredient.strIngredient1);
}

const tags = getIngredients(); 
  
export const TagsMultiSelect = () => {  
  const [selectedTags, setSelectedTags] = useState([]);  
  const onChange = event => setSelectedTags([...event.value]);  
  
  return (  
    <form className="k-form k-my-8">  
      <label className="k-label k-mb-3">Related technologies</label>  
      <MultiSelect data={tags} value={selectedTags} onChange={onChange} autoClose={false} />  
    </form>  
  );  
};  