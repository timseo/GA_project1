$(document).ready(function() {


  var diceOne = [1, 2, 3, 4, 5, 6]
  var diceTwo = [1, 2, 3, 4, 5, 6]
  var shooter1 = ''
  var shooter2 = ''
  var rollTotal = ''

  function rollDice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  $('#buttonOne').on('click', function() {
    $('#diceOne').html(rollDice(1, 6));
    $('#diceTwo').html(rollDice(1, 6));
    var $shooterOneScore = $('#shooterOneScore').eq(0);
    var $diceOne = $('#diceOne').text();
    var $diceTwo = $('#diceTwo').text();
    $shooterOneScore.html(parseInt($diceOne) + parseInt($diceTwo));

    if ($diceOne === $diceTwo) {
      return $('#shooter1').text("Shooter Alpha wins! Please drink, Shooter Bravo");
    } else if ($shooterOneScore.text() == 7) {
      return $('#shooter1').text("Shooter Alpha wins! Please drink, Shooter Bravo");
    } else if ($shooterOneScore.text() == 11) {
      return $('#shooter1').text("Shooter Alpha wins! Please drink, Shooter Bravo");
    }

    // switch turns here?   assign a drink to shooter 2 and then switch turns
  })

  $('#buttonTwo').on('click', function() {
    $('#diceOne').html(rollDice(1, 6));
    $('#diceTwo').html(rollDice(1, 6));
    var $shooterTwoScore = $('#shooterTwoScore').eq(0);
    var $diceOne = $('#diceOne').text();
    var $diceTwo = $('#diceTwo').text();
    $shooterTwoScore.html(parseInt($diceOne) + parseInt($diceTwo));

    if ($diceOne === $diceTwo) {
      return $('#shooter2').text("Shooter Bravo wins! Please drink, Shooter Alpha");
    } else if ($shooterTwoScore.text() == 7) {
      return $('#shooter2').text("Shooter Bravo wins! Please drink, Shooter Alpha");
    } else if ($shooterTwoScore.text() == 11) {
      return $('#shooter2').text("Shooter Bravo wins! Please drink, Shooter Alpha");
    }

    // switch turns here?   assign a drink to shooter 2 and then switch turns

  })
  // rollDiceTwo(1,6)





  // $('#diceOne').text() + $('#diceTwo').text());
  // gameWinner(shooter1)
  // gameWinner(shooter2)




  // game winner logic
  // function gameWinner(player) {
  //   for (var i = 0; i < diceOne.length; i++)
  //     for (var j = 0; j < diceTwo.length; j++) {
  //       if (diceOne === diceTwo) {
  //         alert(player + " wins!")
  //       } else if (diceOne + diceTwo === 7) {
  //         alert(player + " wins!")
  //       } else if (diceOne + diceTwo === 11) {
  //         alert(player + " wins!")
  //       }
  //       return gameWinner(shooter1)
  //     }
  // }
  // tournament winner logic

  function tournWinner() {
    if (shooter2 == 5)
      return (shooter1 + " Wins the Tournament!")
  }









});
