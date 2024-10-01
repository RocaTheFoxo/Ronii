document.getElementById('muutaOtsikko').addEventListener('click', function() {
    let otsikko = document.getElementById('otsikko');
    otsikko.textContent = 'Uusi otsikko';
    otsikko.style.color = 'red';
})