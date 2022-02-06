let input = parseInt(prompt('Enter your weight in kg:'));
let expRes = document.getElementById('chickens');
let sum = 0;

function weightInChickens(inputKg, resEl) {
  sum = inputKg / 0.5;
  console.log(sum);
  resEl.innerHTML += `<h1>WEIGHT CALCULATOR IN CHICKENS</h1>`;
  resEl.innerHTML += `Your weight (${inputKg} kg) in chickens is : ${sum} chickens`
}
weightInChickens(input, expRes);
