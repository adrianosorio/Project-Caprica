//var context = "2d";
//var canvas = document.getElementById("datastream");
//canvas.width = window.innerWidth;
//canvas.height = window.innerHeight;
//var ctx = canvas.getContext(context, false);

// ARC takes a (x,y) value for the coords ((0,0) is the left most), radius value is taken, then a start and end angle in radians (math.PI), draw counterclockwise (true or false which direction to draw in )
//c.beginPath
//c.arc()
//
//
////create a class that generates the dots
class Cylonchar {
    
    constructor(width, height) {
        self.width = width;
        self.height = height;
    }
    
    function drawCharacter() {
        circle(50,50,20);
        
    }
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    var m = new Cylonchar(16,16);
    m.drawCharacter();
    background(153);
}