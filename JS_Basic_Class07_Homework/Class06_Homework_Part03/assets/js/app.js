let car = {
  model: 'Doblo',
  color: 'red',
  year: 2007,
  fuel: 'disel',
  fuelConsumption: 0.08,
  calcPass: function(){
    km = parseInt(prompt('How much km:'))
    fuel = km * 0.08
    console.log(`You need ${fuel} literс for ${km} km`)
  }
}

car.calcPass()