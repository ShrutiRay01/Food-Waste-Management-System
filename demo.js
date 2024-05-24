
const EDAMAM_APP_ID = '07df0709';
const EDAMAM_APP_KEY = 'ae4ec45d6d5e9b0846f2758d2e422650';

document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const ingredient = document.getElementById('ingredient').value;
    const diet = document.getElementById('diet').value;
    const health = document.getElementById('health').value;

    getRecipes(ingredient, diet, health);
});

async function getRecipes(ingredient, diet, health) {
    const url = new URL('https://api.edamam.com/search');
    url.searchParams.append('q', ingredient);
    url.searchParams.append('app_id', EDAMAM_APP_ID);
    url.searchParams.append('app_key', EDAMAM_APP_KEY);
    url.searchParams.append('from', 0);
    url.searchParams.append('to', 10);

    if (diet) {
        url.searchParams.append('diet', diet);
    }
    if (health) {
        url.searchParams.append('health', health);
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayRecipes(data.hits);
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';

    recipes.forEach((hit, index) => {
        const recipe = hit.recipe;
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.image;
        recipeElement.appendChild(recipeImage);

        const recipeLabel = document.createElement('h2');
        recipeLabel.textContent = `Recipe ${index + 1}: ${recipe.label}`;
        recipeElement.appendChild(recipeLabel);

        const recipeUrl = document.createElement('a');
        recipeUrl.href = recipe.url;
        recipeUrl.textContent = 'View Recipe';
        recipeUrl.target = '_blank';
        recipeElement.appendChild(recipeUrl);

        const ingredients = document.createElement('p');
        ingredients.textContent = `Ingredients: ${recipe.ingredientLines.join(', ')}`;
        recipeElement.appendChild(ingredients);

        recipesContainer.appendChild(recipeElement);
    });
}
