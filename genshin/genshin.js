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

document.getElementById("getdomain").addEventListener('submit', function(e) {
    e.preventDefault()

    let domain = document.getElementById("domains1").value.toLowerCase();
    let apiUrl5 = `https://genshin.jmp.blue/domains/${domain}`

    fetch (apiUrl5)
     .then (response => {
        if (!response.ok) {
            throw new Error ("Domain not found")
        }
        return response.json();
     })

     .then (data => {
        let name = data.name
        let description = data.description
        let location = data.location
        let nation = data.nation
        let type = data.type
        let requirements = data.requirements[0].level
        let adventurerank = data.requirements[0].adventureRank
        let requirements1 = data.requirements[1].level
        let adventurerank1 = data.requirements[1].adventureRank
        let requirements2 = data.requirements[2].level
        let adventurerank2 = data.requirements[2].adventureRank
        let requirements3 = data.requirements[3].level
        let adventurerank3 = data.requirements[3].adventureRank
        let elements = data.recommendedElements[0]
        let elements1 = data.recommendedElements[1]
        let elements2 = data.recommendedElements[2]

        document.getElementById("domainInfo").innerHTML = `
            <h2>${name}</h2>
            <p>${description}</p>
            <h2>Location: ${location}</h2>
            <h2>Nation: ${nation}</h2>
            <h2>Type: ${type}</h2>
        `

        document.getElementById("domainInfo2").innerHTML = `
            <h2>Level: ${requirements}. Adventure rank: ${adventurerank}</h2>
            <h2>Level: ${requirements1}. Adventure rank: ${adventurerank1}</h2>
            <h2>Level: ${requirements2}. Adventure rank: ${adventurerank2}</h2>
            <h2>Level: ${requirements3}. Adventure rank: ${adventurerank3}</h2>
            <h2>Recommended Elements: ${elements}, ${elements1} ${elements2}</h2>
        `
     })
})

document.getElementById("getelement").addEventListener('submit', function(e) {
    e.preventDefault();

    let element = document.getElementById("elements1").value.toLowerCase();
    let ApiUrl6 = `https://genshin.jmp.blue/elements/${element}`

    fetch (ApiUrl6)
     .then (response => {
        if (!response.ok) {
            throw new Error ("No element found")
        }
        return response.json()
     })

     .then (data => {
        console.log(data)

        let name = data.name
        /*let desc = data.reactions[0].description
        let reaction = data.reactions[0].name
        let desc1 = data.reactions[1].description || "None"
        let reaction1 = data.reactions[1].name || "None"
        let desc2 = data.reactions[2].description || "None"
        let reaction2 = data.reactions[2].name || "None"*/

        data.reactions.forEach(function(a, i) {
            let name = document.createElement("h2")
            name.innerHTML = a.name

            let desc = document.createElement("h2")
            desc.innerHTML = a.description
            desc.className = "desci"

            document.getElementById("elementinfo").appendChild(name)
            document.getElementById("elementinfo").appendChild(desc)
        })

        /*document.getElementById("elementinfo").innerHTML = `
            <h2>${name}</h2>
            <h2>${desc}</h2>
            <h2>Element Reaction: ${reaction}</h2>
        `

        document.getElementById("elementinfo1").innerHTML = `
            <h2>${desc1}</h2>
            <h2>Reaction ${reaction1}</h2>
        `

        document.getElementById("elementinfo2").innerHTML = `
            <h2>${desc2}</h2>
            <h2>Reaction ${reaction2}</h2>
        `*/
     })
     .catch (error => {
        console.log(error)
     })
})

document.getElementById("getenemy").addEventListener('submit', function(e) {
    e.preventDefault();

    let enemy = document.getElementById("enemies1").value.toLowerCase();
    let ApiUrl7 = `https://genshin.jmp.blue/enemies/${enemy}`

    fetch (ApiUrl7)
     .then (response => {
        if (!response.ok) {
            throw new Error ("No Enemy Found")
        }
        return response.json();
     })

     .then (data => {
        console.log(data)

        let name = data.name
        let faction = data.faction
        let family = data.family
        let region = data.region
        let type = data.type
        let desc = data.description

        if (data.descriptions != null) {
            data.descriptions.forEach(function(a, i) {
                let name = document.createElement("h2")
                name.innerHTML = a.name
                document.getElementById("enemyinfo1").appendChild(name)
                name.className = "name1"
    
                let desc = document.createElement("p")
                desc.innerHTML = a.description
                document.getElementById("enemyinfo1").appendChild(desc)
    
                console.log(a)
            }) 
        }
        else {
            document.getElementById("enemyinfo1").innerHTML = "";
        }

        document.getElementById("enemyinfo").innerHTML = `
            <h2>${name}</h2>
            <h2>Faction: ${faction}</h2>
            <h2>Family: ${family}</h2>
            <h2>Region: ${region}</h2>
            <h2>Type: ${type}</h2>
            <p>${desc}</p>
        `
     })
})

document.getElementById("getmaterial").addEventListener('submit', function(e) {
    e.preventDefault()

    let material = document.getElementById("materials1").value.toLowerCase();
    let ApiUrl8 = `https://genshin.jmp.blue/materials`

    fetch(ApiUrl8)
    .then(response => response.json())
    .then(data => {
        data.forEach(function(v) {
            fetch(ApiUrl8+"/"+v)
            .then(response1 => response1.json())
            .then(data1 => {
                if (data1[material]) {
                    console.log(data1[material])

                    let mat = data1[material]

                    let a = JSON.stringify(mat).toLocaleLowerCase()

                    for (i=0; i<=a.length; i++) {
                        a = a.replace("{", "")
                        a = a.replace("}", "")
                        a = a.replace('"', "")
                        a = a.replace("[", "")
                        a = a.replace("]", "")
                        a = a.replace(":", "")
                        a = a.replace(",", " | ")
                        a = a.replace("characters", "")
                        a = a.replace("availability", "")
                        a = a.replace("source", "")
                        a = a.replace("name", "")
                        a = a.replace("rarity", "")
                        a = a.replace("id", "")
                        a = a.replace("experience", "")
                        a = a.replace("weapons", "")
                        a = a.replace("items", "")
                    }

                    document.getElementById("materialinfo").innerHTML = `<p> ${a} </p>`
                }
            })
            .catch(error => {
                console.log(error)
            })
        })
    })
})

document.getElementById("getnation").addEventListener("submit", function(e) {
    e.preventDefault();

    let nation = document.getElementById("nations1").value.toLowerCase();
    let ApiUrl9 = `https://genshin.jmp.blue/nations`

    fetch(ApiUrl9)
        .then(response => {
            if (!response.ok) {
                throw new Error ("Invalid Nation")
            }
            return response.json();
        })
        .then(data => {
            data.forEach(function(v) {
                fetch(ApiUrl9+"/"+v)
                .then(response1 => response1.json())
                .then(data1 => {
                    console.log(data1)
                })
            })
        })
})