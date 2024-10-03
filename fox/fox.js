document.getElementById("btn").addEventListener('click', function() {
    let apiurl = `https://randomfox.ca/floof/`

    fetch (apiurl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Kuvaa ei löytynyt')
            }
            return response.json();
        })

        .then (data => {
            console.log(data)

            let img = data.image

            document.getElementById('fox').innerHTML = `
                <img class="foxpic" src="${img}">
            `
        })
})