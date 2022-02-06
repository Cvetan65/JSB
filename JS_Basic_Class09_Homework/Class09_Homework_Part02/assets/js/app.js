$(document).ready(function () {
  let button = $('button').click(function () {
    let inputText = $('#textIn').val();
    let inputColor = $('#color').val();

    $('#textIn').val('');
    $('#color').val('');

    generateH1(inputText, inputColor);
  });

  function generateH1(text, color) {
    if (text == '' && color == '#ffffff') {
      let message = $('#message').text(
        'ERROR: You have to input tex message and select other color then white!'
      );
    } else if (text == '') {
      let message = $('#message').text('ERROR:You have to input tex message !');
    } else if (color == '#ffffff') {
      let message = $('#message').text(
        'ERROR: You have to select other color then white!'
      );
    } else {
      /*Овде ми се јави проблем. Имено доколку се обидував да 
ставам h1 на начин што то ќе го изведам со after() before(), 
css-от ми се однесува на елементот на кој реферирам: 
пр: let h1 = $('#message').before('h1').css({color: `${color}`})*/
      let h1 = $('h1')
        .text(`This is h1 from gerator with message: ${text}`)
        .css({ color: `${color}` });
    }
  }
});
