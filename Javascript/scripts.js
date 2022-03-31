let Pokemones = []

fetch("./Pokemons.json")
    .then((res) => res.json())
    .then((data) =>  Pokemones = data )
    .then(()=>createPokemon(Pokemones))

const pokemonContainer = document.querySelector(".container_pokemon")
const search = document.querySelector("#search")

const getPokemonInfo = (id) => {
    let pokemonInfo = {}
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        
    
}

function createPokemon( Pokemones ){
    Pokemones.results.forEach(pokemon => {
        const col = document.createElement("div")
        col.classList.add("col-lg-3", "col-md-4", "col-sm-6", "my-2")

        const cardContainer = document.createElement("div")
        cardContainer.classList.add("card")

        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        let name = document.createElement("p")
        name.classList.add("card-text")

        let imgContainer = document.createElement("div")
        imgContainer.classList.add("img-container")

        let imgPokemon = document.createElement("img")
        //imgPokemon = data.sprites.front_default
        //console.log(data.sprites.front_default)

        let type = document.createElement("p")
        type.classList.add("card-text")

        let id = document.createElement("p")
        id.classList.add("card-text")

        let weight = document.createElement("p")
        weight.classList.add("card-text")

        getPokemonInfo(pokemon.name)
            .then(res => res.json())
            .then(data => {
                //console.log(data.sprites.front_default)
                name.innerText = data.name
                type.innerText = data.types[0].type.name
                id.innerText = data.id
                weight.innerText = data.weight
                imgPokemon.setAttribute("src", data.sprites.front_default)

                
        })

        
        pokemonContainer.appendChild(col)
        col.appendChild(cardContainer)    
        cardContainer.appendChild(imgContainer)
        cardContainer.appendChild(cardBody)
        cardBody.appendChild(name)
        cardBody.appendChild(id)
        cardBody.appendChild(type)
        cardBody.appendChild(weight)
        imgContainer.appendChild(imgPokemon)
        
    });
}

// search.addEventListener("keypress", (event)=>{
//     pokemonContainer.innerHTML = ""    
//     let searching = data.filter((name) => {
//         return name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())    
//     })
// })