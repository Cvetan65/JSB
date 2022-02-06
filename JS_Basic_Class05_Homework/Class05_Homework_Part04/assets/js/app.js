let arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(parseInt(prompt('Enter your 10 numbers' + (i + 1))));
}
let evenOdd = prompt('Enter "E" for even  or "O" for odd type of nubers');
let evenOddAr;
let sum;

function findNumber(array, type) {
  evenOddAr = [];
  sum = 0;
  for (let j = 0; j < arr.length; j++) {
    if (type == 'E' && array[j] % 2 === 0) {
      evenOddAr.push(array[j]);
    } else if (type == 'O' && array[j] % 2 !== 0) {
      evenOddAr.push(array[j]);
    } else if (type != 'E' || type != 'O') {
      let sumOnDoc = document.getElementById('sum');
      sumOnDoc.innerText = `You have to choice between E (for even) and O (for odd) numbers`;
    }
  }
  for (let k = 0; k < evenOddAr.length; k++) {
    sum += evenOddAr[k];
  }
}

findNumber(arr, evenOdd);
console.log(evenOddAr);
console.log(
  `The sum of even or odd numbers of your choice, (${arr}), is ${sum}`
);

let sumOnDoc = document.getElementById('sum');
if (evenOdd == 'E') {
  sumOnDoc.innerText = `The sum of even numbers (${evenOddAr}) of your choice, (${arr}), is ${sum}`;
} else if (evenOdd == 'O') {
  sumOnDoc.innerText = `The sum of odd numbers (${evenOddAr}) of your choice, (${arr}), is ${sum}`;
}
