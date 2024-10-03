document.getElementById("btn").addEventListener('click', function() {
    let apiurl = `https://api.breakingbadquotes.xyz/v1/quotes`

    fetch (apiurl)
        .then (response => {
            if (!response.ok) {
                throw new Error("ei löytynyt")
            }
            return response.json();
        })
        .then (data => {
            console.log(data)
            let quote = data[0].quote
            let author = data[0].author

            document.getElementById('quotte').innerHTML = quote
            document.getElementById('author').innerHTML = author
        })
})