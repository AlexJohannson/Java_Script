const container = document.getElementById('container');

fetch('https://dummyjson.com/recipes')
    .then(response => response.json())
    .then(data => {
        const recipes = data.recipes;
        console.log(recipes);
        recipes.forEach(recipe => {
            const recipeBlock = document.createElement('div');
            recipeBlock.classList.add('recipe');

            const recipeTitle = document.createElement('h2');
            recipeTitle.innerText = recipe.name;
            recipeBlock.appendChild(recipeTitle);

            const recipeImage = document.createElement('img');
            recipeImage.src = recipe.image;
            recipeBlock.appendChild(recipeImage);

            const ingredientsUlList = document.createElement('ul');
            ingredientsUlList.classList.add('ingredients');
            recipe.ingredients.forEach(ingredient => {
                const ingredientLiItem = document.createElement('li');
                ingredientLiItem.innerText = ingredient;
                ingredientsUlList.appendChild(ingredientLiItem);
            });
            recipeBlock.appendChild(ingredientsUlList);

            container.appendChild(recipeBlock);

        });
    })
