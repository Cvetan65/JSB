let numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  
  let str = '';
  let counter = 0;
  
  while (counter < numbers.length) {
    if (numbers[counter] % 2 != 0) {
      str = numbers[counter].toString() + ' ';
      console.log(`${str} `);
    } else {
      str = numbers[counter].toString() + '\n';
      console.log(`${str}\n`);
    }
  
    counter++;
  }
  

