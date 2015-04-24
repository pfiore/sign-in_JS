var studentSignIn = angular.module('studentRoster', ['ui.router']);

studentSignIn.config(function($stateProvider) {
  $stateProvider.state('home', {
    url:"",
    templateUrl: "patrials/home.html"
  });

});
