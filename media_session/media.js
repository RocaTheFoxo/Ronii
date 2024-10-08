const audio = document.getElementById('audioPlayer');

if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
        title: 'This is the end',
        artist: 'Artist',
        album: 'This is the end',
        artwork: [{ src: 'https://images.genius.com/ef19d9f94c0336b4c8e0a9c0b891f841.480x269x1.jpg', sizes: '96x96', type: "image/jpg"}]
    })
}

navigator.mediaSession.setActionHandler('play', function() {
    audio.onplay();
})

navigator.mediaSession.setActionHandler('payse', function() {
    audio.pause();
})

document.getElementById('playButton').addEventListener('click', function() {
    audio.play();
})

document.getElementById('pauseButton').addEventListener('click', function() {
    audio.pause();
})