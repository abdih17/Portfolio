'use strict';
function filterElements($triggerElements, $displayElements, allElementsName){
  $displayElements.show();
  $triggerElements.on('click', 'a', function(event){
    var $triggerId = $(this).attr('id');
    if($triggerId === allElementsName){
      $displayElements.show();
    } else {
      $displayElements.hide();
      $displayElements.each(function(){
        if($(this).attr('data-category') === $triggerId) {
          $(this).fadeIn();
        }
      });
    }
  });
}

$(document).ready(function(){
  $('.nav-icon').on('click',function(){
    $('.navigation ul').toggle('slow');
  });
});
