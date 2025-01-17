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
    recipeName.classList.add('title');
    recipeName.classList.add('recipeLibraryName');
    recipeName.innerHTML = `${recipe.name}`;

    const recipePic = atob(parsedRecipe, 'photo');
    

//Seperate ingredient section
    const ingSection = document.createElement('h2');
    ingSection.classList.add('recipeLibraryIngredients');
    ingSection.innerHTML = 'Ingredients';

//Created element named ingredientsList
    const ingredientsList = document.createElement('ul');
    ingredientsList.classList.add('recipeLibraryIngredients');
    ingredientsList.classList.add('content');
    ingredientsList.classList.add('box');

    recipe.ingredients.forEach((ingredient, index) => {
    const ingitem = document.createElement('li');
    ingitem.innerHTML = ingredient;
    ingredientsList.appendChild(ingitem);
    })
//creating element for steps section
    const stepSection = document.createElement('h2');
    stepSection.classList.add('recipeLibraryIngredients');
    stepSection.innerHTML = 'Steps';

//creating element for steps step
    const steps = document.createElement('ol');
    steps.classList.add('recipeLibrarySteps')
    ingredientsList.classList.add('content');
    ingredientsList.classList.add('box');

//for loop for item list
    recipe.steps.forEach((step, index) => {
    const stepsItem = document.createElement('li');
    stepsItem.innerHTML = step;
    steps.appendChild(stepsItem);
    })

// appending to divitem 
    
    divItem.appendChild(recipeName);
    divItem.appendChild(ingSection);
    divItem.appendChild(ingredientsList);
    divItem.appendChild(stepSection);
    divItem.appendChild(steps);

//appending divItem to recipeList
    recipesList.appendChild(divItem);
})