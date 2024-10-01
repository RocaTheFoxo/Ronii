let oikeaVastaus = 'Golden Freddy';
let vastausNapit = document.getElementsByClassName('vastaus');

console.log(vastausNapit)

for (let i = 0; i < vastausNapit.length; i++) {
    vastausNapit[i].addEventListener('click', function() {
        console.log(vastausNapit[i])
        let vastaus = vastausNapit[i].textContent;
        if (vastaus == oikeaVastaus) {
            document.getElementById('palaute').textContent = 'Youre right~'
            document.body.style.backgroundColor = '#FFD700'
        } else {
            document.getElementById('palaute').textContent = 'Y O U R E  W R O N G';
            document.body.style.backgroundColor = '#660000';
        }
    });
}