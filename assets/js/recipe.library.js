const recipeFromImput = localStorage.getItem('recipes');
const parsedRecipe = JSON.parse(recipeFromImput);
console.log(parsedRecipe);

//need to display object with recipe name, ingredient list, recipe instructions

//needs to take that info into a container that formats the html.


// Display them in an unordered list
const recipesList = document.getElementById('recipeSection');
//Created element named divItem
parsedRecipe.forEach((recipe, index) => {
    const divItem = document.createElement('div');
    divItem.classList.add('container');
    divItem.classList.add('box');
//Created element named recipeName 
    const recipeName = document.createElement('p');
    recipeName.innerHTML = `${recipe.name}`;
//Created element named ingredientsList
    const ingredientsList = document.createElement('ul');

    recipe.ingredients.forEach((ingredient, index) => {
    const ingitem = document.createElement('li');
    ingitem.innerHTML = ingredient;
    ingredientsList.appendChild(ingitem);
    })

    //creating element for steps step
    const steps = document.createElement('p');
    steps.innerHTML = recipe.steps[0];

    // appending to divitem 
    divItem.appendChild(recipeName);
    divItem.appendChild(ingredientsList);
    divItem.appendChild(steps);
    //appending divItem to recipeList
    recipesList.appendChild(divItem);
})