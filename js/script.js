/* ESTO ES PARA UN TIPO DE POKEMON
const button = document.getElementById('get-pokemon');
const select = document.getElementById('pokemon-select')
const info = document.getElementById('pokemon-info');
button.addEventListener('click', () => {
    const pokemonName = select.value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(response => response.json())
      .then((data) => {
        const typeUrl = data.types[0].type.url;
        return fetch(typeUrl)
          .then(response => response.json())
          .then((typeData) => {
            const typeEs = typeData.names.find(n => n.language.name === "es").name;
            info.innerHTML = `
              <li class="pokInfo">
                  <h3>${data.name.toLocaleUpperCase()}</h3>
                  <img src="${data.sprites.front_default}" alt="${data.name}">
                  <p>Tipo: ${typeEs}</p>
                  <p>Altura: ${data.height / 10} m</p>
                  <p>Peso: ${data.weight / 10} kg</p>
              </li>
            `;
          });
      })
      .catch(error => {
      console.log("Error obteniendo los personajes:", error);
      });
});
*/
const button = document.getElementById('get-pokemon');
const select = document.getElementById('pokemon-select')
const info = document.getElementById('pokemon-info');
button.addEventListener('click', () => {
  const pokemonName = select.value;
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.json())
    .then((data) => {
      const typeUrls = data.types.map(t => t.type.url);
      const typeNamesES = [];
      function fetchType(i) {
        if (i >= typeUrls.length) {
          info.innerHTML = `
            <li class="pokInfo">
              <h3>${data.name.toLocaleUpperCase()}</h3>
              <img src="${data.sprites.front_default}" alt="${data.name}">
              <p>Tipo: ${typeNamesES.join(", ")}</p>
              <p>Altura: ${data.height / 10} m</p>
              <p>Peso: ${data.weight / 10} kg</p>
            </li>
          `;
          info.style.opacity = "1";
          return;
        }
        fetch(typeUrls[i])
          .then(response => response.json())
          .then((typeData) => {
            const typeEs = typeData.names.find(n => n.language.name === "es").name;
            typeNamesES.push(typeEs);
            fetchType(i + 1);
          });
      }
      fetchType(0);
    })
    .catch(error => {
      console.log("Error obteniendo los personajes:", error);
    });
});







