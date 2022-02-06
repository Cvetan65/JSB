let num = [45, 5, 7, 3, 10];

function validateNumber(numAr) {
  let counter = 0;
  let result = 0;
  while (counter < numAr.length) {
    if (typeof numAr[counter] === 'number') {
        result = result + numAr[counter];
    } else {
       result = 'Problem';
       return result
    }
    counter++;
  }
  return result;
}

let finalRes = validateNumber(num);
console.log(finalRes);
