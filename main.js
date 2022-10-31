const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

var imageBoard = document.getElementById("pokemon-board");


const pokemonFeth = () => {
    var pokemon = document.getElementById("search-input").value;
    fetch(API_URL + pokemon)
        .then((response) => response.json())
        .then((data) => addPokemonImage(data));
}

const addPokemonImage = (src) => {
    imageBoard.src = src.sprites.front_default;
}