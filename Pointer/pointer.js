const canvas = document.getElementById('drawCanvas')
const ctx = canvas.getContext('2d')
let isDrawing = false;

canvas.addEventListener('pointerdown', function(event) {
    isDrawing = true
    ctx.moveTo(event.offsetX, event.offsetY)
})

canvas.addEventListener('pointermove', function(event) {
    ctx.lineTo(event.offsetX, event.offsetY)
    ctx.stroke();
})

canvas.addEventListener('pointerup', function() {
    isDrawing = false;
})