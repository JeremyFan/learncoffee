# postfix if
mood = greatlyImporved if sining

# postfix unless
score = 100 unless noMistake

# if...else...
if happy and knowsIt
	clapsHands()
	chaChaCha()
else
	if foo
		showIt()

# if...then...else...
date = if friday then sue else jill


# splates...
gold = silver = rest = "unknown"

awardMedals = (first, second, others...) ->
	gold = first
	silver = second
	rest = others

contenders = [
  "Michael Phelps"
  "Liu Xiang"
  "Yao Ming"
  "Allyson Felix"
  "Shawn Johnson"
  "Roman Sebrle"
  "Guo Jingjing"
  "Tyson Gay"
  "Asafa Powell"
  "Usain Bolt"
]

awardMedals contenders...

console.log("Gold: " + gold)
console.log("Silver: " + silver)
console.log("The Field: " + rest)


# loops and comprehensions
eat food for food in ['toast','cheese','wine']

courses = ['greens', 'caviar', 'truffles', 'roast', 'cake']
menu i + 1, dish for dish, i in courses

foods = ['broccoli', 'spinach', 'chocolate']
eat food for food in foods when food isnt 'chocolate'

# filter
shortNames = (name for name in list when name.length < 5)

# range
countdown = (num for num in [10..1])
countdown2 = (num for num in [10..1] by 2)

# for...of...
yearsOld = max: 10, ida: 9, tim: 11
ages = for child, age of yearsOld
	"#{child} is #{age}"

# own
ages2 = for own child, age of yearsOld
	"#{child} is #{age}"

# while / until
if this.studyingEconomics
	buy() while supply > demand
	sell() until supply > demand
# while not
if this.studyingEconomics
	buy() while supply > demand
	sell() while not supply > demand

num = 6
lyrics = while num -= 1
  "#{num} little monkeys, jumping on the bed. One fell out and bumped his head."

# while true
while true
	alll()
# loop
loop alll()

# do
for filename in list
	do(filename) ->
		fs.readFile filename, (err, contents) ->
			compile filename, content.toString()
