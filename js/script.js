const button = document.getElementById('get-pokemon');
const select = document.getElementById('pokemon-select')
const info = document.getElementById('pokemon-info');

button.addEventListener('click', () => {
    const pokemonName = select.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then((data) => {
      info.innerHTML = `
        <li class="pokInfo">
            <h3>${data.name}</h3>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>${data.types[0].type.name}</p>
        </li>

      `
    })
    .catch(error => {
      console.log("Error obteniendo los personajes:", error);
    });
});
//nombre=name, imagen=sprites.front_default, tipo=data.types[0], altura=height y peso= weight

/*
<li class="perso">
    <img src="${personaje.image}" alt="${personaje.name}" >
    <h3><b>Name: </b>${personaje.name}</h3>
                                <p><b>Especies: </b>${personaje.species}</p>
                </li>

                // <img src="${prites.front_default} " alt="imagPok">

    */
