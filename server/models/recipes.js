const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for recipe
const RecipeSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The name text field is required'],
    },
    description: {
        type: String
    }
});

// Create model for recipe
const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;
