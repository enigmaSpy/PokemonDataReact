fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response=>console.log(response.json()));
    
    