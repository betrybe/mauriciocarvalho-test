const Recipe = require('../models/recipes');
const validateModelSchema = require('../services/validateModelSchema');

const usersSchema = async (req, res, next) => {
  const { name, ingredients, preparation } = req.body;

  const dataRecipe = {
    name,
    ingredients,
    preparation,
  };
  req.recipe = dataRecipe;
  const recipe = new Recipe(dataRecipe);
  await validateModelSchema(recipe, (valid) => {
    if (!valid) {
      const err = new Error('Invalid entries. Try again.');
        err.status = 400;
        next(err);
    } else {
      next();
    }
  });
};

module.exports = usersSchema;
