let animals = [];

function Animal(name, type, age) {
  this.animName = name;
  this.animType = type;
  this.animAge = age;
}

// let animForm = document.getElementById('form');
let subsBtn = document.getElementById('btn');
let outputRes = document.getElementById('ul');

function showAnimal(animArr, element) {
  element.innerHTML = '';
  for (let animal of animArr) {
    element.innerHTML += `<li><b>Name: </b> ${animal.animName} <b>Type: </b>${animal.animType} <b>Age: </b>${animal.animAge}`;
  }
}

subsBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let name = document.getElementById('name').value;
  let type = document.getElementById('type').value;
  let age = document.getElementById('age').value;
  let newAnimal = new Animal(name, type, age);
  animals.push(newAnimal);

  showAnimal(animals, outputRes);

  document.getElementById('name').value = '';
  document.getElementById('type').value = '';
  document.getElementById('age').value = '';
});
