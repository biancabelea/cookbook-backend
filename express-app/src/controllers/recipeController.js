import { Response, Request } from 'express'
import Recipe from '../models/Recipe'

export const getAllRecipes = async(req, res) => {
    try {
        const result = await Recipe.find().sort({createdAt: -1});
        return res.status(200).json(result);
    } catch(err) {
        return res.status(404).json(err);
    }
}

export const getSingleRecipe = async (req, res) => {
    try{
        const result = await Recipe.findById(req.params.id);
        return res.status(200).json(result);
    }catch(err){
        return res.status(404).json(err);
    }
}

export const getRecipeByName = async (req, res) => {
    try{

        const regex = new RegExp(req.params.query, 'i');
        const result = await Book.find({title: {$regex: regex}});

        return res.status(200).json(result);
    }catch(err){

        return res.status(404).json(err);
    }
}

export const uploadRecipe = async (req, res)=>{
    try{
        console.log(req.body)
        const recipe = new Recipe(req.body)
        const result = await recipe.save();
        return res.status(200).json(result);
    }catch(err){
        return res.status(404).json(err);
    }
}

export const editRecipe = async (req, res) => {
    try{
        const result = await Recipe.findByIdAndUpdate(req.params.id,{
            title: req.body.title,
            ingredients: req.body.ingredients,
            prepTime: req.body.prepTime,
            instructions: req.body.instructions,
        })
        return res.status(200).json(result);
    }catch(err){
        return res.status(404).json(err);
    }
}

export const deleteRecipe = async (req, res) =>{
    try{
        const result = await Recipe.findByIdAndDelete(req.params.id);
        return res.status(200).json(result);
    }catch(err){
        return res.status(404).json(err);
    }
}
