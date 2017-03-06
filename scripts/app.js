  $(document).ready(function() {

    console.log("My JS is connected! Woohoo!")

    $('.messages').html("Game is ready. Click Z or M key to begin race");
    $('#startZBlue').html(blueImage); // point to #startZBlue and insert the html for blueImage
    $('#startMRed').html(redImage); // point to #startMRed and insert the html for redImage

    $('button').on('click', function () {                       // when button is clicked, run callback function
        console.log("The reset button has been clicked!");
        $('td').html(''); // clear board
        console.log("All spaces are cleared.");
        $('.messages').html("Game is ready. Grab an opponent and click Z or M key to begin racing.");
        $('#startZBlue').html(blueImage);       // insert blueImage into html of start space
        $('#startMRed').html(redImage);         // insert redImage into html of start space
    });


    $('body').keydown(function (el) {                         // action to happen when specific two keys pressed
        el.preventDefault();
        if (el.which === 90) {                               // z key
            $('#blueDot').parent().next().html(blueImage);
            $('#blueDot').parent().html('');
            console.log('changed blue dot position');
        };
        if (el.which === 77) {                               // m key
            $('#redDot').parent().next().html(redImage);
            $('#redDot').parent().html('');
            console.log('changed red dot position');
        }
        evaluateIfWinner();
    });

///////////////////// FUNCTIONS BELOW ////////////////////////

    function evaluateIfWinner(el) {
        if ($('#blueDot').parent() === $('.end')) {
          console.log("game over! winner is Player Z!");
        } else if ($('#redDot').parent() === $('.end')){
          console.log("game over! winner is Player M!");
        } else {
          console.log("keep clicking. game still in play!");
        }
      };

// Jesse's suggestion
// function revealWinner() {
//   var winnerIs = ""
//   if($('#blueDot').parent().hasClass('.end')) {
//     winnerIs = "Blue"
//     console.log("jesses solution with my stuff worked!");
//     return winnerIs;
//
//   }
//   console.log("no winner yet");
// }

//      ALTERNATIVE evaluateIfWinner functions:

      // function gameIsOver() {
      //     var winnerPlayer = "";
      //     if ($('.end').html() === blueImage) {
      //         winnerPlayer = "Blue / Player Z";
      //         $('.messages').html("blue wins!");
      //         alert("stop the game!");
      //     } else if ($('.end').html() === redImage) {
      //         winnerPlayer = "Red / Player M";
      //         $('.messages').html("red wins!");
      //         alert("stop the game!");
      //     }
      // return winnerPlayer;
      // };
      //
      // gameIsOver();

      /////////



}); // <=====KEEP THIS. Is end of document ready function

var $board = $('.board');
var $messages = $('.messages');
var $button = $('.btn');
var blueImage = '<img src="assets/flying_pink_eyeball.gif" alt="cute, animated, purple, pixelated eyeball" height = "30" width = "auto" id="blueDot">';
var redImage = '<img src="assets/green_pixel_eyeball.gif" alt="a cute, morphing, animated, green, pixelated eyeball" height = "30" width = "auto" id="redDot">';
var redWinsMessage = 'Red wins!';
var blueWinsMessage = 'Blue wins!';


// if (   ($('#endZBlue').html()) === blueImage || ($('#endMRed').html()) === redImage  ) {
//     console.log("Stop the game, you've won!");
//     alert("Someone wins!")



// function movePlayerZ() {
//   if the start box of PlayerZ is !empty,
//   then listen for a keypress of z
//   if keypress z, then moveRight
//
// }
//
// function moveRight() {
//   if (hasWon === false) then
//   for
//   clear current box
//   find next sibling box
//   set html to "z" of that box
// }

// function beginGame() {
// };
//
// function isOver() {
// };
