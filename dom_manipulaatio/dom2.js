document.getElementById('lisääKohde').addEventListener('click', function() {
    let uusiKohde = document.createElement('li');
    uusiKohde.textContent = 'Uusi kohde';
    document.getElementById('lista').appendChild(uusiKohde);
})