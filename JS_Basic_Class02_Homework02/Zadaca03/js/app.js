var num1 = prompt('Enter a random number');
var parsNum1 = parseInt(num1)
var num2 = prompt('Enter a random number');
var parsNum2 = parseInt(num1)
var num3 = prompt('Enter a random number');
var parsNum3 = parseInt(num1)
var num4 = prompt('Enter a random number');
var parsNum4 = parseInt(num1)
var num5 = prompt('Enter a random number');
var parsNum5 = parseInt(num1)

if (parsNum1>parsNum2 && parsNum1>parsNum3 && parsNum1>parsNum4 && parsNum1>parsNum5) {
    alert(`Тhe number with ordinal number 1 and value of ${num1} is the maximum number `)
}else if (parsNum2>parsNum1 && parsNum2>parsNum3 && parsNum2>parsNum4 && parsNum2>parsNum5){
    alert(`Тhe number with ordinal number 2 and value of ${num2} is the maximum number `)
}else if (parsNum3>parsNum1 && parsNum3>parsNum2 && parsNum3>parsNum4 && parsNum3>parsNum5){
    alert(`Тhe number with ordinal number 3 and value of ${num3} is the maximum number `)
}else if (parsNum4>parsNum1 && parsNum4>parsNum2 && parsNum4>parsNum3 && parsNum4>parsNum5){
    alert(`Тhe number with ordinal number 4 and value of ${num4} is the maximum number `)
}else {
    alert(`Тhe number with ordinal number 5 and value of ${num5} is the maximum number `)
}