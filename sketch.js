/****************/
//for trapezuim input x y w and h
/****************/
var x = 100; // input for x
var y =150; // input for y
var w = 150; // input for w
var h = 100; // input for h

// for circle 
var ex = 100; // input for x
var ey = 150; // input for y
var radius = 20; //input for radius
// if i will take radius as 10 then check

function setup() {
	createCanvas(600, 600);
}
function draw() {

 drawTrapezuim(x,y,w,h);
 noFill();
 createEllipse(ex,ey,radius);
}
function lebel(x1,y1,x2,y2,x3,x4){
	if((ex + (radius/2) >= x1 - 5 && ex + radius/2 <= x1 + 5) || (ey + radius/2 >= y1 -5 && ey+radius/2 <= y1+5))
	{
	    text("A",x1+10,y1+15);
 		text("B",x2-15 ,y1 + 15);
 		text("C",x3 - 25,y2 - 8);
		text("D",x4 + 10,y2-8);
	} 
	else if((ex + (radius/2) >= x3 - 5 && ex + radius/2 <= x3 + 5)|| (ey + radius/2 >= y2 -5 && ey+radius/2 <= y2+5)){
		text("A",x1+10,y1+15);
 		text("B",x2-15 ,y1 + 15);
 		text("C",x3 - 25,y2 - 8);
		text("D",x4 + 10,y2-8);
	} else {
		text("A",x1,y1-5);
 		text("B",x2,y1-5);
 		text("C",x3,y2+15);
		text("D",x4,y2+15);
	}		
}
function drawTrapezuim(x1,y1,w,h){

	  var x2 = (x1+w);
	  var y2 = (y1+h);
	  x3 = x2 + 70;
	  x4 = x1 -20;
	   line(x1,y1,x2,y1);
	   line(x2,y1,x3,y2);
	   line(x3,y2,x4 ,y2);
	   line(x4,y2,x1,y1);
	   lebel(x1,y1,x2,y2,x3,x4); 
}
function createEllipse(x1,y1,radius){
	circle(x1,y1,radius);;
}




