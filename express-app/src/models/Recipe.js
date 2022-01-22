import {model, Schema } from 'mongoose';

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    prepTime: {
        type: Number,
        required: true
    },
    instructions: {
        type: String,
        required: true
    }
});

const Recipe = model("Recipe", RecipeSchema);

export default Recipe;
