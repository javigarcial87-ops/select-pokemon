const button = document.getElementById('get-pokemon');

button.addEventListener('click', () => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response) => response.json())
        .then(data => {
             displayCharacters(data.results);
            console.log("DATA RECIBIDA:", data);
        })
        .catch(error => {
            console.log("Error obteniendo los personajes:", error);
        });
    });