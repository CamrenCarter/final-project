

function myFunction() {
var txt;
if (confirm("Congrats You Pressed a button, Press OK to end world hunger, Press cancel to cure cancer!")) {
  txt = "You Ended World Hunger!";
} else {
  txt = "You cured Cancer!";
}
document.getElementById("demo").innerHTML = txt;
}
let cx = document.querySelector("canvas").getContext("2d");
cx.strokeStyle = "blue";
cx.strokeRect(5, 5, 50, 50);
cx.lineWidth = 5;
cx.strokeRect(135, 5, 50, 50);
