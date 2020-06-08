
// Cocktail Search by Liquor function

$("#l").on("click", function () {

  // var search = // Value of search form, Convert to string?
  search = document.getElementById("searchLiquor").value;
  var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + search;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      $("#display").empty();
      results = response.drinks;
      //Math random for random drink to be displayed
      var num = Math.floor(Math.random() * results.length); //Eliminate repeat?
      var drinkId = results[num].idDrink;

      //Drink Name Div
      var liquorDiv = $("<div>")
      liquorName = $("<h4>").text(results[num].strDrink)

      // Drink Img
      var drinkImg = $("<img>");
      drinkImg.attr("src", results[num].strDrinkThumb);
      drinkImg.attr("id", "drinkImg");
      // drinkImg.attr("value", drinkId);

      //  var newDiv = $("<div>");
      //  newDiv.attr("id", "recipeCard");


      // Attach Image to drink name
      liquorName.append(drinkImg);
      liquorDiv.append(liquorName);

      //append name and img to docuent
      $("#drinkResults").append(liquorDiv);

      // if strIngredient != null display = none? or diplay class with property none?
      // SECOND FUNCTION

      queryURL2 = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId;

      // Get drink info from API
      $.ajax({
        url: queryURL2,
        method: "GET"
      })
        .then(function (response) {
          console.log(response)
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

            $("#display").append(newRow)
            i++;
          }


        })
    });
});

/*
 //Music Search Function

  // CLICK DRINK TO DISPLAY RECIPE MODAL
     //    $("#drinkImg").on("click", recipeModal);
*/