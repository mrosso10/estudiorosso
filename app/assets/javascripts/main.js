jQuery(document).ready(function() {
  $(document).scroll(function(){
    var x = $(this).scrollTop();
    $(".backed").css('background-position','0% '+parseInt(-x/10)+'px');
    $(".flyer").css('background-position','0% '+parseInt(-x/10)+'px');
  });
});
