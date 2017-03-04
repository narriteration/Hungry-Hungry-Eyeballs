$(document).ready(function() {

    console.log("My JS is connected! Woohoo!")

    $('.messages').html("Game is ready. Click Z or M key to begin race")

    var board = $('.board');
    var messages = $('.messages');
    var button = $('.btn');

    //attach listeners

    function resetGame() {
        var playerZ = "z"
        var playerM = "m"
        $('td').html(''); // clear board
        console.log("No player spaces are currently active.")
        $('#startZ').html(playerZ); // put z into starting spot
        $('#startM').html(playerM); // put m into starting spot
        $('.messages').html("Game is ready. Click Z or M key to begin race")
    };

    button.on('click', resetGame());
    console.log("Ready to start a new game.")


    function showGameStartMessage() {

        // if (playerOneKeyAssignment == true) || (playerTwoKeyAssignment == true)
        console.log("The game has begun!");
    };
    // Start it up!
});



function beginGame() {
};

function isOver() {
};
