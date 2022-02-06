let nameRecipe = prompt('Please enter tne name of recipe:');
let ingredRecipe = parseInt(prompt('Please enter the number of ingredients:'));
let nameIngred = [];
for (let i = 0; i < ingredRecipe; i++) {
  nameIngred.push(prompt('Please enter the name of any ingredients:'));
}

let insRecNam = document.getElementById('recNam');
let insIngNam = document.getElementById('ingNam');

function recipe(namOfRec, namOfIng, reciIng, reciNam) {
  namOfRec.innerHTML += `<h2>The name of recipe is: ${reciNam}</h2>`;
  let table = document.createElement('table');
   let tr;
   let td;

  for (let j = 0; j < reciIng.length; j++) {
    tr = table.appendChild(document.createElement('tr')); // add a new row
    td = tr.appendChild(document.createElement('td'));
    td.innerHTML = reciIng[j];
  }
  namOfIng.appendChild(table);
}

recipe(insRecNam, insIngNam, nameIngred, nameRecipe);


