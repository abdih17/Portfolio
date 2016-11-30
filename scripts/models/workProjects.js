(function(module) {
  var reposObj = {};

  reposObj.requestRepos = function(callback) {
    $.when(
     $.get('/github/users/abdih17/repos', function(data) {
       reposObj.allRepos = data;
       console.log(data);
     })
    ).done(callback);
  };

  reposObj.withTheAttribute = function(myAttr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[myAttr];
    });
  };

  module.reposObj = reposObj;
})(window);
