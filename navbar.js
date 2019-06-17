//Navigation Bar JS not using pj5
var nav = document.getElementById("cylon-eye");

$(document).ready(function() { //To animate make sure to define position type
    var tab = $("li");
    var eye = $("#guide")
    var speed_highlight = 100;
    var speed_hover = 350;
    var initial_offset = $("li.active").offset();
    eye.animate({top: initial_offset.top}, 0);
    
    
    //When we hover over create border bottom
    tab.hover(function() {
        $(this).animate({borderBottomColor: "#fe0606", borderBottomStyle: "solid", borderBottomWidth: "5px"}, speed_highlight);
    }, function() {
        $(this).animate({borderBottomWidth: "0px"}, speed_highlight);
    });
    
    //When we hover over record pos in y direction and have the guide travel to that y-pos
    tab.mouseenter(function(){
        //First thing is to grab the position of the mouse but in particular the position of the box
        var offset = $(this).offset();
        eye.stop(true, false);//stopped bad queuing
        eye.animate({top: offset.top}, speed_hover);
    });
    
    tab.mouseleave(function(){
        var offset = $("li.active").offset();
        eye.stop(true, false);//stopped bad queueing
        eye.animate({top: offset.top}, speed_hover);
    });
    
});