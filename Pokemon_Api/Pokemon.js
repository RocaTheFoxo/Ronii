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

            let evo1 = `https://pokeapi.co/api/v2/pokemon/${id+1}/`
            let evo2 = `https://pokeapi.co/api/v2/pokemon/${id+2}/`

            document.getElementById("eka").style = "display: block"

            fetch(evo1)
            .then(response1 => {
                if (!response1.ok) {
                    throw new Error('Pokémonia ei löytynyt.');
                }
                return response1.json();
            })
            .then(data1 => {
                let nimi1 = data1.name.charAt(0).toUpperCase() + data1.name.slice(1);
                let kuva1 = data1.sprites.front_default;

                let uuskuva = document.createElement("img")
                uuskuva.className = "pokemonimage1"
                uuskuva.src = kuva1
                uuskuva.alt = nimi1

                document.getElementById('pokemonTiedot').appendChild(uuskuva)
                document.getElementById("toinen").style = "display: block"
            })
            .catch(error1 => {
                console.log(error1)
                document.getElementById("toinen").style = "display: none"
            });

            fetch(evo2)
            .then(response2 => {
                if (!response2.ok) {
                    throw new Error('Pokémonia ei löytynyt.');
                }
                return response2.json();
            })
            .then(data2 => {
                let nimi2 = data2.name.charAt(0).toUpperCase() + data2.name.slice(1);
                let kuva2 = data2.sprites.front_default;

                let uuskuva = document.createElement("img")
                uuskuva.className = "pokemonimage2"
                uuskuva.src = kuva2
                uuskuva.alt = nimi2

                document.getElementById('pokemonTiedot').appendChild(uuskuva)
                document.getElementById("kolmas").style = "display: block"
            })
            .catch(error2 => {
                console.log(error2)
                document.getElementById("kolmas").style = "display: none"
            });

            document.getElementById('pokemonTiedot').innerHTML = `
                <h1 class="pokemonclass">${nimi}</h1>
                <img class="pokemonimage" src="${kuva}" alt="${nimi}">
                <p class="pokemontype"><strong>Tyyppi:</strong> ${tyyppi}</p>
                <p class="pokemonweight"><strong>Paino:</strong> ${paino} kg</p>
                <p class="pokemonheight"><strong>Pituus:</strong> ${pituus} m</p>
                <p class="pokemonid"><strong>Id:</strong> ${id}</p>
            `;

            document.getElementById("seuraava").style = "display: block"
            document.getElementById("seuraava2").style = "display: block"
        })
        .catch(error => {
            document.getElementById("eka").style = "display: none"
            document.getElementById("seuraava").style = "display: none"
            document.getElementById("seuraava2").style = "display: none"
            document.getElementById('pokemonTiedot').innerHTML = `<p>${error.message}</p>`
        });
})

/*function getevo(url) {
    let data = fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Evoluutiota ei löytynyt.');
            }
            return response.json();
        })
        .then(data1 => {
            console.log(data1.chain.evolves_to)
            let name = data1.chain.evolves_to[0].species.name 

            return name
        })
    
        data.then(result => {
            console.log(result)
            let x = fetch(`https://pokeapi.co/api/v2/pokemon/${result}`)
            .then(response2 => {
                if (!response2.ok) {
                    throw new Error('Pokémonia ei löytynyt.');
                }
                return response2.json();
            })
            .then(data2 => {
                let nimi2 = data2.name
                let kuva2 = data2.sprites.front_default

                console.log(kuva2)
                //document.getElementById('pokemonTiedot').innerHTML = document.getElementById('pokemonTiedot').innerHTML+`<img class="pokemonimage2" src="${kuva2}" alt="${nimi2}>`
                let img = document.createElement("img")
                img.className = "pokemonimage1"
                img.src = kuva2
                img.alt = nimi2

                document.getElementById('pokemonTiedot').appendChild(img)
            })
        })
}*/