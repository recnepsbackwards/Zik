$(document).ready(function(){
  var interval = setInterval(doStuff, 2000); // 2000 ms = start after 2sec
  function doStuff() {
    var sorting1 = $('.sorting_1');
    if (sorting1.length > 0) {
      alert('hi');
      var items = $('.sorting_1[data-title]');
      for(var i=0; i<items.length; i++) {
        var amazonTitle = items[i].getAttribute('data-title');
        items[i].append('<a href=https://www.amazon.com/s/?field-keywords='+amazonTitle+'>Amazon</a>');
      }
      clearInterval(interval);
    }
  }
});
