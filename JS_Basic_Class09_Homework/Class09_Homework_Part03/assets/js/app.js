$(document).ready(function () {
  let myButton = $('#myButton');
  
  myButton.click(function () {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      success: function (result) {
        for (let todo of result) {
          if (todo.completed === true) {
            console.log(`${todo.id}  ${todo.title} Completed`);
            let outout = $('#output').after('<table></table>').append(
              `<tr>
                  <td>${todo.id}</td>
                  <td>${todo.title}</td>
                  <td>Completed</td>
              </tr>`
            );
          } else{
            console.log(`${todo.id} Not Completed`);
            let outout1 = $('#output1').after('<table></table>'
            ).append(
              `<tr>
                  <td>${todo.id}</td>
                  <td>Not Completed</td>
              </tr>`
            );
          }
        }
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});
