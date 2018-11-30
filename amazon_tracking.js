$(document).ready(function(){
  var addressArray = $('#statistics-table > table > tbody > tr > td.client-address');
  var fullName;
  var searchName;
  var titleCol = $('.title-col');
  var amazonSearch = 'https://www.amazon.com/gp/your-account/order-history/ref=oh_aui_search?opt=ab&search='
  for(var i=0; i<addressArray.length; i++) {
    var address = addressArray[i].innerHTML.split('<');
    fullName = address[0];
    searchName = fullName.split(' ');
    $('<a href='+amazonSearch+searchName[0]+'+'+searchName[1]+' targert="_blank">Amazon Tracking Search</a>').insertAfter(titleCol[i]);
  }
});
