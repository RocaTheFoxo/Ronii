let nimet = ['Matti', 'Maija', 'Veeti', 'Emilia', 'Leo', 'Ella', 'Elias', 'Sofia'];

document.getElementById('generoiNimi').addEventListener('click', function() {
    let satunnainenIndeksi = Math.floor(Math.random() * nimet.length);
    document.getElementById('nimi').textContent = 'Sinun nimesi on: ' + nimet[satunnainenIndeksi];
})