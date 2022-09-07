import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

// Business Logic
// ${process.env.API_KEY}

function getRandomRecipe() {
  let request = new XMLHttpRequest();
  const url = `https://www.themealdb.com/api/json/v1/1/random.php`;

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
  console.log(apiResponse.meals[0])
  document.querySelector('#showResponse').innerText = `Make ${apiResponse.meals[0].strMeal} for your fam bam tonight!`; 
}

function handleFormSubmission(event) {
  event.preventDefault();
  getRandomRecipe();
}

window.addEventListener("load", function() {
  document.querySelector('form').addEventListener("submit", handleFormSubmission);
});
