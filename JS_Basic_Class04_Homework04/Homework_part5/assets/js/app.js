let arr = [5, 67, 88, 35, 2, 'petre', 33, 68];
let newArr = [65, 44, 88, 23, 6, 45, 'ceko', 33, 76, 4, 9];


function minMaxSum(inpAr) {
  let numOnly = function (val) {
    if (typeof val === 'number') {
      return val;
    }
  };
  let numbers = inpAr.filter(numOnly);
  console.log(numbers);

  let counter = 0;
  let max = -Infinity;
  let min = Infinity;
  

  while (counter < numbers.length) {
    if (numbers[counter] > max) {
      max = numbers[counter];
    } else if (numbers[counter] < min) {
      min = numbers[counter];
    }
    console.log(max);
    console.log(min);
    counter++;
  }
  let sum = max + min;
  console.log(sum)
}
minMaxSum(arr);
minMaxSum(newArr);
