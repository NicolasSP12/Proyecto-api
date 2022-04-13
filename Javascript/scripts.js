let Pokemones = []

const pokemonContainer = document.querySelector(".container_pokemon")
const search = document.querySelector("#search")

search.addEventListener("keyup", (event)=>{
    pokemonContainer.innerHTML = ""            
    searching(Pokemones, event.target.value)
})   

let searching = (allPokemons, pokemonSearch) => {
    let pokemonFound = allPokemons.filter((pokemon)=>{
        return pokemon.name.toLocaleLowerCase().includes(pokemonSearch.toLocaleLowerCase())
    })
    createPokemon(pokemonFound)
}

function createPokemon( Pokemones ){
    Pokemones.forEach(pokemon => {
        const col = document.createElement("div")
        col.classList.add("col-lg-3", "col-md-4", "col-sm-6", "my-2")

        const cardContainer = document.createElement("div")
        cardContainer.classList.add("card")

        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")
        cardBody.classList.add("texto_container")

        let name = document.createElement("p")
        name.classList.add("card-text")

        let imgContainer = document.createElement("div")
        imgContainer.classList.add("img-container")

        let imgPokemon = document.createElement("img")     

        let type = document.createElement("p")
        type.classList.add("card-text")

        let id = document.createElement("p")
        id.classList.add("card-text")

        let weight = document.createElement("p")
        weight.classList.add("card-text")

        let abilities = document.createElement("p")
        abilities.classList.add("card-text")
        
        pokemonContainer.appendChild(col)
        col.appendChild(cardContainer)    
        cardContainer.appendChild(imgContainer)
        cardContainer.appendChild(cardBody)
        cardBody.appendChild(id)
        cardBody.appendChild(name)
        cardBody.appendChild(type)
        cardBody.appendChild(weight)
        cardBody.appendChild(abilities)
        imgContainer.appendChild(imgPokemon)
        
        name.innerText = `Name: ${pokemon.name}`
        type.innerText = `Type(s): ${pokemon.type}`
        id.innerText = `ID: ${pokemon.id}`
        weight.innerText = `Weight: ${pokemon.weight}`
        imgPokemon.setAttribute("src", pokemon.ThumbnailImage)
        abilities.innerText = `Especial ability(s): ${pokemon.abilities}`
        
    });
}


    fetch("./Pokemons.json")
    .then ( res => res.json())
    .then ( data => Pokemones = data)
    .then ( () => createPokemon(Pokemones))
