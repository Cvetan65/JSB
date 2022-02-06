let dogSays = {
  name: 'Mourgho',
  kind: 'Dog',
  speak: function () {
    return this.name + ' says: "Hay bra!!!"';
  }
};

let output = document.getElementById('output');

function updateObjNam(obj, key, value){
  obj[key] = value;
  console.log(obj)
  console.log(value)
  return output.innerHTML += `${value} says 'Hey bro!!'`;
}
// obj = dogSays
console.log(dogSays)

let inNam = document.getElementById('inputName');
inNam.addEventListener('blur', function(e){
  dogSays.name = e.target.value; 
  console.log(dogSays.name)
  updateObjNam(dogSays, name, dogSays.name)
});
console.log(dogSays.name)
let output1 = document.getElementById('output1');

function updateObjKind(ob, ke, va){
  ob[ke] = va;
  console.log(ob)
  console.log(va)
  return output1.innerHTML += `${va} says 'Hey bro!!'`;
}

ob = dogSays
console.log(dogSays)

let inKind = document.getElementById('inputKind');
inKind.addEventListener('blur', function(e){
  dogSays.kind = e.target.value; 
  console.log(dogSays.kind)
  updateObjKind(dogSays, dogSays.kind, dogSays.kind)
});


