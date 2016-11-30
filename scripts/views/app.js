(function(module) {

  var articleView = {};
  var hamburgerMenu = {};

  articleView.populateFilter = function() {
    $('article').not('#project-template').each(function () {
      var category, optionTag;
      category = $(this).attr('data-category');
      optionTag = '<option value="' + category + '">' + category + '</option>';
      if ($('#category-filter option[value="' + category + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    });
  };

  articleView.handleCategoryFilter = function() {
    $('#category-filter').on('change', function() {
      console.log(($(this).val()));
      if ($(this).val()) {
        $('article').hide();
        $('article[data-category="' + ($(this).val()) + '"]').fadeIn();
      } else {
        $('article').not('.project-template').show();
      }
    });
  };

  articleView.setTeasers = function() {
    $('.project-body *:nth-of-type(n+2)').hide();
    $('article').on('click', 'a.read-more', function(e) {
      e.preventDefault();
      if($(this).text() === 'Read more →') {
        $(this).parent().find('*').slideDown();
        $(this).html('&larr; Show Less');
      } else {
        $(this).html('Read more &rarr;');
        $(this).parent().find('.project-body *:nth-of-type(n+2)').slideUp();
      }
    });
  };

  hamburgerMenu.handleHamburgerMenu = function() {
    $('.icon-menu').on('click', function() {
      $('nav ul').toggle();
    });
  };

  hamburgerMenu.collapseOnItemClick = function() {
    $('.tab').on('click', function() {
      $('nav ul').slideUp();
    });
  };

  articleView.renderIndexPage = function() {
    Project.projectArticles.forEach(function(a){
      $('#projects').append(a.toHtml('#article-template'));
    });
    articleView.populateFilter();
    articleView.handleCategoryFilter();
    articleView.setTeasers();
    hamburgerMenu.handleHamburgerMenu();
    hamburgerMenu.collapseOnItemClick();
  };

  Project.fetchAll(articleView.renderIndexPage);
  module.articleView = articleView;
  module.hamburgerMenu = hamburgerMenu;
})(window);
