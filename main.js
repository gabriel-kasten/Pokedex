const API_URL = 'https://pokeapi.co/api/v2/';

// Selecting DOM elements
let img = document.getElementById('pokemon-img');

let field_1 = document.getElementById('field-1');
let field_2 = document.getElementById('field-2');
let field_3 = document.getElementById('field-3');

let pokemon_description = document.getElementById('pokemon-description');
let next_button = document.getElementById('next-button');
let previous_button = document.getElementById('prev-button');

const search_api = () => {
  // pega o nome do pokemon informado no input
  let pokemon = document.getElementById('pokemon-input').value;

  fetch(API_URL + 'pokemon/' + pokemon.toLowerCase())
    .then((res) => res.json())
    .then((data) => load_data(data));

  fetch(API_URL + 'pokemon-species/' + pokemon.toLowerCase())
    .then((res) => res.json())
    .then(
      (data) =>
        (pokemon_description.innerHTML = data.form_descriptions.description)
    );
};

const load_data = (data) => {
  // Mutable data
  let i = 1;

  // Constant data
  const type =
    Object.keys(data.types).length == 2
      ? data.types[0].type.name + ' & ' + data.types[1].type.name
      : data.types[0].type.name;

  const order_data = {
    1: {
      option_1: 'Name: ' + data.name,
      option_2: 'Type: ' + type,
      option_3: 'Id: ' + data.id,
    },
    2: {
      option_1: 'Hp: ' + data.stats[0].base_stat,
      option_2: 'Attack: ' + data.stats[1].base_stat,
      option_3: 'Defense: ' + data.stats[2].base_stat,
    },
    3: {
      option_1: 'Weight: ' + data.weight,
      option_2: 'Height: ' + data.height,
      option_3: 'Base experience: ' + data.base_experience,
    },
  };

  const load_data_dm = (i) => {
    field_1.innerHTML = order_data[i].option_1;
    field_2.innerHTML = order_data[i].option_2;
    field_3.innerHTML = order_data[i].option_3;
  };

  next_button.addEventListener('click', () => {
    if (i < 3) {
      i += 1;
      load_data_dm(i);
    }
  });

  previous_button.addEventListener('click', () => {
    if (i > 1) {
      i -= 1;
      load_data_dm(i);
    }
  });

  load_data_dm(i);

  img.src = data.sprites.front_default;
};

// Object.keys(data.types).length

// pikachu
// gastrodon -- dois elementos

// lidar com fetch api error

// immutable data
// const description_field = document.getElementById();
