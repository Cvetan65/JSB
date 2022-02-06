let firstName = ['Petko', 'Zvonko', 'Svirko'];
let lastName = ['Petkovski', 'Svirkovski', 'Zvonkovski'];
 let comp = [];
function fullName(name, surname) {
  for (let i in name) {
   
    let position = +i + 1;
    comp.push(`${position}. ${name[i]} ${surname[i]}`);
    let view = document.getElementById('res');
    view.innerHTML = comp
    view.style.marginTop = '30px';
  }
}
fullName(firstName, lastName)
console.log(comp)