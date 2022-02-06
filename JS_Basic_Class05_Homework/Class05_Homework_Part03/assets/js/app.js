let arr = [2, 4, 5, 8, 5, 3, 8, 9, 3];
let arr1 = [25, 55, 83, 33, 59, 33, 33];
let arr2 = [14, 16, 19, 12, 14, 17, 20, 14];
let num = 5;
let num1 = 59;
let num2 = 16;
let res;
function findNumber(number, array) {
  res = 0;
  for (let i = 0; i < array.length; i++) {
    if (number == array[i]) {
      res++;
    }
  }
}
findNumber(num, arr);
console.log(`There are ${res} occurrences of number ${num} in the array`);
let view = document.getElementById('res');
view.innerText = `There are ${res} occurrences of number ${num} in the array`;

findNumber(num1, arr1);
console.log(`There are ${res} occurrences of number ${num1} in the array`);
let view1 = document.getElementById('res1');
view1.innerText = `There are ${res} occurrences of number ${num1} in the array`;

findNumber(num2, arr2);
console.log(`There are ${res} occurrences of number ${num2} in the array`);
let view2 = document.getElementById('res2');
view2.innerText = `There are ${res} occurrences of number ${num2} in the array`;
