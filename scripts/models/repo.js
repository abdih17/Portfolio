(function(module) {
  var repos = {};

  repos.allRepos = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/users/abdih17/repos',
      type: 'GET',
      header: {'Authorization': 'token ' + githubToken},
      success: function(data){
        console.log(data);
        repos.allRepos = data;
        callback();
      }
    });
  };

  repos.githubAttr = function(attr) {
    return repos.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.repos = repos;
}(window));
