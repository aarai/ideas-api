
var IdeasApp = angular.module('IdeasApp', ['ngRoute']);

IdeasApp.config(['$httpProvider','$routeProvider','$locationProvider',
        function($httpProvider,$routeProvider,$locationProvider){
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

            //$locationProvider.html5Mode(true);

            $routeProvider.
                when('/',{
                   templateUrl: 'app/views/home.html',
                   controller:'IdeaCtrl'
              }).
                when('/show/:id',{
                   templateUrl: 'app/views/show.html',
                   controller:'IdeaCtrl'
              }).
                when('/edit/:id',{
                   templateUrl: 'app/views/edit.html',
                   controller:'IdeaCtrl'
              })
              .otherwise({templateUrl:'app/views/home.html'});
        }
]);

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

IdeasApp.controller('IdeaCtrl', ['$scope','$routeParams','IdeasSrvc', function($scope,$routeParams,IdeasSrvc) {

  $scope.showAllIdeas = function(){
    IdeasSrvc.getIdeas(function(data){
      $scope.ideas = data;
    });
  }

  $scope.showIdea = function() {
    var id = $routeParams.id;
    IdeasSrvc.showIdea(id,function(data){
      $scope.ideas = [];
      $scope.ideas.push(data);
    });
  }

  $scope.deleteIdea = function(id) {
    IdeasSrvc.deleteIdea(id,function(){
      $scope.showAllIdeas();
    });
  }

  $scope.formPost = function(idea){
    IdeasSrvc.updateIdea(idea, function(){
      window.location = "#/";
    });
  }

  $scope.crossedOut = function(bool){
    return bool === '0' ? false : true;
  }

}]);

