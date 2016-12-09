$(document).ready(function(){

  function hideAll() {
    $(".angry2").hide();
    $(".angry3").hide();
    $(".angry4").hide();
    $(".angry5").hide();
    $(".final").hide();
    $(".sad2").hide();
    $(".sad3").hide();
    $(".sad4").hide();
    $(".cute").hide();
    $(".stress3").hide();
    $(".stress4").hide();
    $(".stress5").hide();
    $(".stress6").hide();
    $(".stress7").hide();
  }
  hideAll(); //hides literally everythign except the intro

function hideIntro() {
    $(".intro").hide();
  }

$("button").click(function(){ //when a button is clicked

hideAll(); //hides everything
hideIntro(); //hides intro

switch ($(this).attr("id")) {
  case "angry1a":
    $(".angry2").show();
    break;
  case "angry2a":
    $(".angry3").show();
    break;
  case "angry3a":
  $(".angry5").show();
    break;
  case "angry3b":
    $(".angry4").show();
    break;
  case "angry5a":
    $(".final").show();
    break;
  case "angry5b":
    $(".angry4").show();
    break;
  case "angry4a":
    $(".final").show();
    break;
  case "angry4b":
    $(".cute").show();
    break;
  case "angry4c":
    $(".stress7").show();
    break;
  case "sad1a":
    $(".sad2").show();
    break;
  case "sad2a":
    $(".sad3").show();
    break;
  case "sad3a":
    $(".sad4").show();
    break;
  case "sad4a":
    $(".angry4").show();
    break;
  case "sad4b":
    $(".cute").show();
    break;
  case "cute1a":
    $(".angry4").show();
    break;
  case "cute1b":
    $(".final").show();
    break;
  case "stress1a":
    $(".stress3").show();
    break;
  case "stress3a":
    $(".stress4").show();
    break;
case "stress3b":
    $(".stress5").show();
    break;
case "stress4a":
    $(".stress5").show();
    break;
case "stress5a":
    $(".stress6").show();
    break;
case "stress6a":
    $(".stress7").show();
    break;
case "stress6b":
    $(".cute").show();
    break;
case "stress7a":
    $(".final").show();
    break;
    //angry4b is showing cute stuff which isn't made yet, need to write that code

}//closes switch statement

}); //closes clicking statement


}); //closing document ready function, nothing goes after this
