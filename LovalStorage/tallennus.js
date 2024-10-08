document.getElementById('saveButton').addEventListener('click', function() {
    let name = document.getElementById('nameInput').value;
    localStorage.setItem('userName', name);
    document.getElementById('savedName').textContent = 'Tallennettu nimi: ' + name;
});

window.onload = function() {
    let savedName = localStorage.getItem('userName');
    if (savedName) {
        document.getElementById('savedName').textContent = 'Tallennettu nimi: ' + savedName;
    }
}