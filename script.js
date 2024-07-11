const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const spriteContainer = document.getElementById("sprite-container");
const pokemonList = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const fetchData = async () => {
    try{
        const res = await fetch(pokemonList);
        const data = await res.json();
        //call main function
    }catch (err){
        console.log(err);
    }
}


const resolveUserInput = (input,pokemonList) => {
    const { result } = pokemonList
    const { id, name } = result;
    const pokemonUrl = id.find((i) => i === Number(input)) || name.find((i) => i === input.toLowerCase())
    return pokemonUrl;
}




searchBtn.addEventListener('click', fetchData); 

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    fetchData(); 
  }
});
