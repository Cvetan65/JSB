let birdthYear = parseInt(prompt('Еnter your year of birth'));

function calCode(year) {
  let res = (year - 4) % 12;
  return res;
}

switch (calCode(birdthYear)) {
  case 0:
    console.log('Your sign in Chinese Zodiac is RAT');
    break;
  case 1:
    console.log('Your sign in Chinese Zodiac is OX');
    break;
  case 2:
    console.log('Your sign in Chinese Zodiac is TIGER');
    break;
  case 3:
    console.log('Your sign in Chinese Zodiac is RABBIT');
    break;
  case 4:
    console.log('Your sign in Chinese Zodiac is DRAGON');
    break;
  case 5:
    console.log('Your sign in Chinese Zodiac is SNAKE');
    break;
  case 6:
    console.log('Your sign in Chinese Zodiac is HORSE');
    break;
  case 7:
    console.log('Your sign in Chinese Zodiac is GOAT');
    break;
  case 8:
    console.log('Your sign in Chinese Zodiac is MANKEY');
    break;
  case 9:
    console.log('Your sign in Chinese Zodiac is ROOSTER');
    break;
  case 10:
    console.log('Your sign in Chinese Zodiac is DOG');
    break;
  case 11:
    console.log('Your sign in Chinese Zodiac is PIG');
    break;
  default:
    console.log('You have to enter whole year YYYY');
}

// console.log('calCode')
// console.log(calCode(birdthYear))
