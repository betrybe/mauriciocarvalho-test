
const Recipe = require('../models/recipes');
const User = require('../models/users');
const util = require('../util/functions');
const express = require('express')
const path = require('path');

const create = async (req, res) => {
    try {
        const { recipe, userId } = req;

        recipe.userId = userId;

        let createdRecipe = await Recipe.create(recipe);

        const { name, ingredients, preparation, _id } = createdRecipe;

        createdRecipe = {
            name,
            ingredients,
            preparation,
            userId,
            _id
        }

        res.status(201).json({ recipe: createdRecipe });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}

const listAll = async (req, res) => {
    try {

        const listedRecipes = await Recipe.find({});

        res.status(200).json(listedRecipes);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}


const listById = async (req, res) => {


    const { id } = req.params;


    await Recipe.find({ _id: id }, (err, data) => {
        if (!err) {
            res.status(200).json(data[0]);

        }
    })
        .clone()
        .catch((err) => {
            res.status(404).json({ "message": "recipe not found" })
        })

}

const updateById = async (req, res) => {
    try {

        const { name, ingredients, preparation } = req.body;
        const { id } = req.params; //

        const recipe = {
            name: name,
            ingredients: ingredients,
            preparation: preparation,
            _id: id
        }

        const recipeById = await Recipe.findOne({ _id: id });
        await recipeById.updateOne(recipe);
        const updated = await Recipe.findOne({ _id: id });

        res.status(200).json(updated);



    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

const deleteById = async (req, res) => {
    try {

        const { name, ingredients, preparation } = req.body;
        const { id } = req.params; //
        const { userId } = req;


        const user = await User.findOne({ userId: userId });

        if (user.role == "admin" || user.role == "user") {

            await Recipe.deleteOne({ _id: id })
            res.status(204).json({});

        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}

const uploadImage = async (req, res) => {
    try {
        const { id } = req.params;
        const { headers } = req;

        const server = headers.host;

        const urlImage = `${server}/src/uploads/${id}.jpeg`;

        const recipe = {
            image: urlImage
        }
        const recipeById = await Recipe.findOne({ _id: id });
        await recipeById.updateOne(recipe);
        const updated = await Recipe.findOne({ _id: id });

        res.status(200).json(updated);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


    
}

const listImages = async (req, res) => {
    try {
        const { recipeId } = req.params;

        const photoFile = path.resolve(__dirname, `../../uploads/${recipeId}`);
        res.status(200).sendFile(photoFile)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}


module.exports = {
    create,
    listAll,
    listById,
    updateById,
    deleteById,
    uploadImage,
    listImages
}