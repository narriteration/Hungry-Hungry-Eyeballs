$(document).ready(function() {

    console.log("My JS is connected! Woohoo!")

    $('.messages').html("Game is ready. Click Z or M key to begin race");

    var $board = $('.board');
    var $messages = $('.messages');
    var $button = $('.btn');
    var blueImage = '<img src="assets/blueDot.png" alt="a blue dot" height = "20" width = "20" id="blueDot">'
    var redImage = '<img src="assets/redDot.png" alt="a red dot" height = "20" width = "20" id="redDot">'

    $('#startZBlue').html(blueImage); // point to #startZBlue and insert the html for blueImage is
    $('#startMRed').html(redImage); // point to #startMRed

    $('body').keydown(function(el){   // action to happen when specific two keys pressed
        el.preventDefault();
        console.log('You pressed a key!');
        if (el.which === 90) {
        moveImageRight();
        }
        if (el.which === 77) {
        moveImageRight();
        }
    });

    //$( "li.item-a" ).parent().css( "background-color", "red" );
    function moveImageRight() {
        var parent = $('#blueDot').parent();
        console.log(parent);
    }


}); // KEEP. = end of document ready function





// m	77
// z  90


// function resetGame() {
//     $('td').html(''); // clear board
//     console.log("All spaces are cleared.");
//     $('.messages').html("Game is ready. Grab an opponent and click Z or M key to begin racing.")
// };

//     button.on('click', resetGame())


    // function showGameStartMessage() {
    //     // if (playerOneKeyAssignment == true) || (playerTwoKeyAssignment == true)
    //     console.log("The game has begun!");
    // };
    // Start it up!

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
