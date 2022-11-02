const API_URL = "https://pokeapi.co/api/v2/";

const search_api = (action) => {
    // pega o nome do pokemon informado no input
    let p = document.getElementById("pokemon-input").value;

    fetch(API_URL + action + "/" + p.toLowerCase())
        .then((res) => res.json())
        .then((data) => load_data(data));
};

let order_data = {
    1: {
            'name' : 'name',
            'type': 'data.type[0].name',
            'id': 'data.id',
        },
}

// pikachu
// ditto
// abra

const load_data = (data) => {
    JSON.stringify(order_data);

    let img = document.getElementById("pokemon-img");
    let field1 = document.getElementById("field-1");
    let field2 = document.getElementById("field-2");
    let field3 = document.getElementById("field-3");
    
    img.src = data.sprites.front_default;
    field1.innerHTML = data + '.' + order_data[1].name

    // field1.innerHTML = data.name;
    // field2.innerHTML = data.types[0].type.name;
    // field3.innerHTML = data.id;
}

