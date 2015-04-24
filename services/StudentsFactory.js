studentSignIn.factory('StudentsFactory', function StudentsFactory() {
  var factory = {};
  factory.students = [
    {name: "Gurgen", sign_in: false},
    {name: "Gurgie", sign_in: false},
    {name: "David Hasselhoff", sign_in: false},
    {name: "Waldo", sign_in: false},
    {name: "Benny Benson", sign_in: false},
    {name: "Bob Belcher", sign_in: false},
    {name: "Tina", sign_in: false},
    {name: "Laurie", sign_in: false},
    {name: "SnaggleTooth", sign_in: false},
  ];

  return factory;
});
