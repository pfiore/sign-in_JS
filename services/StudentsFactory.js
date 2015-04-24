studentRoster.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [];


  factory.addSignIn = function(student) {
    var index = factory.getIndex(student);
    factory.students[index].signInSheet = true;
  };

  factory.getIndex = function(student) {
    return factory.students.indexOf(student);
  };

  factory.getSignIn = function(student) {
    var index = factory.getIndex(student);
    return factory.students[index].signInSheet === true ? "Signed-In" : "Signed-Out";
  };

  factory.changeSignIn = function(student) {
    var index = factory.getIndex(student);
    factory.students[index].signInSheet = factory.students[index].signInSheet ? false : true;
  }

  return factory;
});
