var studentSignIn = angular.module('studentSignIn', ['ui.router']);

studentSignIn.config(function($stateProvider) {
  $stateProvider.state('home', {
    url:"",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('sign_in_sheet', {
  url: 'sign_in_sheet',
  templateUrl: 'partials/sign_in_sheet.html',
  controller: 'StudentsCtrl'
  });


});
