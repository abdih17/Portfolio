(function(module) {
  var mainPageController = {};

  mainPageController.reveal = function() {
    $('.tab-content').hide();
    $('#main-page-wrapper').fadeIn();
  };

  module.mainPageController = mainPageController;
})(window);
