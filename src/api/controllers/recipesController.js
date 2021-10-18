const path = require('path');

const recipeRepository = require('../repositories/recipeRepository');

const create = async (req, res) => {
    try {
        const { recipe, userId } = req;

        recipe.userId = userId;

        const createdRecipe = await recipeRepository.createRecipe(recipe);
        createdRecipe.userId = userId;

        res.status(201).json({ recipe: createdRecipe });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const listAll = async (req, res) => {
    try {
        const listedRecipes = await recipeRepository.getAllRecipes();

        res.status(200).json(listedRecipes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const listById = async (req, res) => {
    try {
        const { id } = req.params;

        const listedRecipes = await recipeRepository.getRecipeById(id);
        if (listedRecipes.length > 0) {
            res.status(200).json(listedRecipes[0]);
        } else {
            res.status(404).json({ message: 'recipe not found' });
        }
    } catch (error) {
        res.status(404).json({ message: 'recipe not found' });
    }
};

const updateById = async (req, res) => {
    try {
        const { name, ingredients, preparation } = req.body;
        const { id } = req.params; //

        const recipe = {
            name,
            ingredients,
            preparation,
            id,
        };
        const updated = await recipeRepository.updateRecipe(recipe); 

        res.status(200).json(updated);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteById = async (req, res) => {
    try {
        const { id } = req.params; //
        await recipeRepository.deleteRecipe(id); 
        res.status(204).json({});
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const uploadImage = async (req, res) => {
    try {
        const { id } = req.params;
        const { headers } = req;

        const server = headers.host;

        const imageUrl = `${server}/src/uploads/${id}.jpeg`;

        const recipe = {
            image: imageUrl,
        };

        const updated = await recipeRepository.uploadImageToRecipe(id, recipe); 

        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const listImages = async (req, res) => {
    try {
        const { recipeId } = req.params;

        const photoFile = path.resolve(__dirname, `../../uploads/${recipeId}`);
        res.status(200).sendFile(photoFile);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    create,
    listAll,
    listById,
    updateById,
    deleteById,
    uploadImage,
    listImages,
};