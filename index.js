var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;


$(document).keypress(function(){
  if(!started){
    $("h1").text("level" + level);
    nextSequence();
    started = true;
  }

});

$(".btn").click(function () {
var  userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
animatePress(userChosenColor);
checkAnswer(userClickedPattern.length - 1)
});



function nextSequence() {
  level++
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  $("h1").text("level " + level);
}

function playSound(name){
  audio = new Audio("sounds/"+ name +".mp3");
  audio.play();
};

function animatePress(currentColor){
  $("#"+ currentColor).addClass("pressed");
  setTimeout(function () {
    $("#"+ currentColor).removeClass("pressed");
  }, 100);
}

function checkAnswer (currentLevel) {
  if(gamePattern[currentLevel] === userClickedPattern[currentLevel] ){
    console.log("Success");
  }else{console.log("kjsdshfdsf");}

  if (userClickedPattern.length === gamePattern.length){

       //5. Call nextSequence() after a 1000 millisecond delay.
       setTimeout(function () {
         nextSequence();
       }, 1000);



   } else {

     console.log("wrong");

   }


}
