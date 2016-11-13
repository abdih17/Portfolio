(function(module){

  var aboutController = {};

  aboutController.reveal = function(){
    $('section').hide();
    $('.about-section').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
