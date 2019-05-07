

class Matrix { // generatea couple random types of matrices in the future to minimize computation and also create better matrice class with better data structure like hashmap
    
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.mat = this.createMatrix();
    }
    
    // Generates a matrix of 1's and 0's randomly of NxN with arrays 
    createMatrix() { //returns a array of arrays
        var dots = new Array(this.col); 
        for (var r = 0; r < this.row; r++) {
            var dots_r = new Array(this.row);
            for (var c = 0; c < this.col; c++) {
                dots_r[c] = (Math.random() > 0.50 ? 1 : 0);
            }
            dots[r] = dots_r;
        }
        return dots;
    }
    
}

//Draw/Update/Create a Cylon Character
class Cylon_Char {
    // Coordinates
    
    constructor() {
       // console.log("hello world");
        this.x = window.innerWidth * Math.random();
        this.y = window.innerHeight * Math.random();
        this.velocity = 3 * Math.random() + 2;
        this.char_size = 8;
        this.dot_diam = 5;
        this.padding = 2;
        this.m = new Matrix(this.char_size, this.char_size);
        this.coords = this.createCoordSystem();
    }
    
    // Generates a starting point coordinate system for the cylon char and return and array of coordinates
    createCoordSystem() {
        var coordsys = new Array(Math.pow(this.char_size, 2));
        var count = 0;
        for (var y_axis = 0; y_axis < this.char_size; y_axis++) {
            var y_c = y_axis * (this.dot_diam + this.padding) + this.y;
            for (var x_axis = 0; x_axis < this.char_size; x_axis++) { // x-axis * (this.dot_diam + this.padding) + this.x 0 -> 0, 1 -> 15, 2 -> 30
                var x_c = x_axis * (this.dot_diam + this.padding) + this.x; 
                if (count < Math.pow(this.char_size, 2)) {
                    coordsys[count] = [x_c, y_c];
                    count++;
                }
            }
        }
        return coordsys;
    }
    
    // Resets the coordinate system so that it starts slightly above the top of the canvas
    reset() {
        this.y = 0;
        for (var index = 0; index < this.coords.length; index++) {
             this.coords[index][1] = this.coords[index][1] - window.innerHeight - this.char_size*(this.dot_diam + this.padding);
        }
    }
    
    // Updates the coordinate system by a translation as long as the cylon char has not complete left the screen
    // otherwise it resets the screen
    update() { //TODO Error with a dot that does not update properly and does not move in some cases
        for (var index = 0; index < this.coords.length; index++) {
            if (this.coords[0][1] < window.innerHeight) {
                this.coords[index][1] = this.coords[index][1] + this.velocity;
            } else {
                this.reset();
            }
            this.x = this.coords[0][0];
            this.y = this.coords[0][1];
        }
    }
    

    // Draws the dots on the canvas
    draw() {
        for (var index = 0; index < this.coords.length; index++) {
            let c = color(255, 204, 0); // Define color 'c'
            fill(c); // Use color variable 'c' as fill color
            noStroke();
            if (this.m.mat[Math.floor(index/this.char_size)][index%this.char_size] == 1) {
                circle(this.coords[index][0], this.coords[index][1], this.dot_diam);
            }
        }
        this.update();
        
    }
}

var dataStream = new Array();
var amount = 1;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    for (var count = 0; count < amount; count++) {
        var c = new Cylon_Char()
        dataStream.push(c);
    }
    
}




function draw() {
    background(0);
    //var r = new Array(1);
    for (var index = 0; index < dataStream.length; index++) {
        dataStream[index].draw();
    }
    
    //r.push(c);
    
}
