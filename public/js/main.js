
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
  }
});

IdeasApp.controller('IdeaCtrl', ['$scope','IdeasSrvc', function($scope,IdeasSrvc) {
  IdeasSrvc.getIdeas(function(data){
    $scope.ideas = data;
  });
}]);

