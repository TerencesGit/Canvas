function createCanvas(){
	var canvas = document.createElement('canvas');
	canvas.width = 80;
	canvas.height = 60;
	var cxt = canvas.getContext('2d');
	drawStar(cxt, 30, 30, 30, 0);
	return canvas;
}