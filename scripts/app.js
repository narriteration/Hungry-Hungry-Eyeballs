$(document).ready(function() {

    console.log("My JS is connected! Woohoo!")

    $('.messages').html("Game is ready. Click Z or M key to begin race");

    var $board = $('.board');
    var $messages = $('.messages');
    var $button = $('.btn');
    var blueImage = '<img src="assets/blueDot.png" alt="a blue dot" height = "20" width = "20" id="blueDot">'
    var redImage = '<img src="assets/redDot.png" alt="a red dot" height = "20" width = "20" id="redDot">'

    $('#startZBlue').html(blueImage); // point to #startZBlue and insert the html for blueImage
    $('#startMRed').html(redImage); // point to #startMRed and insert the html for redImage

    $('body').keydown(function(el){   // action to happen when specific two keys pressed
        el.preventDefault();
        console.log('You pressed a key!');
        if (el.which === 90) {              // z key
        // $('#blueDot').parent().next().css( "background-color", "blue" );
        $('#blueDot').parent().next().html(blueImage);
        $('#blueDot').parent().html('');
        }
        if (el.which === 77) {              // m key
        $('#redDot').parent().next().html(redImage);
        $('#redDot').parent().html('');
        }
    });

    $('button').on('click', function () {
        console.log("The reset button has been clicked!");
        $('td').html(''); // clear board
        console.log("All spaces are cleared.");
        $('.messages').html("Game is ready. Grab an opponent and click Z or M key to begin racing.");
        $('#startZBlue').html(blueImage);
        $('#startMRed').html(redImage);
    });

}); // KEEP. = end of document ready function




//     button.on('click', resetGame())



// EVERYTHING BELOW = FUNCTIONS

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
