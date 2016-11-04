    // 线条圆角矩形
		function strokeRoundReact(cxt, x, y, width, height,radius, strokeColor, lineWidth){
			if(radius*2 > width || radius*2 > height) {
				radius = (Math.min(width,height))/2;
			};
			cxt.save()
			cxt.translate(x, y)
			pathRoundRect(cxt, width, height, radius)
			cxt.strokeStyle = strokeColor || '#ccc';
			cxt.lineWidth = lineWidth || 1;
			cxt.stroke();
			cxt.restore();
		}
		//填充圆角矩形
		function fillRoundReact(cxt, x, y, width, height,radius, fillColor){
			if(radius*2 > width || radius*2 > height) {
				radius = (Math.min(width,height))/2;
			};
			cxt.save()
			cxt.translate(x, y)
			pathRoundRect(cxt, width, height, radius)
			cxt.fillStyle = fillColor || '#ccc';
			cxt.fill();
			cxt.restore();
		}
		function pathRoundRect(cxt, w, h, r){
			cxt.beginPath()
			var pi = Math.PI;
			cxt.arc(w-r, h-r, r, 0, 0.5*pi)
			//cxt.lineTo(r, h)
			cxt.arc(r, h-r, r, 0.5*pi, pi)
			//cxt.lineTo(0, r)
			cxt.arc(r, r, r, pi, 1.5*pi)
			//cxt.lineTo(w-r, 0)
			cxt.arc(w-r, r, r, 1.5*pi, 2*pi)
			cxt.closePath()
		}