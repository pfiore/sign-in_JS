studentSignIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.StudentsFactory = StudentsFactory;
  $scope.students = StudentsFactory.students;

  $scope.addSignIn = function(student) {
    $scope.StudentsFactory.addSignIn(student);
  };

  $scope.getSignIn = function(student) {
    return $scope.StudentsFactory.getSignIn(student);
  };

  $scope.changeSignIn = function(student) {
    return $scope.StudentsFactory.changeSignIn(student);
  };

});
