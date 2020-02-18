$('.box_1').click(function(){
  b1 = $('.box_1');
  b1.addClass('display_none');
});

$('.box_2').click(function(){
  b2 = $('.box_2');
  b2.addClass('color_blue');
  b1.removeClass('display_none');
});

$('.box_3').click(function(){
  b3 = $('.box_3');
  b3.addClass('bigger');
});
