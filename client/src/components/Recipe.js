import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListRecipe from './ListRecipe';
import {Link} from 'react-router-dom';

function Recipe(props) {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipes = () => {
        axios
            .get('/api/recipes')
            .then((res) => {
                if (res.data) {
                    setRecipes(res.data);
                }
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchRecipes();
    });

    const deleteRecipe = (id) => {
        axios
            .delete(`/api/recipes/${id}`)
            .then((res) => {
                if (res.data) {
                    fetchRecipes();
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h1>My Recipes</h1>
            <Link to='/add'>Add Recipes</Link>
            <ListRecipe recipes={recipes} deleteRecipe={deleteRecipe} />
        </div>
    );

}

export default Recipe;

