$(document).ready(function(){

  function hideAll() {
    $(".angry2").hide();
    $(".angry3").hide();
    $(".angry4").hide();
    $(".angry5").hide();
    $(".final").hide();
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
    //angry4b is showing cute stuff which isn't made yet, need to write that code 

}//closes switch statement

}); //closes clicking statement


}); //closing document ready function, nothing goes after this
