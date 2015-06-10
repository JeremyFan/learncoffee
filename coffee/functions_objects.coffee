# define functions
square = (x) ->x * x

cube = (x) ->square(x) * x

cube2 = (x) ->square x * x

cube3 = (x) ->x * square x

# default value for arguments
fill = (container, liquid = "coffee") ->
	"Filling the #{container} with #{liquid}..."


# Objects and Arrays
song = ["do", "re", "mi", "fa", "so"]

singers = {Jagger: "Rock", Elvis: "Roll"}

bitlist = [
  1, 0, 1
  0, 0, 1
  1, 1, 0
]

kids =
	brother:
		name: 'Max'
		age: 11
	sister:
		name: 'Ida'
		age: 9

# use reserved words
jack =
	class: 5
	grade: 4

# lexical scroping and variable safety
outer = 1
changeNumbers=->
	inner=-1
	outer = 10
inner = changeNumbers()
