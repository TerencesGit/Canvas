var canvasWidth = 1100,
		canvasHeight = 500;
var radius = 8;
var margin_top = 60;
var margin_left = 30;
const endTime = new Date(2016,9,24,20,00,00);
var curShowTimeSeconds = 0;
var balls = [];
var colors = ['#06f','#09c','#a6c','#93c','#690','#f80','#f44','#c00','#0c0','#3c3']
window.onload = function(){
	canvasWidth = document.body.clientWidth;
	canvasHeight = document.body.clientHeight-50;
	margin_left = Math.round(canvasWidth/10);
	margin_top = Math.round(canvasHeight/10)
	radius = Math.round(canvasWidth*4/5 /108)-1;
	var canvas = document.getElementById('canvas');
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
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
		if(parseInt(curHours/10) != parseInt(nextHours/10)){
			addBalls(margin_left, margin_top, parseInt(nextHours/10))
		}
		if(parseInt(curHours%10) != parseInt(nextHours%10)){
			addBalls(margin_left + 15*(radius+1),margin_top, parseInt(nextHours%10))
		}
		if(parseInt(curMinutes/10) != parseInt(nextMinutes/10)){
			addBalls(margin_left + 39*(radius+1),margin_top, parseInt(nextMinutes/10))
		}
		if(parseInt(curMinutes%10) != parseInt(nextMinutes%10)){
			addBalls(margin_left + 54*(radius+1),margin_top, parseInt(nextMinutes%10))
		}
		if(parseInt(curSeconds/10) != parseInt(nextSeconds/10)){
			addBalls(margin_left + 78*(radius+1),margin_top, parseInt(nextSeconds/10))
		}
		if(parseInt(curSeconds%10) != parseInt(nextSeconds%10)){
			addBalls(margin_left + 93*(radius+1),margin_top, parseInt(nextSeconds%10))
		}
		curShowTimeSeconds = nextShowTimeSeconds;
	}
	updateBalls()
}
function updateBalls(){
	for(var i =0;i<balls.length;i++){
		balls[i].x += balls[i].vx;
		balls[i].y += balls[i].vy;
		balls[i].vy += balls[i].g;
		if(balls[i].y >= canvasHeight - radius){
			balls[i].y = canvasHeight - radius;
			balls[i].vy = - balls[i].vy*0.7;
		}
	}
}
function addBalls(x,y,num){
	for(var i = 0; i < digit[num].length; i++){
		for(var j = 0; j < digit[num][i].length; j++){
			if(digit[num][i][j] == 1){
				var aBall = {
					x: x+j*2*(radius+1)+(radius+1),
					y: y+i*2*(radius+1)+(radius+1),
					g: 1.5+Math.random(),
					vx: Math.pow(-1,Math.ceil(Math.random()*1000))*4,
					vy: -5,
					color: colors[Math.floor(Math.random()*colors.length)]
				}
				balls.push(aBall)
			}
		}
	}
}
function render(cxt){
	cxt.clearRect(0,0,canvasWidth,canvasHeight)
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
	for(var i = 0;i<balls.length;i++){
		cxt.fillStyle = balls[i].color;
		cxt.beginPath()
		cxt.arc(balls[i].x, balls[i].y,radius,0,2*Math.PI,true)
		cxt.closePath()
		cxt.fill()
	}
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