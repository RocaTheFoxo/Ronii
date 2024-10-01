document.getElementById('näytäPiilotaKuva').addEventListener('click', function() {
    let kuva = document.getElementById('kuva');
    if (kuva.style.display == 'none') {
        kuva.style.display = 'block';
        document.body.style.backgroundColor = 'black';
    } else {
        kuva.style.display = 'none'
        document.body.style.backgroundColor = 'white';
    }
})