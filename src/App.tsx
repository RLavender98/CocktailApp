import '@progress/kendo-theme-default/dist/all.css'
import './App.css';
import { TagsMultiSelect} from './components/IngredientDropdown';
import RandomCocktail from './components/RandomCocktail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import CocktailList from './components/CocktailList';
import NavBar from './components/NavBar';


function App() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);  

  return (
    <div>
  
    <Router>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/random" element={<RandomCocktail />}>
          </Route>
          <Route path="/" element={<><NavBar /><div> 
              <TagsMultiSelect selectedTags={selectedTags} setSelectedTags={setSelectedTags}/>
            </div>
            <CocktailList ingredients={[...selectedTags]}/></>}>
          </Route>
        </Routes>
      </header>
    </div>
    </Router>
    </div>
  )
}

export default App
