import { useState, useEffect } from 'react';
import recettes from '../../assets/recettes.json';
import Card from '../Card/Card'

function Recipes() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    
    const fetchRecipe = async () => {
      try {
        const response = recettes 
        setRecipe(response); 
      } catch (error) {
        console.error('Erreur lors du chargement des recettes :', error);
      }
    };

   
    fetchRecipe();
  }, []); 

  return (
    <div className='container mx-auto px-4 mb-4'>
      <h1 className='text-3xl font-bold underline mb-4'>Toutes les recettes</h1>
      <div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {recipe.map(recipe => (
            <Card key={recipe.id} recipe={recipe}/>

          ))}
        </ul>
      </div>
    </div>
  );
}

export default Recipes;
