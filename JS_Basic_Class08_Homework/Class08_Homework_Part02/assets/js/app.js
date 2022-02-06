$(document).ready(function () {
  $('button').click(function () {
    let inputElem1 = $('input:first').val(); //  Get the inputs using jquery
    let inputElem2 = $('input:last').val();
    let h3 = $('h3').text('Change the text of the h3 via jquery'); //Change the text of the h3 via jquery 
    debugger
    let divElem = $('h3').after(`<p>Some text from div: "${inputElem1}"</p>`)
    .css({ color: inputElem2 });
  });
});
