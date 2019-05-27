//Navigation Bar JS not using pj5
var nav = document.getElementById("cylon-eye");

$(document).ready(function() { //To animate make sure to define position type
    var tab = $("li");
    var eye = $("#guide")
    var speed = 100;
    //When we hover over create border bottom
    tab.hover(function() {
        $(this).animate({borderBottomColor: "#fe0606", borderBottomStyle: "solid", borderBottomWidth: "5px"}, speed);
    }, function() {
        $(this).animate({borderBottomWidth: "0px"}, speed);
    });
    
    //When we hover over record pos in y direction and have the guide travel to that y-pos
    tab.mouseenter(function(){
        //find coordinate
        var width_percent = 0.3; //From css-mainn file guide height
        var shift_y = window.innerHeight * width_percent;
        var pos_y = $(this).position().top;
        var sum = pos_y + shift_y;
        sum = sum+"px";
        console.log("test " + sum);
        $("#guide").animate({top: "164px"}, "slow"); 
    });
    
    /*
$(this).mouseenter(function() {
            var pos = $(this).position().top;
            console.log(pos);
      */      //$("#guide").animate({position: pos}, "slow"); 
    // What are we hovering over and what is its position
    
});

/*
    mouseenter(function(){
        //find coordinate
        var width_percent = 0.3; //From css-mainn file guide height
        var shift_y = window.innerHeight * width_percent;
        var pos_y = $(this).position().top;
        var sum = pos_y + shift_y;
        console.log("test " + sum);
        $("#guide").animate({top: sum}, "slow"); 
    });
*/
