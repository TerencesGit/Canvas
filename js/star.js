function drawStar(context, R, r, x, y, rote) {
    context.beginPath()
    for (var i = 0; i < 5; i++) {
        context.lineTo(
            Math.cos((18 + i * 72 - rote) / 180 * Math.PI) * R + x, -Math.sin((18 + i * 72 - rote) / 180 * Math.PI) * R + y)
        context.lineTo(
            Math.cos((54 + i * 72 - rote) / 180 * Math.PI) * r + x, -Math.sin((54 + i * 72 - rote) / 180 * Math.PI) * r + y)
    }
    context.closePath()
    context.stroke()
}
