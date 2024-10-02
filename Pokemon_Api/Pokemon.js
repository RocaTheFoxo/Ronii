document.getElementById('pokemonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let pokemonNimi = document.getElementById('pokemonNimi').value.toLowerCase();
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNimi}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémonia ei löytynyt.');
            }
            return response.json();
        })
        .then(data => {
            let nimi = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            let kuva = data.sprites.front_default;
            let tyyppi = data.types.map(type => type.type.name).join(', ');
            let paino = data.weight / 10;
            let pituus = data.height / 10;

            document.getElementById('pokemonTiedot').innerHTML = `
                <h2>${nimi}</h2>
                <img src="${kuva}" alt="${nimi}">
                <p><strong>Tyyppi:</strong> ${tyyppi}</p>
                <p><strong>Paino:</strong> ${paino} kg</p>
                <p><strong>Pituus:</strong> ${pituus} m</p>
            `;
        })
        .catch(error => {
            document.getElementById('pokemonTiedot').innerHTML = `<p>${error.message}</p>`
        });
})