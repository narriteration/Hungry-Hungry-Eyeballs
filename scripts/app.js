  $(document).ready(function() {

    $('.messages').html("The eyeballs are salivating. Pick a player, find an opponent, and press your key to start flying forward!");
    $('#startZPink').html(pinkEyeballImage);
    $('#startMGreen').html(greenEyeballImage);

    $('button').on('click', function () {
        $('td').html('');
        $('.messages').html("The eyeballs are salivating. Pick a player, find an opponent, and press your key to start flying forward!");
        $('#startZPink').html(pinkEyeballImage);
        $('#startMGreen').html(greenEyeballImage);
        $('.end').html(pizza);
    });

    $('body').keydown(function (el) {
        el.preventDefault();
        if (el.which === 90) {
            $('#pinkEyeball').parent().next().html(pinkEyeballImage);
            $('#pinkEyeball').parent().html('');
        };
        if (el.which === 77) {
            $('#greenEyeball').parent().next().html(greenEyeballImage);
            $('#greenEyeball').parent().html('');
        }
        evaluateIfWinner(); //broken
    });
});

///////////////////// VARIABLES /////////////////////////
var $board = $('.board');
var $messages = $('.messages');
var $button = $('.btn');
var pinkEyeballImage = '<img src="assets/flying_pink_eyeball.gif" alt="cute, animated, purple, pixelated eyeball" height = "30" width = "auto" id="pinkEyeball">';
var greenEyeballImage = '<img src="assets/green_pixel_eyeball.gif" alt="a cute, morphing, animated, green, pixelated eyeball" height = "30" width = "auto" id="greenEyeball">';
var pizza = '<img src="assets/pizza_gif.gif" alt="pixelated, animated pizza is dripping cheese" align="center" height="30" width="auto">'
var greenEyeballWinsMessage = 'Green jiggly eyeball wins!';
var pinkEyeballWInsMessage = 'Pink winged eyeball wins!';

///////////////////// FUNCTIONS  (broken)  ////////////////////////

function evaluateIfWinner(el) {
    if ($('#pinkEyeball').parent().html() === '<img src="assets/flying_pink_eyeball.gif" alt="cute, animated, purple, pixelated eyeball" height = "30" width = "auto" id="pinkEyeball">') {
      console.log("Game over! Winner is Winged Eyeball!");
    } else if ($('#greenEyeball').parent() === $('.end')){
      console.log("Game over! Winner is Jiggly Eyeball!");
    } else {
      console.log("Keep clicking. Game still in play!");
      $('.messages').html('<b>Keep going! The pizza\'s getting cold...<b>');
    }
  };
