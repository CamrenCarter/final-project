var getRandomNumber = function(size){
  return Math.floor(Math.random() * size)
};

var getDistance = function(event, target){
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX *diffX) + (diffY*diffY));
};

var getDistanceHint = function (distance) {
  if(distance < 14){
    return "Your right on top of it!";
  }
  else if(distance < 20){
    return "I can taste the loot";
  }
  else if(distance < 40){
    return "I can smell the loot";
  }
  else if(distance < 80){
    return "Getting Closer";
  }
  else if(distance < 160){
    return "Still Cold";
  }
  else if(distance < 320){
    return "Can't see it anywhere!";
  }
  else if (distance < 420){
    return "Far Away";
  }
  else{
    return "Land Somewhere else";
  }
};
//set up variables
var width = 600;
var height = 600;
var clicks = 0;

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};
//Add a click handler to the images
$("#map").click(function(event){
  //click handler code goes here
  clicks++;

//Gets the distance between the click and the event
var distance = getDistance(event, target);
//Convert the distance to show a hint
var distanceHint = getDistanceHint(distance);
//update the distance element in html
$("#distance").text(distanceHint);

if(distance < 12){
  alert("Congrats you got a Victory Royale! in " + clicks + " clicks!");
  }
  else if (clicks > 50) {
    alert("You have been knocked, Game Over!")
  }
});
