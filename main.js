const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

var imageBoard = document.getElementById("pokemon-board");
var searchInput = document.getElementById("search-input");

var terminalGif = document.getElementById("data-terminal");

const delay = ms => new Promise(res => setTimeout(res, ms));

const pokemonFeth = async () => {
    var pokemon = document.getElementById("search-input").value;
    fetch(API_URL + pokemon)
        .then((response) => response.json())
        .then((data) => addPokemonImage(data));
    terminalGif.src = "imgs/input.gif";
}

const addPokemonImage = (src) => {
    setTimeout(() => { terminalGif.src = "imgs/data_loaded.png"; imageBoard.src = src.sprites.front_default; }, 2600);
}
