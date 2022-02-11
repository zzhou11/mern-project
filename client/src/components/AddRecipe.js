import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


function AddRecipe(props) {
    const [recipeName, setRecipeName] = useState("");
    const [description, setDescription] = useState("");

    let navigate = useNavigate();

    const addRecipe = () => {
        const newRecipe =  
        { 
            name: recipeName,
            description: description
        };

        if (newRecipe.name && newRecipe.name.length > 0) {
            axios
                .post('/api/recipes', newRecipe)
                .then((res) => {
                    if (res.data) {
                        console.log("Added recipe successfully, response data: " + JSON.stringify(res.data));
                    }
                    navigate('/');
                })
                .catch((err) => console.log(err));
        } else {
            console.log('Failed to add new recipe: input field required');
        }
    };

    const handleNameChange = (e) => {
        setRecipeName(e.target.value)
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    };

    const goHome = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Add a new recipe</h1>
            <Link to='/'>Home</Link>
            <br />
            <input align="left" placeholder="Recipe Name" type="text" onChange={handleNameChange} value={recipeName} />
            <input align="left" placeholder="Description" type="text" onChange={handleDescriptionChange} value={description} />
            <br />
            <button onClick={addRecipe}>Add Recipe</button>
        </div>
    );
}

export default AddRecipe;