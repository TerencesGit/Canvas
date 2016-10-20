var WINDOW_WIDTH = window.screen.width,
    WINDOW_HEIGHT = window.screen.height;
var radius = 8;
var margin_top = 60;
var margin_left = 30;
const endTime = new Date(2016,9,22,24,00,00);
var curShowTimeSeconds = 0;
window.onload = function(){
	var canvas = document.getElementById('canvas');
	canvas.width = 1100;
	canvas.height = 500;
	curShowTimeSeconds = getCurrentShowTimeSeconds();
	var context =  canvas.getContext('2d');
	setInterval(function(){
			render(context)
			update()
	},50)
}
function getCurrentShowTimeSeconds(){
	var curTime = new Date();
	var ret = endTime.getTime() - curTime.getTime();
	ret = Math.round(ret/1000);
	return ret >= 0 ? ret : 0;
}
function update(){
	var nextShowTimeSeconds = getCurrentShowTimeSeconds();
	var nextHours = parseInt(nextShowTimeSeconds / 3600),
			nextMinutes = parseInt((nextShowTimeSeconds - nextHours*3600)/60),
			nextSeconds = nextShowTimeSeconds % 60;
	var curHours = parseInt(curShowTimeSeconds / 3600),
			curMinutes = parseInt((curShowTimeSeconds - curHours*3600)/60),
			curSeconds = curShowTimeSeconds % 60;
	if(nextSeconds != curSeconds){
		curShowTimeSeconds = nextShowTimeSeconds;
	}
}
function render(cxt){
	cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT)
	var hours = parseInt(curShowTimeSeconds / 3600),
			minutes = parseInt((curShowTimeSeconds - hours*3600)/60),
			seconds = curShowTimeSeconds % 60;
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