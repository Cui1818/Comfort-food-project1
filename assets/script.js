var apiKey = '946d18230eb44f9ea9732400786afe4c'
//This.on ("click")function will trigger AJAX call
$("#search-btn").on("click", function (event) {
  event.preventDefault(); //preventdefault to stoppropagation
  var searchInput = $("#search-input").val(); //grab the value  from input field
  console.log(searchInput);
  //
  var queryURL = `https://api.spoonacular.com/recipes/complexSearch?query=${searchInput}&apiKey=${apiKey}`;
  var cocktailURL = "the-cocktail-db.p.rapidapi.com?apiKey==v6c2f9f4b78msh0be3c179b423ccap10ab51jsnd767e4126cd0&s=vodka";

  //Make ajax request to recipe API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var recipesList = response.results;
    var idList = recipesList.map((recipe) => recipe.id).join(",");
    getRecipeInformation(idList)
  });
});

function addRecipeCards(recipesList){
  for (var i = 0; i < recipesList.length; i++) {
    // console.log(recipesList[i].title);
    // console.log(recipesList[i].image);
    var card = $(`
      <div class="cardContainer col-lg-4 col-md-4 col-sm-12">
        <div class="card" id="${recipesList[i].id}">
          <img src="${recipesList[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${recipesList[i].title}</h5>
            <p class="card-text">
              ${recipesList[i].summary}
            </p>
            <a href="#" class="btn btn-primary">Click Me</a>
          </div>
        </div>
      </div>
`)

  $("#recipe-cards").append(card);
  }
}
function getRecipeInformation(idList){
  const queryURL = `https://api.spoonacular.com/recipes/informationBulk?ids=${idList}&apiKey=${apiKey}`
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (recipesList) {
    addRecipeCards(recipesList)
  })
}
//var results = reponse.data;
//for(var i = 0;i < results.length;i++)
//{ //create HTML for current recipe
/* var card = $(`
<div class="row">
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${recipe.title}</h5>
      <img src="${recipe.image}" alt="..." width="200" height="200">
      <p class="card-text">
          ${recipe.description}
      </p>
      <a href="#" class="btn btn-primary">
      ${recipe.btnLink}
      </a>
    </div>
  </div>
</div>
`)
// append card to HTML
$("#recipe-cards").append(card)
}
}
//
//call showRecipeCards with real data
showRecipeCards(recipeData);
}); */
//RecipeCards will get dumped here
/* function showRecipeCards(recipeList){
  $("#recipe-cards").empty();//clear the inner html
  for (let i = 0; i < recipeList.length; i++) {
      var recipe = recipeList[i];
      //create HTML for current recipe
      var card = $(`
        <div class="row">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${recipe.title}</h5>
              <img src="${recipe.image}" alt="..." width="200" height="200">
              <p class="card-text">
                  ${recipe.description}
              </p>
              <a href="#" class="btn btn-primary">
              ${recipe.btnLink}
              </a>
            </div>
          </div>
        </div>
      `)
      // append card to HTML
      $("#recipe-cards").append(card)
  }
}*/

const settings = {
	async: true,
	crossDomain: true,
	url: 'https://the-cocktail-db.p.rapidapi.com/search.php?s=vodka',
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '52ba84ca8dmsh25283fe3edf5356p113f37jsn2a2c34c22856',
		'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

  var cocktailList = response.results;
  for (var i = 0; i < cocktailList.length; i++) {
    console.log(cocktailList[i].title);
    console.log(cocktailList[i].image);
    var card = $(`
<div class="row">
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${cocktailList[i].title}</h5>
    <img src="${cocktailList[i].image}" alt="..." width="200" height="200">
    <p class="card-text">
    </p>
    <button>
    <a href="the-cocktail-db.p.rapidapi.com/${cocktailList[i].id.summary}?apiKey=52ba84ca8dmsh25283fe3edf5356p113f37jsn2a2c34c22856&s=vodka">
    <button />
    </a>
  </div>
</div>
</div>
`)
console.log(cocktailList[i].id)
  $("#recipe-cards").append(card);
  }
