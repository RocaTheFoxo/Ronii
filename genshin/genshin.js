document.getElementById("getartifact").addEventListener('submit', function(e) {
    e.preventDefault();
    let artifact = document.getElementById("artifacts1").value.toLowerCase();

    console.log(artifact)

    let apiUrl = `https://genshin.jmp.blue/artifacts/${artifact}`

    fetch (apiUrl)
        .then (response => {
            if (!response.ok) {
                throw new Error("Artifact not found")
            }
            return response.json()
        })
        .then (data => {
            console.log(data)

            let name = data.name
            let rarity = data.max_rarity
            let bonus = data["2-piece_bonus"]
            let bonus2 = data["4-piece_bonus"]

            document.getElementById("artifactinfo").innerHTML = `
                <h2>${name}</h2>
                <h2>Max Rarity: ${rarity}</h2>
                <h2>2 Piece Bonus: ${bonus}</h2>
                <h2>4 Piece Bonus: ${bonus2}</h2>
            `
        })
        .catch(error => {
            console.log(error)
        })
})

document.getElementById("getboss").addEventListener('submit', function(e) {
    e.preventDefault();
    
    let boss = document.getElementById("bosses1").value.toLowerCase();

    let apiurl2 = `https://genshin.jmp.blue/boss/weekly-boss/${boss}`

    fetch (apiurl2)
        .then (response => {
            if (!response.ok) {
                throw new Error("Boss not found")
            }
            return response.json()
        })

        .then (data => {
            console.log(data)

            let name = data.name
            let desc = data.description
            let drops = data.drops["0"].name
            let drops1 = data.drops["1"].name
            let drops2 = data.drops["2"].name
            let artifact = data.artifacts["0"].name
            let artifact1 = data.artifacts["1"].name
            let artifact2 = data.artifacts["2"].name
            let artifact3 = data.artifacts["3"].name
            let artifact4 = data.artifacts["4"].name

            document.getElementById("bossinfo").innerHTML = `
                <h2>${name}</h2>
                <p>${desc}</p>
                <h2>Drops</h2>
                <h2>${drops}</h2>
                <h2>${drops1}</h2>
                <h2>${drops2}</h2>
                <h2>Artifacts</h2>
                <h2>${artifact}</h2>
                <h2>${artifact1}</h2>
                <h2>${artifact2}</h2>
                <h2>${artifact3}</h2>
                <h2>${artifact4}</h2>
                
            `
        })
})

document.getElementById("getcharacter").addEventListener('submit', function(e) {
    e.preventDefault();

    let character = document.getElementById("characters1").value.toLowerCase();

    let apiurl3 = `https://genshin.jmp.blue/characters/${character}`

    fetch (apiurl3)
        .then (response => {
            if (!response.ok) {
                throw new Error('Character not found')
            }
            return response.json();
        })
        .then (data => {
            console.log(data)

            let name = data.name
            let desc = data.description
            let title = data.title
            let gender = data.gender
            let nation = data.nation
            let affiliation = data.affiliation
            let weapon = data.weapon_type
            let constellation = data.constellation
            let bday = data.birthday
            let release = data.release

            document.getElementById("characterinfo").innerHTML = `
                <h2>${name}</h2>
                <p>${desc}</p>
                <h2>${gender}</h2>
                <h2>Title: ${title}</h2>
                <h2>Nationality: ${nation}</h2>
                <h2>Affiliation: ${affiliation}</h2>
                <h2>Weapon Type: ${weapon}</h2>
                <h2>Constellation: ${constellation}</h2>
                <h2>Birthday: ${bday}</h2>
                <h2>Release Date: ${release}</h2>
            `
        })
})

document.getElementById("getconsumable").addEventListener('submit', function(e) {
    e.preventDefault();

    let consumable = document.getElementById("consumables1").value.toLowerCase();

    let ApiUrl4 = `https://genshin.jmp.blue/consumables`

    fetch(ApiUrl4)
    .then(response => response.json())
    .then(data => {
        data.forEach(function(a) {
            fetch(ApiUrl4+"/"+a)
            .then(response1 => response1.json())
            .then(data1 => {
                if (data1[consumable]) {
                    console.log(data1[consumable])
                }
                let name = data1[consumable].name
                let desc = data1[consumable].description || "No description"
                let rarity = data1[consumable].rarity
                let type = data1[consumable].type || "None"
                let effect = data1[consumable].effect
                document.getElementById("consumableinfo").innerHTML = `
                    <h2>${name}</h2>
                    <p>${desc}</p>
                    <h2>${effect}</h2>
                    <h2>Rarity: ${rarity}</h2>
                    <h2>Type: ${type}</h2>
                `
            })
        })
    })
})