import React from 'react';

const ListRecipe = ({ recipes, deleteRecipe }) => {
  return (
    <ul>
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe) => {
          return (
            <li key={recipe._id} onClick={() => deleteRecipe(recipe._id)}>
              {recipe.name} : {recipe.description ? recipe.description : "No description set"}
            </li>
          );
        })
      ) : (
        <li>No recipes</li>
      )}
    </ul>
  );
};

export default ListRecipe;
