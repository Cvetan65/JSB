let arr = [2, 4, 7, 34, 55, 76, 34, 4, 9];

let listArray = document.getElementById('arrEl');
let sumOfArr = document.getElementById('sumNum');

listArray.style.display = 'inline-flex';
listArray.style.margin = '10px';
listArray.style.listStyle = 'none';

function listOfArrayNum(array, arrayElement, sumElement) {
  arrayElement.innerHTML += '<h3>All numbers in array is:  </h3>';
  arrayElement.innerHTML += '<ul>';

  for (let num of array) {
    arrayElement.innerHTML += `<li> ${num},</li>`;
  }
  arrayElement.innerHTML += '</ul>';

  let sum = 0;

  for (let num of array) {
    sum += num;
  }
  sumElement.innerHTML += `<p>The sum of numbers in array is: ${sum}</p>`;
}

listOfArrayNum(arr, listArray, sumOfArr);
