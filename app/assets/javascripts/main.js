jQuery(document).ready(function() {
  $(document).scroll(function(){
    var x = $(this).scrollTop();
    $(".backed").css('background-position','50% '+parseInt(50 + x/10)+'%');
  });
  $(".flyer").each(function(index, flyer) {
    $(document).scroll(function(){
      var x = $(this).scrollTop();
      var offset = $(flyer).offset()['top'];
      $(flyer).css('background-position','50% '+parseInt(50 + (x-offset)/10)+'%');
    });
  });
});
