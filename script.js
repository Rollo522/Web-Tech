// Get references to the different pages
const homePage = document.getElementById("homePage");
const recipePage = document.getElementById("recipePage");
const aboutPage = document.getElementById("aboutPage");
const socialPage = document.getElementById("socialPage");

// Get references to the navigation links
const homeLink = document.getElementById("homeLink");
const recipeLink = document.getElementById("recipeLink");
const aboutLink = document.getElementById("aboutLink");
const socialLink = document.getElementById("socialLink");

// Hide all pages except for the home page when the page loads
recipePage.style.display = "none";
aboutPage.style.display = "none";
socialPage.style.display = "none";

// Show the home page when the home link is clicked
homeLink.addEventListener("click", function() {
  homePage.style.display = "block";
  recipePage.style.display = "none";
  aboutPage.style.display = "none";
  socialPage.style.display = "none";
});

// Show the recipe page when the recipe link is clicked
recipeLink.addEventListener("click", function() {
  homePage.style.display = "none";
  recipePage.style.display = "block";
  aboutPage.style.display = "none";
  socialPage.style.display = "none";
});

// Show the about page when the about link is clicked
aboutLink.addEventListener("click", function() {
  homePage.style.display = "none";
  recipePage.style.display = "none";
  aboutPage.style.display = "block";
  socialPage.style.display = "none";
});

// Show the social page when the social link is clicked
socialLink.addEventListener("click", function() {
  homePage.style.display = "none";
  recipePage.style.display = "none";
  aboutPage.style.display = "none";
  socialPage.style.display = "block";
});
