const Recipe = require('../models/recipes');

const database = require('../database/connect');

const createRecipe = async (recipe) => {
    let createdRecipe = await Recipe.create(recipe);

    const { name, ingredients, preparation, _id } = createdRecipe;

    createdRecipe = {
        name,
        ingredients,
        preparation,
        _id,
    };

    return createdRecipe;
};

const getAllRecipes = async () => {
    const allRecipes = await Recipe.find({});

    return allRecipes;
};

const getRecipeById = async (id) => {
    const recipe = await Recipe.find({ _id: database.Types.ObjectId(id) });

    return recipe;
};

const updateRecipe = async (recipe) => {
    const { id } = recipe;
    const findRecipe = await Recipe.findOne({ _id: database.Types.ObjectId(id) });
    let updated = await findRecipe.updateOne(recipe);
    updated = await Recipe.findOne({ _id: database.Types.ObjectId(id) });
    return updated;
};

const deleteRecipe = async (id) => {
    const deleted = await Recipe.deleteOne({ _id: database.Types.ObjectId(id) });
    return deleted;
};

const uploadImageToRecipe = async (id, recipe) => {
    const findRecipe = await Recipe.findOne({ _id: database.Types.ObjectId(id) });
    let updated = await findRecipe.updateOne(recipe);
    updated = await Recipe.findOne({ _id: database.Types.ObjectId(id) });
    return updated;
};

module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    // getByIdAndUserId,
    updateRecipe,
    deleteRecipe,
    uploadImageToRecipe,
};