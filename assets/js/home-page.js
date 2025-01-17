function getRandomItemFromLocalStorageArray() {
    const storedArray = localStorage.getItem("recipes");
  
    if (storedArray) {
      const parsedArray = JSON.parse(storedArray);
      const randomIndex = Math.floor(Math.random() * parsedArray.length);
      const dayRecipe = document.getElementById('day-recipe');
      const randomItem = parsedArray[randomIndex];
      const boxItem = document.createElement('div');

      boxItem.classList.add('box');
      boxItem.textContent = randomItem.name;
      dayRecipe.appendChild(boxItem);
    } 
  }
  
  getRandomItemFromLocalStorageArray();
  