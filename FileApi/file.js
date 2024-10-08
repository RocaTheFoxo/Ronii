document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0]
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('fileContent').textContent = 'tiedoston sisältö: ' + e.target.result
    }

    reader.readAsText(file);
})