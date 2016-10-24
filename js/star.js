 var canvas = document.getElementById('canvas');
    canvas.width = document.body.scrollWidth;
    canvas.height = document.body.scrollHeight;
    var context = canvas.getContext('2d');
    context.fillStyle = '#000'
    context.fillRect(0,0,canvas.width,canvas.height)
    context.lineWidth = 3;
    context.lineJoin = 'bevel';

    for(var i = 0; i<100;i++){
        var R = Math.random() * 10 + 10;
        var x = Math.random() * canvas.width;
        var y = Math.random() * canvas.height;
        var rote = Math.random() * 360;
        drawStar(context, R, R/2, x, y, rote)
    }
    function drawStar(context, R, r, x, y, rote) {
         context.beginPath()
         for (var i = 0; i < 5; i++) {
             context.lineTo(
                 Math.cos((18 + i * 72 - rote) / 180 * Math.PI) * R + x, -Math.sin((18 + i * 72 - rote) / 180 * Math.PI) * R + y)
             context.lineTo(
                 Math.cos((54 + i * 72 - rote) / 180 * Math.PI) * r + x, -Math.sin((54 + i * 72 - rote) / 180 * Math.PI) * r + y)
         }
         context.closePath()
         context.fillStyle = '#ff3'
         context.strokeStyle = '#fd5'
         context.fill()
         context.stroke()
    }
