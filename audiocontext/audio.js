document.getElementById('playSound').addEventListener('click', function() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();

    oscillator.type = 'sine'
    oscillator.frequency.setValueAtTime(400, audioCtx.currentTime)

    oscillator.connect(audioCtx.destination)
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 1)
})