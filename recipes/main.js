import recipes from "./recipes.mjs";

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

function tagsTemplate(tags) {
    let html = '';

    for (let i = 0; i < tags.length; i++) {
        html += `<h2 class="recipe-type">${tags[i]}</h2>`
    }

	return html;
}

function ratingTemplate(rating) {
    let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
}>`;
    
for (let i = 1; i < 6; i++) {
    if (i<rating)
        html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    else
        html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
}

    html += `</span>`
    return html;
}

function recipeTemplate(recipe) {
    const tagshtml = tagsTemplate(recipe.tags);
    const ratinghtml = ratingTemplate(recipe.rating);
    return `<main>
        <div class="image-container">
            <img class="recipe-image" src="${recipe.image}" alt="Recipe image">
        </div>
        <div class="recipe">
            ${tagshtml}
            <h1 class="recipe-name">${recipe.name}</h1>
            <span
                class="rating"
                role="img"
                aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${ratinghtml}
            </span>
            <p class="recipe-description"> ${recipe.description}</p>
        </div>
    </main>`;
}

function renderRecipes(recipeList) {
	const randomRecipe = getRandomListEntry(recipes)

	const recipeHtml = recipeTemplate(randomRecipe);

    document.getElementById("recipe").innerHTML = recipeHtml;
}

function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

const element = document.getElementById("search_button");
element.addEventListener("click", seach_button_click);

function seach_button_click(e) {
    e.preventDefault();
    const searchedItem = document.getElementById("search").value.toLowerCase();
    console.log("start");
    console.log(document.getElementById("search").value);
    console.log("end");

    let results = filterRecipes(searchedItem);
    console.log(results);
}

function filterRecipes(searchQuery) {
    let results = [];
    recipes.forEach(r => {
        if (r.name.toLowerCase().includes(searchQuery)) {
            results.push(r);
        }
        else if (r.description.toLowerCase().includes(searchQuery)) {
            results.push(r);
        }
    });

    return results.sort(compare);
}

function compare(a, b) {
    if ( a.name < b.name ){
      return -1;
    }
    if (a.name > b.name){
      return 1;
    }
    return 0;
  }
  

const randomRecipe = getRandomListEntry(recipes)
//console.log(recipeTemplate(randomRecipe));
