const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const spriteContainer = document.getElementById("sprite-container");
const pokemonList = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const fetchData = async () => {
    try{
        const res = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${Number(input.value)||String(input.value).toLowerCase()}`);
        const data = await res.json();
        showPokemon(data);
    }catch (err){
        alert("Pokémon not found")
        console.log(err);
    }
}

const displayPokemon = (url) =>{
    const {height, id,  name, weight, sprites, types, stats} = url;
    const { front_default } = sprites;

    stats.forEach((s) => {
        const {base_stat, stat} = s;
        document.getElementById(`${stat.name}`).innerText = `${base_stat}`
    })
    
    let typeString = ``;
    types.forEach((item) => {
        const {type} = item;
        typeString += `<div id="${type.name}" class="${type.name} type">${type.name}</div>`

    })

    return `
    <h3 class="name-id">${String(name).toUpperCase()} #${id}</h3>
    <p class="weight-height">Weight: ${weight} Height: ${height}</p>
    <img src="${front_default}" alt="${name} sprite"/>
    ${typeString}
     `
}   

const showPokemon = (data) => {
    spriteContainer.innerHTML = displayPokemon(data);
    //console.log(displayPokemon(data));
}

searchBtn.addEventListener('click', fetchData); 

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    fetchData(); 
  }
});
