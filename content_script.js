$(document).ready(function(){
  var interval = setInterval(doStuff, 2000); // 2000 ms = start after 2sec
  function doStuff() {
    var sorting1 = $('.sorting_1');
    var items = $('.sorting_1[data-title]');
    if (sorting1.length > 0 && items.length > 0) {
      for(var i=0; i<items.length; i++) {
        var amazonTitle = items[i].getAttribute('data-title');
        items[i].innerHTML += '<a class="redClass" target="_blank" href="https://www.google.com/search?q='+amazonTitle+'">Amazon</a>';
      }
      clearInterval(interval);
    }
  }
  $(document).on('click', '.paginate_button, .btnGo', function() {
    clearInterval(interval);
    interval = setInterval(doStuff, 2000);
  });
});
