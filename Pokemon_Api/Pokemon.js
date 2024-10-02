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
            let id = data.id;

            let evolutionUrl = `https://pokeapi.co/api/v2/evolution-chain/${id}/`

            document.getElementById('pokemonTiedot').innerHTML = `
                <h1 class="pokemonclass">${nimi}</h1>
                <img class="pokemonimage" src="${kuva}" alt="${nimi}">
                <p class="pokemontype"><strong>Tyyppi:</strong> ${tyyppi}</p>
                <p class="pokemonweight"><strong>Paino:</strong> ${paino} kg</p>
                <p class="pokemonheight"><strong>Pituus:</strong> ${pituus} m</p>
                <p class="pokemonid"><strong>Id:</strong> ${id}</p>
            `;
        })
        .catch(error => {
            document.getElementById('pokemonTiedot').innerHTML = `<p>${error.message}</p>`
        });
})