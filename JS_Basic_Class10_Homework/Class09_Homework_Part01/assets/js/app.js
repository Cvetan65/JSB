let myButton = document.getElementById('myButton');

function buildTable(data) {
  let table = document.getElementById('todos');
  let table1 = document.getElementById('todos1');

  for (let i = 0; i < data.length; i++) {
    if (data[i].completed === true) {
      console.log(`${data[i].id} ${data[i].title} Completed`)
      let row = `<tr> 
                    <td>${data[i].id}</td>
                    <td>${data[i].title}</td>
                    <td>'Completed'</td>
                </tr>`;
      table.innerHTML += row;
    } else if(data.completed !== true){
      console.log(`${data[i].id} Not Completed`)
      let row1 = `<tr> 
                    <td>${data[i].id}</td>
                    <td>'Not Completed'</td>
                </tr>`;
      table1.innerHTML += row1;
    }
  }
}

myButton.addEventListener('click', function () {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => {
      response.json().then((data) => {
        let todos = data;
        console.log(todos);

        buildTable(todos);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
