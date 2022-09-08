import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic
// ${process.env.API_KEY}

function getRandomRecipe() {
  let request = new XMLHttpRequest();
  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=`;
    // if (document.querySelector("#mainIngredient") !== null) {
    //   printElements (url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=`);
    // } else {
    //   printElements (url = `https://www.themealdb.com/api/json/v1/1/random.php`);
    

  request.addEventListener("loadend", function() {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      printElements(response);
    } else {
      printError(this, response);
    }
  }); 

  request.open("GET", url, true);
  request.send();
}

// UI Logic

function printError(request, apiResponse) {
  document.querySelector('#showResponse').innerText = `There was an error accessing getting a random recipe: ${request.status} ${request.statusText}: ${apiResponse.message}`;
}

function printElements(apiResponse) { 
  // let measurementArray = [apiResponse.meals[0].strMeasure1, apiResponse.meals[0].strMeasure2, apiResponse.meals[0].strMeasure3, apiResponse.meals[0].strMeasure4, apiResponse.meals[0].strMeasure5, apiResponse.meals[0].strMeasure6, apiResponse.meals[0].strMeasure7, apiResponse.meals[0].strMeasure8, apiResponse.meals[0].strMeasure9, apiResponse.meals[0].strMeasure10, apiResponse.meals[0].strMeasure11, apiResponse.meals[0].strMeasure12, apiResponse.meals[0].strMeasure13, apiResponse.meals[0].strMeasure14, apiResponse.meals[0].strMeasure15, apiResponse.meals[0].strMeasure16, apiResponse.meals[0].strMeasure17, apiResponse.meals[0].strMeasure18, apiResponse.meals[0].strMeasure19, apiResponse.meals[0].strMeasure20];
  // let ingredientArray = [apiResponse.meals[0].strIngredient1, apiResponse.meals[0].strIngredient2, apiResponse.meals[0].strIngredient3, apiResponse.meals[0].strIngredient4, apiResponse.meals[0].strIngredient5, apiResponse.meals[0].strIngredient6, apiResponse.meals[0].strIngredient7, apiResponse.meals[0].strIngredient8, apiResponse.meals[0].strIngredient9, apiResponse.meals[0].strIngredient10, apiResponse.meals[0].strIngredient11, apiResponse.meals[0].strIngredient12, apiResponse.meals[0].strIngredient13, apiResponse.meals[0].strIngredient14, apiResponse.meals[0].strIngredient15, apiResponse.meals[0].strIngredient16, apiResponse.meals[0].strIngredient17, apiResponse.meals[0].strIngredient18, apiResponse.meals[0].strIngredient19, apiResponse.meals[0].strIngredient20];
  // let combinedArray = [];
  // let showIngredients = document.querySelector('#showIngredients');

  // for (let i = 0; i < measurementArray.length; i += 1) {
  //   if ((!(measurementArray.includes(null) || ingredientArray.includes(null))) || (!(measurementArray.includes(' ') || ingredientArray.includes(' ')))) {
  //   combinedArray.push(measurementArray[i] + " " + ingredientArray[i]);
  //   }
  // }
  // console.log(combinedArray);
  // document.querySelector('#showIngredients').append(combinedArray);
  // let tryArray = [apiResponse.meals[0].strMeasure1 + apiResponse.meals[0].strIngredient1, '\n', apiResponse.meals[0].strMeasure2 + apiResponse.meals[0].strIngredient2, '\n', apiResponse.meals[0].strMeasure3 + apiResponse.meals[0].strIngredient3, '\n', apiResponse.meals[0].strMeasure4 + apiResponse.meals[0].strIngredient4, '\n', apiResponse.meals[0].strMeasure5 + apiResponse.meals[0].strIngredient5, '\n', apiResponse.meals[0].strMeasure6 + apiResponse.meals[0].strIngredient6, '\n', apiResponse.meals[0].strMeasure7 + apiResponse.meals[0].strIngredient7, '\n', apiResponse.meals[0].strMeasure8 + apiResponse.meals[0].strIngredient8, '\n', apiResponse.meals[0].strMeasure9 + apiResponse.meals[0].strIngredient9, '\n', apiResponse.meals[0].strMeasure10 + apiResponse.meals[0].strIngredient10, '\n', apiResponse.meals[0].strMeasure11 + apiResponse.meals[0].strIngredient11, '\n', apiResponse.meals[0].strMeasure12 + apiResponse.meals[0].strIngredient12, '\n', apiResponse.meals[0].strMeasure13 + apiResponse.meals[0].strIngredient13, '\n', apiResponse.meals[0].strMeasure14 + apiResponse.meals[0].strIngredient14, '\n', apiResponse.meals[0].strMeasure15 + apiResponse.meals[0].strIngredient15, '\n', apiResponse.meals[0].strMeasure16 + apiResponse.meals[0].strIngredient16, '\n', apiResponse.meals[0].strMeasure17 + apiResponse.meals[0].strIngredient17, '\n', apiResponse.meals[0].strMeasure18 + apiResponse.meals[0].strIngredient18, '\n', apiResponse.meals[0].strMeasure19 + apiResponse.meals[0].strIngredient19, '\n', apiResponse.meals[0].strMeasure20 + apiResponse.meals[0].strIngredient20];



  document.querySelector('#showMealName').innerText = `Make ${apiResponse.meals[0].strMeal} for your fam bam tonight!`;
  
  // document.querySelector('#showIngredients').innerText = `Grab these ingredients from yo kitchen:

  // // ${tryArray}`;

  document.querySelector('#showInstructions').innerText = `Follow these instructions:

  ${apiResponse.meals[0].strInstructions}`; 
}

function handleFormSubmission(event) {
  event.preventDefault();
  document.querySelector("#showIngredients").innerText = null;
  getRandomRecipe();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
