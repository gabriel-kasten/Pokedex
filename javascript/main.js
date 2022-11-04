// Api base URL
const API_URL = 'https://pokeapi.co/api/v2/';

// Selecting DOM elements
let img = document.getElementById('pokemon-img');

let field_1 = document.getElementById('field-1');
let field_2 = document.getElementById('field-2');
let field_3 = document.getElementById('field-3');

let next_button = document.getElementById('next-button');
let previous_button = document.getElementById('prev-button');

let front_button = document.getElementById('front-button');
let toogle_state_button = document.getElementById('toogle-state-button');
let back_button = document.getElementById('back-button');

const search_api = () => {
  let pokemon = document.getElementById('pokemon-input').value;
  pokemon = pokemon.toLowerCase();

  common_data(pokemon);
  description_data(pokemon);
};

const common_data = (pokemon) => {
  fetch(API_URL + 'pokemon' + '/' + pokemon)
    .then((response) => response.json())
    .then((data) => distribute_commom_data(data));
};

const description_data = (pokemon) => {
  fetch(API_URL + 'pokemon-species' + '/' + pokemon)
    .then((response) => response.json())
    .then((data) => description_info(data));
};

const distribute_commom_data = (data) => {
  img_info(data);
  pokemon_info(data);
};

// pikachu

const img_info = (data) => {
  let pokemon_id = data.id;

  img.src =
    '/sprites/sprites/pokemon/versions/generation-v/black-white/animated/' +
    pokemon_id +
    '.gif';

  front_button.addEventListener('click', () => {
    img.src =
      '/sprites/sprites/pokemon/versions/generation-v/black-white/animated/' +
      pokemon_id +
      '.gif';
  });

  toogle_state_button.addEventListener('click', () => {});

  back_button.addEventListener('click', () => {
    img.src =
      '/sprites/sprites/pokemon/versions/generation-v/black-white/animated/back/' +
      pokemon_id +
      '.gif';
  });
};

const description_info = (data) => {
  let description_field = document.getElementById('pokemon-description');

  let description = data.flavor_text_entries[0].flavor_text;
  description_field.innerHTML =
    description.charAt(0).toUpperCase() +
    description.slice(1).toLowerCase().replace('\f', ' ');
};

const pokemon_info = (data) => {
  let i = 1;

  next_button.addEventListener('click', () => {
    if (i < 3) {
      i += 1;
      load_data(i, data);
    }
  });

  previous_button.addEventListener('click', () => {
    if (i > 1) {
      i -= 1;
      load_data(i, data);
    }
  });

  load_data(i, data);
};

const load_data = (i, data) => {
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

  const _load_data_dm = (i) => {
    field_1.innerHTML = order_data[i].option_1;
    field_2.innerHTML = order_data[i].option_2;
    field_3.innerHTML = order_data[i].option_3;
  };

  _load_data_dm(i);
};
