console.log("ASdfasf")
$("#add-button").click(function() {
  $("#add-display").html("4")
})

$("#picture-button").click(function() {
  $("#picture-display").html(' <img src="http://images5.fanpop.com/image/photos/28100000/Kitty-animal-cubs-28185453-576-341.jpg"/>')
})

$("#counter-button").click(function() {
  countclicks()
  $("#counter-display").html(number)
})

var number = 0

function countclicks() 
{
  number = number +3;
}