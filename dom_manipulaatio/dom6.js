function näytäAika() {
    let nyt = new Date();
    let tunnit = nyt.getHours();
    let minuutit = nyt.getMinutes();
    let sekunnit = nyt.getSeconds();

    minuutit = minuutit < 10 ? '0' + minuutit : minuutit;
    sekunnit = sekunnit < 10 ? '0' + sekunnit : sekunnit;

    let aika = tunnit + ':' + minuutit + ':' + sekunnit;
    document.getElementById('kello').textContent = aika;
}

setInterval(näytäAika, 1000);
näytäAika();