(function(module) {
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').html());

  repoView.renderRepos = function() {
    console.log('Callback function executed!');
    $('.repo-stats').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );
  };

  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
