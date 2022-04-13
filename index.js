
const url = "https://pokeapi.co/api/v2/pokemon/"


const getPokemon = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        showpokemon(data)
    })
}


const showpokemon = (data) =>{
    let nombre = document.getElementById("name")
    let dex = document.getElementById("dexNum")
    let sprite = document.getElementById("sprite")
    let spriteShiny = document.getElementById("sprite_shiny")
    let stats = document.getElementById("stats")
    let type1 = document.getElementById("type1")
    let type2 = document.getElementById("type2")

    nombre.innerHTML = data.name
    dex.innerHTML = "N. " + data.id
    sprite.src = data.sprites.front_default
    spriteShiny.src = data.sprites.front_shiny
    type1.src = "/assets/types/" + data.types[0].type.name + ".png"
    if(data.types[1]===undefined){
        type2.src = "/assets/types/" + "none" + ".png"
    }
    else{
        type2.src = "/assets/types/" + data.types[1].type.name + ".png"
    }
    
    stats.innerHTML = `Stats <br><br>  Hp: ${data.stats[0].base_stat} <br>Attack: ${data.stats[1].base_stat} <br>Defense: ${data.stats[2].base_stat} <br>Special Attack: ${data.stats[3].base_stat} <br>Special Defense: ${data.stats[4].base_stat} <br>Speed: ${data.stats[5].base_stat}`

}

const search = () =>{
    let pokemon = document.getElementById("search") 
    console.log(pokemon.value)
    getPokemon(url + pokemon.value)
    pokemon.value = ""

}



getPokemon(url + "898")
