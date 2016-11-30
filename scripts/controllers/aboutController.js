(function(module) {
  var aboutController = {};

  aboutController.reveal = function() {
    $('.tab-content').hide();
    $('#about-me').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
