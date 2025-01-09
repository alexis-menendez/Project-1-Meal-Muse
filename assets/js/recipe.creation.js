// JavaScript to handle recipe creation
document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');

    // Function to save the recipe
    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get values from form fields
        const recipeName = document.getElementById('recipe-name').value.trim();
        const ingredients = document.getElementById('ingredients').value.trim().split(',');
        const steps = document.getElementById('steps').value.trim().split('.');

        if (!recipeName || ingredients.length === 0 || steps.length === 0) {
            alert('Please fill out all fields.');
            return;
        }

        // Create recipe object
        const recipe = {
            name: recipeName,
            ingredients: ingredients.map(ing => ing.trim()),
            steps: steps.map(step => step.trim())
        };

        // Save to localStorage
        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        existingRecipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(existingRecipes));

        // Display success message and reset form
        alert('Recipe saved successfully!');
        recipeForm.reset();
    });
});