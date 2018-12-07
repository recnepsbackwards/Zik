$(document).ready(function(){
  var pastActivityForm = $('.essActivityAmount');
  var pending = $('#pastActivityForm > div.container.clearfix > div > div.pull-left.fullWidth.whiteBoxborderradius.whiteBoxAccSummary.leftShadow.rightShadow').find('.pAmount');
  var total = 0;
  for(var i=0; i<pending.length; i++) {
    var stringAmount = pending[i].innerText;
    var integerAmount = parseFloat(stringAmount);
    total += integerAmount;
  }
  pastActivityForm.prepend($('<div class="dollarAmt pull-right">Pending: '+Math.round(total)+'</div>'));
});
