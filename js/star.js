 window.onload = function() {
     var canvas = document.getElementById('canvas');
         canvas.width = document.body.scrollWidth;
         canvas.height = document.body.scrollHeight;
     var context = canvas.getContext('2d');
     //线性渐变
     //var skyStyle = context.createLinearGradient(0,0,0,canvas.height)
     //径向渐变
     var skyStyle = context.createRadialGradient(
        canvas.width/2, canvas.height, 0,
        canvas.width/2, canvas.height, canvas.height)
         skyStyle.addColorStop(0,'#035')
         skyStyle.addColorStop(1,'#000')
         context.fillStyle = skyStyle;
         context.fillRect(0, 0, canvas.width, canvas.height)
         // context.lineWidth = 3;
         // context.lineJoin = 'bevel';
     for (var i = 0; i < 100; i++) {
         var r = Math.random() * 5 + 5;
         var x = Math.random() * canvas.width;
         var y = Math.random() * canvas.height * 0.65;
         var rot = Math.random() * 360;
         drawStar(context, r, x, y, rot)
     }
 }
 function drawStar(context, r, x, y, rot) {
     context.save()
     context.translate(x,y)
     context.rotate(rot / 180 * Math.PI)
     context.scale(r, r)
     starPath(context)
     context.fillStyle = '#ff3'
     //context.strokeStyle = '#fd5'
     //context.stroke()
     context.fill()
     context.restore()
 }
 function starPath(context){
    context.beginPath()
     for (var i = 0; i < 5; i++) {
         context.lineTo(
             Math.cos((18 + i * 72) / 180 * Math.PI), 
             -Math.sin((18 + i * 72) / 180 * Math.PI))
         context.lineTo(
             Math.cos((54 + i * 72) / 180 * Math.PI) * 0.5, 
             -Math.sin((54 + i * 72) / 180 * Math.PI) * 0.5)
    }
    context.closePath()
 }
