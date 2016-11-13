(function(module) {
  'use strict';
  var projectsController = {};

  projectsController.reveal = function () {
    $('#about, #projects, #contact').hide();
    $('#projects').fadeIn();
  };

  module.projectsController = projectsController;
}(window));

(function(module){

  var projectController = {};

  projectController.reveal = function(){
    $('section').hide();
    $('.projects-section').fadeIn();
  };

  module.projectController = projectController;
})(window);
