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
      return $('#messageBox').text("WINNER!  please drink Bravo    KEEP ROLLING Alpha!");
      // $('#shooter1').fadeOut('fast');
    } else if ($shooterOneScore.text() == 7) {
      return $('#messageBox').text("WINNER!  please drink Bravo    KEEP ROLLING Alpha!");
    } else if ($shooterOneScore.text() == 11) {
      return $('#messageBox').text("WINNER!  please drink Bravo    KEEP ROLLING Alpha!");
    } else {
      alert("Alpha loses. your turn Bravo.  Shoot em!");
      return $('#messageBox').text('');
    }

    //switch function
  })

  $('#buttonTwo').on('click', function() {
    $('#diceOne').html(rollDice(1, 6));
    $('#diceTwo').html(rollDice(1, 6));
          var $shooterTwoScore = $('#shooterOneScore').eq(0);
    var $diceOne = $('#diceOne').text();
    var $diceTwo = $('#diceTwo').text();
    $shooterTwoScore.html(parseInt($diceOne) + parseInt($diceTwo));

    if ($diceOne === $diceTwo) {
      return $('#messageBox').text("WINNER!  please drink Alpha    KEEP ROLLING BRAVO!");
    } else if ($shooterTwoScore.text() == 7) {
      return $('#messageBox').text("WINNER!  please drink Alpha    KEEP ROLLING BRAVO!");
    } else if ($shooterTwoScore.text() == 11) {
      return $('#messageBox').text("WINNER!  please drink Alpha    KEEP ROLLING BRAVO!");
    } else {
      alert("Bravo Loses. your turn Alpha.  Shoot em!");
      return $('#messageBox').text('');
    }

    //switch function here

  })
  // rollDiceTwo(1,6)





  // $('#diceOne').text() + $('#diceTwo').text());
  // gameWinner(shooter1)
  // gameWinner(shooter2)



  // tournament winner logic

  function tournWinner() {
    if (shooter2 == 5)
      return (shooter1 + " Wins the Tournament!")
  }









});
