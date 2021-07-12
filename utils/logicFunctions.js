const resetRecipe = () => {
  console.log("logicFunctions.js - resetRecipe()");
  return {
    name: "",
    info: "",
    author: "",
    listOfIngredients: [
      {
        name: "",
        quantity: 0,
        unitOfMeasurement: "grams",
      },
    ],
    prepTime: 0,
    cookTime: 0,
    servings: 0,
    listOfSteps: [
      {
        description: "",
      },
    ],
    id: "",
  };
};
const resetViewRecipes = () => {
  console.log("logicFunctions.js - resetViewRecipes()");
  return {
    recipeName: "",
    recipeIngredientName: "",
    productionQuantity: 0,
    newTotalIngredientsSum: 0,
  };
};

exports.resetRecipe = resetRecipe;
exports.viewRecipes = resetViewRecipes;
