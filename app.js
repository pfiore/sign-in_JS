var studentSignIn = angular.module('studentRoster', ['ui.router']);

studentSignIn.config(function($stateProvider) {
  $stateProvider.state('home', {
    url:"",
    templateUrl: "patrials/home.html"
  });

  $stateProvider.state('sign_in_sheet', {
  url: 'sign_in_sheet',
  templateUrl: 'partials/sign_in_sheet.html',
  controller: 'StudentsCtrl'
});


});
