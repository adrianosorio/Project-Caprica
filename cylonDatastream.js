Class Matrix { // generatea couple random types of matrices in the future to minimize computation and also create better matrice class with better data structure like hashmap
    Constructor(col, row) {
        this.col = col;
        this.row = row;
        this.mat = createMatrix();
    }
    
    createMatrix() { //returns a array of arrays
        var dots = new Array(this.col); 
        for (int r = 0; r < this.row; r++) {
            var dots_r = new Array(this.row);
            for (int c = 0; c < this.col; c++) {
                dots_r[c] = (Math.random() > 0.50 ? 1 : 0);
            }
            dots[r] = dots_r;
        }
        return dots;
    }
    
}

//Draw/Update/Create a Cylon Character
Class Cylon_Char {
    // Coordinates
    var x;
    var y;
    var char_size = 16;
    var m = new Matrix(char_size, char_size);
    
    Constructor() {
        console.log("hello world");
    }
}