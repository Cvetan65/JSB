let dogSays = {
  name: 'Mourgho',
  kind: 'Dog',
  speak: function () {
    return this.kind + ' says: "Hay bra!!!"';
  }
};

dogSays.name = prompt('Enter the name:')
dogSays.kind = prompt('Enter the kind:')

console.log(dogSays.name)
console.log(dogSays.kind)

let output = document.getElementById('output');
output.innerHTML += `${dogSays.name} says "Hi broo! `

let output1 = document.getElementById('output1');
output1.innerHTML += ` Broo, I'm ${dogSays.kind}!`

