$(document).ready(function(){

  console.log("hello world");

  $(".optionButton").mouseenter(function(){
    $(this).css("background-color", "white");
    $(this).find("a").css("color", "black");
    console.log("in");
  });
  $(".optionButton").mouseleave(function(){
    $(this).css("background-color", "black");
    $(this).find("a").css("color", "white");
    console.log("out");
  });

});
