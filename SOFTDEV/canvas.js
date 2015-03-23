var c = document.getElementById("c");
var b = document.getElementById("b");

var ctx = c.getContext("2d")

var makeBlock = function(x, y, w, y, ctx){
    return {
        x: x,
        y: y,
	w: w,
	h: h,
	ctx: ctx,
	dx: 1,
	color: "#ff0000",
	draw: function(){
	    ctx.fillStyle = this.color;
	    ctx.fillRect(this.x, this.y, this.w, this.h);
	},
	move: function(){
	    this.x = this.x + this.dx;
	    this.y = this.y + 2*Math.random() -1;
	    if (this.x < 20 || this.x > 580){
		this.dx = this.dx* -1;
	    }
	    if (this.y < 20 || this.y > 580){
		this.y = 100+ 400*Math.random();
	    }
	},
    };


var update = function(){
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 600, 600);
    for (var i = 0; i < blocks.length; i++){
	blocks[i].move();
	blocks[i].draw();
    }
    //keeps animations all together; cleaner than setInterval, etc.
    window.requestAnimationFrame(update);
}

var blocks = [];
blocks.push(makeBlock(50, 100, 30, 15, ctx));
window.requestAnimationFrame(update);
