document.getElementById('submit').addEventListener('click', function () {
  let rows = document.getElementById('rows').value;
  let columns = document.getElementById('columns').value;
  if (rows == '' || rows == null) {
    rows = 1;
  }
  if (columns == '' || columns == null) {
    columns = 2;
  }
  function genTable() {
    let table = '';
    let rowsNum = rows;
    let columnsNum = columns;
    for (let i = 1; i <= rowsNum; i++) {
      table += '<tr>' ;
      for (j = 1; j <= columnsNum; j++) {
        table += `<td>Row ${i} Column ${j} </td>`;
      }
      table += '</tr>';
    }
    let output = document.getElementById('output');
    output.innerHTML += `<table> ${table} </table>`;
  }
  genTable();
});


