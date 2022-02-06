//...Numbers
var број; 
број = 56;
console.log('The value of variable број is: ' + број)
console.log('The type of variable „број“ is' + typeof(број))

 document.getElementById('valueBroj').innerHTML= број

 document.getElementById('typBroj').innerHTML= typeof(број)

//...Boolean
var булови; 
булови = false;
console.log('The value of variable булови is: ' + булови)
console.log('The type of variable булови is: ' + typeof(булови))

document.getElementById('valueBul').innerHTML= булови

document.getElementById('typBul').innerHTML= typeof(булови)

//...String
var гердан;
гердан = 'Низа на грло ти бело';
console.log('The value of variable гердан is: ' + гердан)
console.log('The type of variable гердан is: ' + typeof(гердан))

document.getElementById('valueString').innerHTML= гердан;

document.getElementById('typString').innerHTML= typeof(гердан);

// ---Second Task---
var π, radius, area;
π = Math.PI;
radius = 15;
area = π * (radius*2)

console.log("Radius of circle is: " + radius + "cm")
console.log("π is: " + Math.PI)
console.log("The area of circle with radius of: "+ radius + "cm, is " + area)

document.getElementById('radius').innerHTML= radius;

document.getElementById('π').innerHTML= π ;

document.getElementById('area').innerHTML= area ;


//---Third Task---

var numbOfPhone = 30;
var priceOfPhone = prompt("Enter the price of the phone:")
var taxRate = prompt("Enter the Tax Rate for that phone:")

var parsPrice = parseInt(priceOfPhone)
var parsTax = parseInt(taxRate)

var total = (numbOfPhone * parsPrice) + (parsPrice * parsTax / 100) * numbOfPhone;

console.log('The price of phone is: $' + parsPrice);
console.log('The Tax Rate for that phone is: ' + parsTax + '%');
console.log('The total price is: $' + total);

document.getElementById('price').innerHTML= parsPrice;

document.getElementById('tax').innerHTML= parsTax;

document.getElementById('quant').innerHTML= numbOfPhone;

document.getElementById('totPric').innerHTML= total;