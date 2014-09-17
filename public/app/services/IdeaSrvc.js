
IdeasApp.service('IdeasSrvc', function($http,$q) {

  this.getIdeas = function(cb) {

  $http.get('/all').
    success(function(data, status, headers, config){
      cb(data);
    }).
    error(function(data, status, headers, config){
      console.log(status);
    });
  },

  this.showIdea = function(id,cb) {
    $http.get('/show',{params: {id: id}}).
      success(function(data, status, headers, config){
      cb(data);
    }).
    error(function(data, status, headers, config){
      console.log(status);
    });
  },

  this.createIdea = function(idea,cb) {
    $http({method:'post',
           url:'/create',
           data: 'id=' + idea.id +
                 '&comment=' + idea.comment +
                 '&author=' + idea.author +
                 '&votes=' + idea.votes +
                 '&isCrossedOut=' + idea.isCrossedOut }).
      success(function(data, status, headers, config){
      cb(data);
    }).
    error(function(data, status, headers, config){
      console.log(status);
    });
  }

  this.deleteIdea = function(id,cb) {
    $http({method:'post',
           url:'/destroy',
           data: 'id=' + id }).
      success(function(data, status, headers, config){
      cb(data);
    }).
    error(function(data, status, headers, config){
      console.log(status);
    });
  }

  this.updateIdea = function(idea,cb) {
    $http({method:'post',
           url:'/update',
           data: 'id=' + idea.id +
                 '&comment=' + idea.comment +
                 '&author=' + idea.author +
                 '&votes=' + idea.votes +
                 '&isCrossedOut=' + idea.isCrossedOut }).
      success(function(data, status, headers, config){
      cb(data);
    }).
    error(function(data, status, headers, config){
      console.log(status);
    });
  }
});
