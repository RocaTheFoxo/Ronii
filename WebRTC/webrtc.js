const videoElement = document.getElementById('videoElement')

async function startStream() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true })
        videoElement.srcObject = stream;
    } catch (error) {
        console.error('Kameran käyttö epäonnistui:', error)
    }
}

startStream();