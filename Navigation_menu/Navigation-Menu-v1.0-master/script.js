/**
*  @project   Navigation Menu v1.0
*  @author:   Jamshid Elmi
*  @created   2022-04-06 05:08:49
*  @modified  2022-04-06 05:08:49
*  @tutorial  https://youtu.be/HB_3PolUWNU
*/

function align(active) {
  var index = active.index() + 1;

  // add active class
  $(".list-wrap li").removeClass("active");
  active.delay(100).queue(function() {
    active.addClass("active").dequeue();
  });

  // move the wave
  var left = index * 80 - 98;
  $(".wave").css("left", left);

  //set colors
  var color = active.css("--color");
  $(".phone").css("background", color);

  // set the text
  $(".page").text(active.attr("title"));
}

// move the wave on click 
$(".list-wrap li").click(function () {
  align($(this));
}); 

// set the middle item as active 
var active = $(".list-wrap li").eq(2);
align(active);