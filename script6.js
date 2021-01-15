function Figure (x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
};
function Canvas (){
    this.innerCanvas = document.getElementById('canvasID');

    this.add = function(figure){
        figure.draw(this);
        
    }
    // let canvas = document.getElementById('canvasID');
    // let ctx = canvas.getContext('2d');
    
}
function Line(x1, y1 ,x2, y2, color){
    Figure.call(this, x1, y1, color);
    this.x2 = x2;
    this.y2 = y2;
    this.draw = function(innerCanvas){
        
        
            let ctx = innerCanvas.getContext('2d');
            ctx.lineWidth = 10;
            ctx.fillStyle = this.color;
        
    };
};
function Circle(x, y, r, color){
    Figure.call(this, x, y, color);
    this.r = r;
    this.draw = function(innerCanvas){
        
        
            let ctx = innerCanvas.getContext('2d');
            ctx.lineWidth = 10;
            ctx.fillStyle = this.color;
            
    };
};
function Rect(x, y, w, h, color){
    Figure.call(this, x, y, color);
    this.w = w;
    this.h = h;
    this.draw = function(innerCanvas){
        
        
            let ctx = innerCanvas.getContext('2d');
            ctx.lineWidth = 10;
            ctx.fillStyle = this.color;
            ctx.beginPath();
    
    };
};

let line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
let circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
let rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color


let drawArea = new Canvas('canvasID');
drawArea.add(line);
drawArea.add(circle, rect);
