
var radius = 8;
var margin_top = 60;
var margin_left = 30;
window.onload = function(){
	var canvas = document.getElementById('canvas');
	canvas.width = 1100;
	canvas.height = 500;
	var context =  canvas.getContext('2d');
	render(context)
}
function render(cxt){
	var hours = 12,
			minutes = 34,
			seconds = 56;
	renderDigit(margin_left, margin_top,parseInt(hours/10),cxt)
	renderDigit(margin_left+15*(radius+1), margin_top,parseInt(hours%10),cxt)
	renderDigit(margin_left+30*(radius+1), margin_top,10,cxt)
	renderDigit(margin_left+39*(radius+1), margin_top,parseInt(minutes/10),cxt)
	renderDigit(margin_left+54*(radius+1), margin_top,parseInt(minutes%10),cxt)
	renderDigit(margin_left+69*(radius+1), margin_top,10,cxt)
	renderDigit(margin_left+78*(radius+1), margin_top,parseInt(seconds/10),cxt)
	renderDigit(margin_left+93*(radius+1), margin_top,parseInt(seconds%10),cxt)
}
function renderDigit(x, y, num, cxt){
	cxt.fillStyle = 'rgb(0,102,153)';
	for(var i = 0; i<digit[num].length;i++){
		for(var j =0; j<digit[num][i].length;j++){
			if(digit[num][i][j] == 1){
				cxt.beginPath();
				cxt.arc(x+j*2*(radius+1)+(radius+1),y+i*2*(radius+1)+(radius+1),radius,0,2*Math.PI);
				cxt.closePath();
				cxt.fill()
			}
		}
	}
}