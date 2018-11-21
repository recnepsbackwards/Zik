$(document).ready(function(){
  var tableData = $('tr td:nth-child(5)').find('a');
  for (var i = 0; i < tableData.length; i++) {
    var array = tableData[i].href.split('/');
    array.pop();
    array = array.join('/');
    tableData[i].href = array;
  }
});
