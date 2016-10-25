function createCanvas(){
	var canvas = document.createElement('canvas');
	canvas.widht = 100;
	canvas.height = 100;
	var cxt = canvas.getContext('2d');
	drawStar(cxt, 50, 50, 50, 0);
	return canvas;
}