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

/*
const resolveUserInput = (input,pokemonList) => {
    const { results } = pokemonList
   // const { id, name } = results;
    const pokemon = results.find((i) => i.id === Number(input)) || results.find((i) => i.name === String(input).toLowerCase())
    if(pokemon !== undefined){
        const pokemonUrl = pokemon.url;
        return pokemonUrl;
    }
}*/

const displayPokemonInfo = (url) =>{
    const {height, id,  name, weight} = url;
    return `
    <h2 class="name-id">${String(name).toUpperCase()} #${id}</h2>
    <p class="weight-height">Weight: ${weight} Height: ${height}</p>
    `
}
    

const showPokemon = (data) => {
    console.log(displayPokemonInfo(data)) 
}



searchBtn.addEventListener('click', fetchData); 

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    fetchData(); 
  }
});
