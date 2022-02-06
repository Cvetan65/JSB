function greeting() {
  var name = document.getElementById('fName').value;
  var surname = document.getElementById('lName').value;
  if (name.length > 0) {
    document.getElementById(
      'greeting'
    ).innerHTML = `Hello, I am ${name} ${surname}, и да знаеш јас Цветан Стојановски ќе пукнев ако не пробам со input. Ќути ми  успеа.`;
  }else{
      document.getElementById('greeting').innerHTML = 'Не ме игнорирај, напиши нешто за да те поздравам!'
  }
}
