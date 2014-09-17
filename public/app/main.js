
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
                when('/create',{
                   templateUrl: 'app/views/create.html',
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
