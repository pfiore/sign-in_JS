studentSignIn.controller('StudentsCtrl', function StudentsCtrl($scope, StudentsFactory) {
  $scope.StudentsFactory = StudentsFactory;
  $scope.students = StudentsFactory.students;

  $scope.signIn = function(student) {
    student.sign_in = true;
  };
  
  $scope.signOut = function(student) {
      student.sign_in = false;
  };

});



  // $scope.getSignIn = function(student) {
  //   return $scope.StudentsFactory.getSignIn(student);
  // };
