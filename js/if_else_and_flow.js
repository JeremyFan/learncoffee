// Generated by CoffeeScript 1.9.3
(function() {
  var age, ages, ages2, awardMedals, child, contenders, countdown, countdown2, courses, date, dish, filename, fn, food, foods, gold, i, j, k, l, len, len1, len2, len3, lyrics, m, mood, name, num, ref, rest, score, shortNames, silver, yearsOld,
    slice = [].slice,
    hasProp = {}.hasOwnProperty;

  if (sining) {
    mood = greatlyImporved;
  }

  if (!noMistake) {
    score = 100;
  }

  if (happy && knowsIt) {
    clapsHands();
    chaChaCha();
  } else {
    if (foo) {
      showIt();
    }
  }

  date = friday ? sue : jill;

  gold = silver = rest = "unknown";

  awardMedals = function() {
    var first, others, second;
    first = arguments[0], second = arguments[1], others = 3 <= arguments.length ? slice.call(arguments, 2) : [];
    gold = first;
    silver = second;
    return rest = others;
  };

  contenders = ["Michael Phelps", "Liu Xiang", "Yao Ming", "Allyson Felix", "Shawn Johnson", "Roman Sebrle", "Guo Jingjing", "Tyson Gay", "Asafa Powell", "Usain Bolt"];

  awardMedals.apply(null, contenders);

  console.log("Gold: " + gold);

  console.log("Silver: " + silver);

  console.log("The Field: " + rest);

  ref = ['toast', 'cheese', 'wine'];
  for (j = 0, len = ref.length; j < len; j++) {
    food = ref[j];
    eat(food);
  }

  courses = ['greens', 'caviar', 'truffles', 'roast', 'cake'];

  for (i = k = 0, len1 = courses.length; k < len1; i = ++k) {
    dish = courses[i];
    menu(i + 1, dish);
  }

  foods = ['broccoli', 'spinach', 'chocolate'];

  for (l = 0, len2 = foods.length; l < len2; l++) {
    food = foods[l];
    if (food !== 'chocolate') {
      eat(food);
    }
  }

  shortNames = (function() {
    var len3, m, results;
    results = [];
    for (m = 0, len3 = list.length; m < len3; m++) {
      name = list[m];
      if (name.length < 5) {
        results.push(name);
      }
    }
    return results;
  })();

  countdown = (function() {
    var m, results;
    results = [];
    for (num = m = 10; m >= 1; num = --m) {
      results.push(num);
    }
    return results;
  })();

  countdown2 = (function() {
    var m, results;
    results = [];
    for (num = m = 10; m <= 1; num = m += 2) {
      results.push(num);
    }
    return results;
  })();

  yearsOld = {
    max: 10,
    ida: 9,
    tim: 11
  };

  ages = (function() {
    var results;
    results = [];
    for (child in yearsOld) {
      age = yearsOld[child];
      results.push(child + " is " + age);
    }
    return results;
  })();

  ages2 = (function() {
    var results;
    results = [];
    for (child in yearsOld) {
      if (!hasProp.call(yearsOld, child)) continue;
      age = yearsOld[child];
      results.push(child + " is " + age);
    }
    return results;
  })();

  if (this.studyingEconomics) {
    while (supply > demand) {
      buy();
    }
    while (!(supply > demand)) {
      sell();
    }
  }

  if (this.studyingEconomics) {
    while (supply > demand) {
      buy();
    }
    while (!supply > demand) {
      sell();
    }
  }

  num = 6;

  lyrics = (function() {
    var results;
    results = [];
    while (num -= 1) {
      results.push(num + " little monkeys, jumping on the bed. One fell out and bumped his head.");
    }
    return results;
  })();

  while (true) {
    alll();
  }

  while (true) {
    alll();
  }

  fn = function(filename) {
    return fs.readFile(filename, function(err, contents) {
      return compile(filename, content.toString());
    });
  };
  for (m = 0, len3 = list.length; m < len3; m++) {
    filename = list[m];
    fn(filename);
  }

}).call(this);
