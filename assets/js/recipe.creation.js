// JavaScript to handle recipe creation
document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');

    // Function to save the recipe
    recipeForm.addEventListener('submit', async function (event) {  // Changed to `async` to handle image file
        event.preventDefault();

        // Get values from form fields
        const recipeName = document.getElementById('recipe-name').value.trim();
        const ingredients = document.getElementById('ingredients').value.trim().split(',');
        const steps = document.getElementById('steps').value.trim().split('.');

        // **New Photo Input: Get the file input for the recipe photo**
        const photoInput = document.getElementById('recipe-photo');  // New line
        let photoData = '';  // Initialize an empty string for the image data

        if (!recipeName || ingredients.length === 0 || steps.length === 0) {
            alert('Please fill out all fields.');
            return;
        }

        // **New Photo Handling: Convert the uploaded image to Base64 if a file is selected**
        if (photoInput.files.length > 0) {  // Check if the user uploaded a photo
            const file = photoInput.files[0];
            photoData = await readFileAsBase64(file);  // Convert the image to Base64 format
        }

        // Create recipe object
        const recipe = {
            name: recipeName,
            ingredients: ingredients.map(ing => ing.trim()),
            steps: steps.map(step => step.trim()),
            photo: photoData // **New Field: Store the photo data as a Base64 string in the recipe object**
        };

        // Save to localStorage
        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        existingRecipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(existingRecipes));

        // Display success message and reset form
        alert('Recipe saved successfully!');
        recipeForm.reset();
    });

    // **Function to Read the File as Base64 String**
    function readFileAsBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);  // Resolve with Base64 string
            reader.onerror = (error) => reject(error);  // Reject if there's an error
            reader.readAsDataURL(file);  // Convert image to Base64
        });
    }
});