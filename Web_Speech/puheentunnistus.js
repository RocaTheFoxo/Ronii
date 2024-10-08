const startButton = document.getElementById('startButton');
const resultDisplay = document.getElementById('result');

if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.lang = 'fi-FI';

    recognition.onresult = fucntion(event);{
        const transcript = event.results[0][0].transcript
        resultDisplay.textContent = 'Tunnistettu puhe: ' + transcript
    };

    startButton.addEventListener('click', function() {
        recognition.start();
    })
} else {
    resultDisplay.textContent = 'Selaimesi ei tue puheentunnistusta.';
}