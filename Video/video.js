const video = document.getElementById('myVideo')
const status = document.getElementById('status')

document.getElementById('playButton').addEventListener('click', function() {
    video.play();
    document.body.style.backgroundColor = "black"
})

document.getElementById('pauseButton').addEventListener('click', function() {
    video.pause();
    document.body.style.backgroundColor = "white"
})

video.addEventListener('play', function() {
    status.textContent = 'Video on käynnissä';
})

video.addEventListener('pause', function() {
    status.textContent = 'Video on pysäytetty.'
})