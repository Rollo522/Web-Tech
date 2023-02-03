<script>
  const recipes = [
    {id: 1, name: "Recipe 1", image: "recipe1.jpg"},
    {id: 2, name: "Recipe 2", image: "recipe2.jpg"},
    {id: 3, name: "Recipe 3", image: "recipe3.jpg"},
    {id: 4, name: "Recipe 4", image: "recipe4.jpg"},
    {id: 5, name: "Recipe 5", image: "recipe5.jpg"},
    {id: 6, name: "Recipe 6", image: "recipe6.jpg"},
    {id: 7, name: "Recipe 7", image: "recipe7.jpg"},
  ];

  const handleImageClick = (id) => {
    window.location.href = `./recipe.html?id=${id}`;
  };
</script>

<div id="home-page">
  <h1>Welcome to our Recipe Website</h1>
  <p>Choose a recipe from the images below:</p>
  <div id="recipe-images">
    <img src="recipe1.jpg" onclick="handleImageClick(1)" />
    <img src="recipe2.jpg" onclick="handleImageClick(2)" />
    <img src="recipe3.jpg" onclick="handleImageClick(3)" />
    <img src="recipe4.jpg" onclick="handleImageClick(4)" />
    <img src="recipe5.jpg" onclick="handleImageClick(5)" />
    <img src="recipe6.jpg" onclick="handleImageClick(6)" />
    <img src="recipe7.jpg" onclick="handleImageClick(7)" />
  </div>
</div>
