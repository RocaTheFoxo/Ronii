document.getElementById('speakButton').addEventListener('click', function() {
    const text = document.getElementById('textToSpeak').value
    const utterance = new SpeechSynthesisUtterance(text)
    speechSynthesis.speak(utterance)
})