import axios from 'axios';
import React, { useState } from 'react';
import './cocktailSearch.css';

// Component to fetch and display cocktail details
function CocktailSearch() {
    // State variables to manage data, input, and error
    const [cocktailDetails, setCocktailDetails] = useState(null);
    const [query, setQuery] = useState('');
    const [error, setError] = useState('');

    // Function to handle search button click
    const searchCocktail = () => {
        if (query) {
            // Fetch cocktail details based on user query
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
                .then(response => {
                    if (response.data.drinks) {
                        // Store the first cocktail result and reset error
                        setCocktailDetails(response.data.drinks[0]);
                        setError('');
                    } else {
                        // Show an error message if no cocktail found
                        setError('No cocktail found. Please try another name.');
                        setCocktailDetails(null);
                    }
                })
                .catch(() => {
                    setError('Error fetching data. Please try again later.');
                    setCocktailDetails(null);
                });
        }
    };

    // Rendering the search input, button, and results
    return (
        <div className='cocktail-search-container'>
            <h1>Find a Cocktail</h1>
            <input
                type='text'
                placeholder='Type cocktail name'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchCocktail}>Find Cocktail</button>
            {error && <p className='error-message'>{error}</p>}

            {cocktailDetails ? (
                // Display the details of the fetched cocktail
                <div>
                    <h2>{cocktailDetails.strDrink}</h2>
                    <p>Category: {cocktailDetails.strCategory}</p>
                    <p>Instructions: {cocktailDetails.strInstructions}</p>
                    {cocktailDetails.strDrinkThumb ? (
                        <img src={cocktailDetails.strDrinkThumb} alt={cocktailDetails.strDrink} width="300" />
                    ) : (
                        <p>No image available.</p>
                    )}
                </div>
            ) : (
                !error && <p>Enter a cocktail name to search.</p>
            )}
        </div>
    );
}

// Main application component
function CocktailFinder() {
    return (
        <div>
            <CocktailSearch />
        </div>
    );
}

export default CocktailFinder;