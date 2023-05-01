const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'your-key-here',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
  }
};

const form = document.getElementById('recipe-form');
const recipeSearchInput = document.getElementById('recipe-search');
const cuisineSelect = document.getElementById('cuisine-select');
const dietSelect = document.getElementById('diet-select');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  getRecipes();
});

function getRecipes() {
  const input = recipeSearchInput.value;
  const cuisine = cuisineSelect.value;
  const diet = dietSelect.value;

  fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${input}&cuisineType=${cuisine}&health=${diet}`, options)
    .then(response => response.json())
    .then(response => {
      const recipes = response.hits;
      listRecipes(recipes);
    })
    .catch(err => console.error(err));
}

function listRecipes(recipes) {
  const container = document.getElementById('recipes');
  container.innerHTML = '';

  if (recipes.length === 0) {
    container.innerHTML = 'No recipes found';
  } else {
    for (let i = 0; i < recipes.length; i++) {
      const recipe = recipes[i].recipe;

      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe-card');

      const img = document.createElement('img');
      img.src = recipe.image;

      const title = document.createElement('h3');
      title.textContent = recipe.label;

      const rating = document.createElement('p');
      rating.textContent = `Rating: ${recipe.rating}/5`;

      const ingredients = document.createElement('ul');
      const ingredientLines = recipe.ingredientLines;
      for (let j = 0; j < ingredientLines.length; j++) {
        const ingredient = document.createElement('




User

2 / 2

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd57b42748bmsh93df9458a530595p15c0c0jsne348b07bec41',
    'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
  }
};

const form = document.getElementById('recipe-form');
const recipeSearchButton = document.getElementById('recipe-search-button');
const recipeSearchInput = document.getElementById('recipe-search');
const cuisineSelect = document.querySelector('#recipe-form select:nth-child(2)');
const dietSelect = document.querySelector('#recipe-form select:nth-child(3)');
const recipesContainer = document.getElementById('recipes');

// Prevent form submission and call getRecipes on button click
form.addEventListener('submit', function(event) {
  event.preventDefault();
  getRecipes();
});

// Call getRecipes on button click
recipeSearchButton.addEventListener('click', getRecipes);

function getRecipes() {
  const query = recipeSearchInput.value;
  const cuisine = cuisineSelect.value;
  const diet = dietSelect.value;

  let url = `https://edamam-recipe-search.p.rapidapi.com/search?q=${query}`;

  if (cuisine !== 'all') {
    url += `&cuisineType=${cuisine}`;
  }

  if (diet !== 'all') {
    url += `&diet=${diet}`;
  }

  fetch(url, options)
    .then(response => response.json())
    .then(response => {
      const recipes = response.hits;
      if (recipes.length > 0) {
        recipesContainer.innerHTML = '';
        recipes.forEach(recipe => {
          const { label, image, url, ingredients } = recipe.recipe;
          const recipeCard = `
            <div class="recipe-card">
              <h3>${label}</h3>
              <img src="${image}" alt="${label}" />
              <p>${ingredients.length} ingredients</p>
              <a href="${url}" target="_blank">View Recipe</a>
            </div>
          `;
          recipesContainer.innerHTML += recipeCard;
        });
      } else {
        recipesContainer.innerHTML = '<p>No recipes found.</p>';
      }
    })
    .catch(err => console.error(err));
}