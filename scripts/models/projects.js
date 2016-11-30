(function(module) {

  function Project (options) {
    for (key in options) {
      this[key] = options[key];
    }
  };

  Project.prototype.toHtml = function() {
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

    var source = $('#article-template').html();
    var templateRender = Handlebars.compile(source);
    return templateRender(this);
  };

  Project.loadAll = function(inputData) {
    //refactored by removing Project.projectArticles = []; from line 9 and setting it equal to inputData
    Project.projectArticles = inputData.sort(function(currentObject, nextObject) {
      return (new Date(nextObject.publishedOn)) - (new Date(currentObject.publishedOn));
    })
    //refactored by replacing forEach with map array method
    .map(function(ele) {
      return new Project(ele);
    });
  };

  //refactored for ajax call to first grab eTag, HEAD of workArticles.json
  Project.fetchAll = function(next) {
    if (localStorage.workArticles) {
      $.ajax({
        type: 'HEAD',
        url: '../../data/workArticles.json',
        success: function(data, message, xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            Project.getAll(next);
          } else {
            Project.loadAll(JSON.parse(localStorage.workArticles));
            next();
          }
        }
      });
    } else {
      Project.getAll(next);
    }
  };

  //added getAll function to grab all the data in workArticles.json
  Project.getAll = function(next) {
    $.getJSON('../../data/workArticles.json', function(allContent, message, xhr) {
      localStorage.eTag = xhr.getResponseHeader('eTag');
      Project.loadAll(allContent);
      localStorage.workArticles = JSON.stringify(allContent);
      next();
    });
  };

  module.Project = Project;
})(window);
