import {Router} from "express";
import {getAllRecipes, getSingleRecipe, getRecipeByName, uploadRecipe, editRecipe, deleteRecipe} from "../controllers/recipeController";


export const recipeRouter = Router();

recipeRouter.get('/recipes',getAllRecipes);
recipeRouter.get('/recipes/:id',getSingleRecipe);
recipeRouter.post('/recipes',uploadRecipe);
recipeRouter.get('/search/:query', getRecipeByName);
recipeRouter.put('/recipes/:id',editRecipe);
recipeRouter.delete('/recipes/:id',deleteRecipe);
