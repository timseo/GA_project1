$(document).ready(function() {


  var diceOne = [1, 2, 3, 4, 5, 6]
  var diceTwo = [1, 2, 3, 4, 5, 6]
  $alphaScore = $('#playerOneWins');
  $bravoScore = $('#playerTwoWins');
  ascore = 1;
  bscore = 1;

  // var matchOriginal = $("#match").clone();
  // var playerOneWinsOriginal = $("#playerOneWins").clone();
  // var playerTwoWinsOriginal = $("#playerTwoWins").clone();




  function rollDice(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  $('#buttonOne').on('click', function() {
    $('#diceOne').html(rollDice(1, 6));
    $('#diceTwo').html(rollDice(1, 6));
    var $shooterOneScore = $('#diceTotal').eq(0);
    var $diceOne = $('#diceOne').text();
    var $diceTwo = $('#diceTwo').text();
    $shooterOneScore.html(parseInt($diceOne) + parseInt($diceTwo));
    gameWinner();

    if ($diceOne === $diceTwo) {
      return $('#messageBox').html("WINNER! <br>  <h3>Bravo DRINK! <br>   KEEP ROLLING Alpha!</h3>"),
        $('#playerTwoWins').html(ascore++);
    } else if ($shooterOneScore.text() == 7) {
      return $('#messageBox').html("WINNER! <br>  <h3>Bravo DRINK! <br>   KEEP ROLLING Alpha!</h3>"),
        $('#playerTwoWins').html(ascore++);
    } else if ($shooterOneScore.text() == 11) {
      return $('#messageBox').html("WINNER! <br>  <h3>Bravo DRINK! <br>   KEEP ROLLING Alpha!</h3>"),
        $('#playerTwoWins').html(ascore++);
    } else {
      $('#buttonOne').css('visibility', 'hidden')
      $('#buttonTwo').css('visibility', 'visible')
      return $('#messageBox').html("Alpha loses <br> <h3>your turn Bravo  Shoot em!</h3>");
    }

  })

  $('#buttonTwo').on('click', function() {
    $('#diceOne').html(rollDice(1, 6));
    $('#diceTwo').html(rollDice(1, 6));
    var $shooterTwoScore = $('#diceTotal').eq(0);
    var $diceOne = $('#diceOne').text();
    var $diceTwo = $('#diceTwo').text();
    $shooterTwoScore.html(parseInt($diceOne) + parseInt($diceTwo));
    gameWinner();

    if ($diceOne === $diceTwo) {
      return $('#messageBox').html("WINNER! <br> <h3>Alpha DRINK! <br>    KEEP ROLLING BRAVO!</h3>"),
        $('#playerOneWins').html(bscore++);
    } else if ($shooterTwoScore.text() == 7) {
      return $('#messageBox').html("WINNER! <br> <h3>Alpha DRINK! <br>    KEEP ROLLING BRAVO!</h3>"),
        $('#playerOneWins').html(bscore++);
    } else if ($shooterTwoScore.text() == 11) {
      return $('#messageBox').html("WINNER!  <br> <h3>Alpha DRINK! <br>    KEEP ROLLING BRAVO!</h3>"),
        $('#playerOneWins').html(bscore++);
    } else {
      $('#buttonTwo').css('visibility', 'hidden')
      $('#buttonOne').css('visibility', 'visible')
      return $('#messageBox').html("Bravo Loses <br> <h3>your turn Alpha  Shoot em!</h3>");
    }
  })


    function gameWinner() {
      if (bscore === 5) {
      $('#match').text("Bravo wins while Alpha blacks out!");
      setTimeout(playAgain, 1000)
      // $('#match').append($'<button {id="restartButton"}>Play Again?</button>');

    } else if (ascore === 5) {
      $('#match').text("Alpha wins while Bravo blacks out!");
      setTimeout(playAgain, 1000)
      // $('#match').append($'<button {id="restartButton"}>Play Again?</button>');
    }

}

    function playAgain() {
      $("#match").text('Tournament rules:  1st shooter to parse out 5 drinks WINS!');
      $("#match").append('<br> <br> <div id="playerOneWins">0</div> <span id="tournamentColon">:</span> <div id="playerTwoWins">0</div>');
      $('#buttonOne').css('visibility', 'visible');
      $('#buttonTwo').css('visibility', 'visible')
      ascore = 1;
      bscore = 1;
    }







});
