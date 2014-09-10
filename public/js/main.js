
var IdeasApp = angular.module('IdeasApp', []);

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
  }
});

IdeasApp.controller('IdeaCtrl', ['$scope','IdeasSrvc', function($scope,IdeasSrvc) {

  $scope.showAllIdeas = function(){
    IdeasSrvc.getIdeas(function(data){
      $scope.ideas = data;
    });
  }

  $scope.showIdea = function(id) {
    IdeasSrvc.showIdea(id,function(data){
      $scope.ideas = [];
      $scope.ideas.push(data);
    });
  }

  $scope.showAllIdeas();

}]);

