// Generated by CoffeeScript 1.9.3
(function() {
  var bitlist, changeNumbers, cube, cube2, cube3, fill, inner, jack, kids, outer, singers, song, square;

  square = function(x) {
    return x * x;
  };

  cube = function(x) {
    return square(x) * x;
  };

  cube2 = function(x) {
    return square(x * x);
  };

  cube3 = function(x) {
    return x * square(x);
  };

  fill = function(container, liquid) {
    if (liquid == null) {
      liquid = "coffee";
    }
    return "Filling the " + container + " with " + liquid + "...";
  };

  song = ["do", "re", "mi", "fa", "so"];

  singers = {
    Jagger: "Rock",
    Elvis: "Roll"
  };

  bitlist = [1, 0, 1, 0, 0, 1, 1, 1, 0];

  kids = {
    brother: {
      name: 'Max',
      age: 11
    },
    sister: {
      name: 'Ida',
      age: 9
    }
  };

  jack = {
    "class": 5,
    grade: 4
  };

  outer = 1;

  changeNumbers = function() {
    var inner;
    inner = -1;
    return outer = 10;
  };

  inner = changeNumbers();

}).call(this);
