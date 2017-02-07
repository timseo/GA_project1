$(document).ready(function(){


  var diceOne = [1, 2, 3, 4, 5, 6]
  var diceTwo = [1, 2, 3, 4, 5, 6]
  var shooter1 = ''
  var shooter2 = ''
  var rollTotal = ''

    function rollDiceOne(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    $('#diceOne').html(Math.floor(Math.random() * (max - min + 1)) + min);
  }

    function rollDiceTwo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    $('#diceTwo').html(Math.floor(Math.random() * (max - min + 1)) + min);
  }


  $('#buttonOne').on('click', function () {
    rollDiceOne(1,6)
    rollDiceTwo(1,6);
    // rollDiceTwo(1,6)


    // gameWinner(shooter1)
    // gameWinner(shooter2)
  })

  // $('#buttonTwo').on('click', function () {
  //   rollDiceOne(1,6)
  //   rollDiceTwo(1,6)
  //
  // })


// game winner logic
  function gameWinner(player) {
    for (var i = 0; i < diceOne.length; i++)
      for (var j = 0; j < diceOne.length; j++) {
      if (diceOne === diceTwo) {
        alert(player + " wins!")
    } else if (diceOne + diceTwo === 7) {
        alert(player + " wins!")
    } else if (diceOne + diceTwo === 11) {
        alert(player + " wins!")
    }
    return gameWinner(shooter1)
  }
}
  // tournament winner logic

  function tournWinner() {
    if (shooter2 == 5)
    return (shooter1 + " Wins the Tournament!")
  }






















});
