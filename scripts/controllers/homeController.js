(function(module){

  var homeController = {};

  homeController.reveal = function(){
    $('section').fadeIn();

  };

  module.homeController = homeController;
})(window);
