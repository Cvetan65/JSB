$(document).ready(function () {
  let button = $('button').click(function () {
    let input = $('#name').val();
    message(input);
  });
  function message(inp) {
    let message = $('#message').append('h1').text(`Hello there ${inp}!`);
  }
});
