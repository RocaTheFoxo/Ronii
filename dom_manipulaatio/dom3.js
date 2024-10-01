document.getElementById('näytäPiilotaKuva').addEventListener('click', function() {
    let kuva = document.getElementById('kuva');
    if (kuva.style.display == 'none') {
        kuva.style.display = 'block';
    } else {
        kuva.style.display = 'none'
    }
})