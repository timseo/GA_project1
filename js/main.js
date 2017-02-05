console.log("your #1 place for pregame")


window.onLoad = function () {
  var canvas = document.getElementById('playArea'),
    c = canvas.getContext("2d");

    c.fillStyle = "red";
    c.fillRect = (0, 0, canvas.width, canvas.height);
}
