
IdeasApp.controller('IdeaCtrl', ['$scope','$routeParams','IdeasSrvc', function($scope,$routeParams,IdeasSrvc) {

  $scope.showAllIdeas = function(){
    IdeasSrvc.getIdeas(function(data){
      $scope.ideas = data;
    });
  }

  // TODO: Add validation checks to make sure values are not null
  $scope.createIdea = function(idea){
    IdeasSrvc.createIdea(idea, function(){
       window.location = "#/";
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

  // TODO: Add validation checks to make sure values are not null
  $scope.updateIdea = function(idea){
    IdeasSrvc.updateIdea(idea, function(){
      window.location = "#/";
    });
  }

  $scope.crossedOut = function(bool){
    return bool === '0' ? false : true;
  }

}]);
