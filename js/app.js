// Cocktail Search by Liquor function
$("#choiceSubmit").on("click", function () {
  event.preventDefault();
  search = document.getElementById("liquorSelect").value;
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + search;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      results = response.drinks;

      //Math random for random drink to be displayed
      var num = Math.floor(Math.random() * results.length); 
      // Store drink for second api
      var drinkId = results[num].idDrink;

      //Drink Name Div
      $("#name").text(results[num].strDrink)

      // Drink Img
      $("#cocktailImg").attr("src", results[num].strDrinkThumb);

      // SECOND API
      queryURL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId;
      $.ajax({
        url: queryURL2,
        method: "GET"
      })
        .then(function (response) {
          results = response.drinks[0];
          var ingredients = [
            results.strIngredient1,
            results.strIngredient2,
            results.strIngredient3,
            results.strIngredient4,
            results.strIngredient5,
            results.strIngredient6,
            results.strIngredient7,
            results.strIngredient8,
            results.strIngredient9,
            results.strIngredient10,
            results.strIngredient11,
            results.strIngredient12,
            results.strIngredient13,
            results.strIngredient14,
            results.strIngredient15,
          ]
          var instruction = results.strInstructions
          var measure = [
            results.strMeasure1,
            results.strMeasure2,
            results.strMeasure3,
            results.strMeasure4,
            results.strMeasure5,
            results.strMeasure6,
            results.strMeasure7,
            results.strMeasure8,
            results.strMeasure9,
            results.strMeasure10,
            results.strMeasure11,
            results.strMeasure12,
            results.strMeasure13,
            results.strMeasure14,
            results.strMeasure15,
          ]
          // Create a table for ingredients, measurements
          var i = 0
          ingredients.forEach(generateInfo)

          function generateInfo(item) {
            newRow = $("<tr>")
            var ingDiv = $("<td>").attr("class", "ingredient")
            ingDiv.text(item);
            measDiv = $("<td>").attr("class", "measure")
            measDiv.text(measure[i]);
            newRow.append(ingDiv);
            newRow.append(measDiv);

            $("#cocktailRecipe").append(newRow)

            //Iterate for measure
            i++;
          } // Add instructions 
          $("#cocktailRecipe").append(instruction)
        });
    });


});
// PAGE ONE
$("#ageSubmit").on("click", function drink() {
  event.preventDefault();
  optionPage.style.display = "block";
  agePage.style.display = "none";
})

//SELECT PAGE
$("#choiceSubmit").on("click", function choice() {
  event.preventDefault();
  optionPage.style.display = "none";
  resultsPage.style.display = "block";
})

function clear() {
  $("#display").empty();
  $("#drinkResults").empty();
}

//Pages
agePage = document.getElementById("legal");
optionPage = document.getElementById("mixForm");
resultsPage = document.getElementById("results");