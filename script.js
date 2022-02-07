let limit = 20
let offset = 0

fetchPokemon = () => {

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => response.json())
    .then(allpokemon => {
        allpokemon.results.forEach(element => {
            fetch(`${element.url}`)
            .then(response => response.json())
            .then(pokeDetails => {
                console.log(pokeDetails);
                let ul = document.querySelector('ul')
                let abilityList = []
                let typeList = []
                for (const ability of pokeDetails.abilities) {
                    let abilityListFill = ability.ability.name
                    abilityList.push(abilityListFill)
                }
                for (const type of pokeDetails.types) {
                    let typeListFill = type.type.name
                    console.log(typeListFill);
                    typeList.push(typeListFill)

                }
                ul.innerHTML += `<li id="${element.name}"> <h2>${element.name}</h2> <div class="info-container">  <div class="n"> n°${pokeDetails.id}</div> <div class="height"> height: ${pokeDetails.height} feet </div> <div class="type"> type: ${typeList} </div> <div class="abilities"> abilities : ${abilityList} </div>  </div> <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeDetails.id}.png"></li>`
            })
        });
    })
  }

fetchPokemon()

window.addEventListener('scroll',()=>{
    console.log(window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
        offset = offset + limit
        limit = limit + 15
        fetchPokemon();
    }
})


let test = document.getElementById('ivysaur')
console.log(test.classList.name)
