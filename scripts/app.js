  $(document).ready(function() {

    console.log("My JS is connected! Woohoo!")

    $('.messages').html("The eyeballs are salivating. Pick a player, find an opponent, and press your key to start flying forward!");
    $('#startZBlue').html(pinkEyeballImage);
    $('#startMRed').html(greenEyeballImage);

    $('button').on('click', function () {
        console.log("The reset button has been clicked!");
        $('td').html(''); // clear board
        console.log("All spaces are cleared.");
        $('.messages').html("The eyeballs are salivating. Pick a player, find an opponent, and press your key to start flying forward!");
        $('#startZBlue').html(pinkEyeballImage);
        $('#startMRed').html(greenEyeballImage);
        $('.end').html(pizza);
    });


    $('body').keydown(function (el) {
        el.preventDefault();
        if (el.which === 90) {
            $('#blueDot').parent().next().html(pinkEyeballImage);
            $('#blueDot').parent().html('');
            console.log('changed blue dot position');
        };
        if (el.which === 77) {
            $('#greenEyeball').parent().next().html(greenEyeballImage);
            $('#greenEyeball').parent().html('');
            console.log('changed red dot position');
        }
        evaluateIfWinner();
    });



}); //end of document ready function

var $board = $('.board');
var $messages = $('.messages');
var $button = $('.btn');
var pinkEyeballImage = '<img src="assets/flying_pink_eyeball.gif" alt="cute, animated, purple, pixelated eyeball" height = "30" width = "auto" id="pinkEyeball">';
var greenEyeballImage = '<img src="assets/green_pixel_eyeball.gif" alt="a cute, morphing, animated, green, pixelated eyeball" height = "30" width = "auto" id="greenEyeball">';
var pizza = '<img src="assets/pizza_gif.gif" alt="pixelated, animated pizza is dripping cheese" align="center" height="30" width="auto"'
var redWinsMessage = 'Red wins!';
var blueWinsMessage = 'Blue wins!';


///////////////////// FUNCTIONS  ////////////////////////

    function evaluateIfWinner(el) {
        if ($('#blueDot').parent().html() === '<img src="assets/flying_pink_eyeball.gif" alt="cute, animated, purple, pixelated eyeball" height = "30" width = "auto" id="blueDot">') {
          console.log("game over! winner is Player Z!");
        } else if ($('#greenEyeball').parent() === $('.end')){
          console.log("game over! winner is Player M!");
        } else {
          console.log("keep clicking. game still in play!");
        }
      };
