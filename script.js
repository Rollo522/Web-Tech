const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd57b42748bmsh93df9458a530595p15c0c0jsne348b07bec41',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

// Call the getRecipes function on button press
document.getElementById('recipe-search-button').addEventListener('click', function() {getRecipes()} );

// Prevent the form from submitting
var form = document.getElementById('recipe-form');
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

// Get the recipes from the API
function getRecipes() {

  var input = document.getElementById('recipe-search').value;
  console.log(input);
  fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=${input}`, options)
  .then(response => response.json())
  .then(response => {obj = response;})
  .then(response => console.log(obj))
  .then(response => listRecipes(obj))
  .catch(err => console.error(err));
}



function listRecipes(Recipes) {
  // Get the number of hits
  var container = document.getElementById('recipes');

  // Loop over each hit
  for (var i = 0; i < Recipes.hits.length; i++) {
    // create container div in recipes 
    var img = document.createElement('img');
    img.src = Recipes.hits[i].recipe.image;
    document.body.appendChild(img);

    
    //  create div content 
  
  }
}