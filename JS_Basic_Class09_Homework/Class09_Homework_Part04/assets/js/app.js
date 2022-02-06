$(document).ready(function () {
  $('#myButt').click(function () {
    let num1 = $('#fnum').val();
    let num2 = $('#snum').val();
    let num3 = $('#tnum').val();
    let average = (parseInt(num1) + parseInt(num2) + parseInt(num3)) / 3;
    averCalc(average);
    console.log(average)
  });

  function averCalc(calc) {
    if (calc >= 10) {
      let = $('#output').text('The average is larger then 10').css({ color: 'green' });
    } else if(calc < 10) {
      let = $('#output').text('The average is smaller then 10').css({ color: 'red' });
    }
  }
});
