import React from 'react';
import CocktailFinder from './OpenDataexercise'; // Assuming CocktailFinder is your cocktail search component
import CompExercise from './componentsExercise'; // Import the product selection component
import './App.css';
import './component.css';
import './cocktailSearch.css'

function App() {
  return (
    <div className="App">
      <h1>Product and Cocktail Finder</h1>
      <div className="components-container">
        <CocktailFinder />
        <CompExercise />
      </div>
    </div>
  );
}

export default App;
