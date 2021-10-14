const Recipe = require('../models/recipes');

const usersSchema = (req, res, next) => {
  const { name, ingredients, preparation } = req.body;

  const dataRecipe = {
    name,
    ingredients,
    preparation,
  };
  req.recipe = dataRecipe;
  const recipe = new Recipe(dataRecipe);

  return recipe.validate((err) => {
    if (err) {
      const allErrors = [];
      let valid = true;
      const { errors } = err;
      if (!errors) next();
      if (errors.name) allErrors.push(errors.name);
      if (errors.ingredients) allErrors.push(errors.ingredients);
      if (errors.preparation) allErrors.push(errors.preparation);
      allErrors.forEach((error) => {
        const { properties } = error;
        if (
          properties.type
          === 'required' /* || properties.type === "user defined" */
        ) {
          valid = false;
        }
      });

      if (!valid) { return res.status(400).json({ message: 'Invalid entries. Try again.' }); }
    }
    return next();
  });

  next();
};

module.exports = usersSchema;
