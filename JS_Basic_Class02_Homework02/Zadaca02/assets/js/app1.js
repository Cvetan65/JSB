function getSign() {
  let year = document.getElementById('year').value;
  let parsYear = parseInt(year);
  let zodCode = (parsYear - 4) % 12;

  if (zodCode == 0) {
    document.getElementById('sign').innerHTML =
      'Your sign in Chinese Zodiac is Rat';
  } else if (zodCode == 1) {
    document.getElementById('sign').innerHTML =
      'Your sign in Chinese Zodiac is Ox';
  } else if (zodCode == 2) {
    document.getElementById('sign').innerHTML =
      'Your sign in Chinese Zodiac is Tigar';
  } else if (zodCode == 3) {
    document.getElementById('sign').innerHTML =
      'Your sign in Chinese Zodiac is Rebbit';
  } else if (zodCode == 4) {
    document.getElementById('sign').innerHTML =
      'Your sign in Chinese Zodiac is Dragon';
  } else if (zodCode == 5) {
    document.getElementById('sign').innerHTML =
      'Your sign in Chinese Zodiac is Snake';
  } else if (zodCode == 6) {
    document.getElementById('sign').innerHTML =
      'Your sign in Chinese Zodiac is Horse';
  } else if (zodCode == 7) {
    document.getElementById('sign').innerHTML =
      'Your sign in Chinese Zodiac is Goat';
  } else if (zodCode == 8) {
    document.getElementById('sign').innerHTML =
      'Your sign in Chinese Zodiac is Mankey';
  } else if (zodCode == 9) {
    document.getElementById('sign').innerHTML =
      'Your sign in Chinese Zodiac is Rooster';
  } else if (zodCode == 10) {
    document.getElementById('sign').innerHTML =
      'Your sign in Chinese Zodiac is Dog';
  } else {
    document.getElementById('sign').innerHTML =
    'Your sing in Chinese Zodiak is Pig'
  }
}
