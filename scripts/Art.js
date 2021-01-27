function DrawGrid() {
    // Variables declarations
    var table = document.getElementById('GridID'); // Table or cells
    table.innerHTML = '';
    var rows = document.getElementById('HeightID').value; // rows
    var cols = document.getElementById('WidthID').value; //columns
    var tableData='';
    // for loop started
    for (var i=0;i<rows;i++) {
        tableData+='<tr>';
        for (x=0;x<cols;x++) {
            tableData+='<td></td>';
        }
        tableData+='</tr>';
    }
    table.innerHTML = tableData;
    addEventForTd()
}
// started add event listener function
function addEventForTd() {
    var tds = document.getElementsByTagName('td');
    for (var i=0;i<tds.length;i++) {
        tds[i].addEventListener('click', function(event) {
            var currentTD = event.target;
            currentTD.style.backgroundColor=document.getElementById('ColorID').value;
        });
    }
}
document.addEventListener('DOMContentLoaded',function() {
    addEventForTd();
    });    