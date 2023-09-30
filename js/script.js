let pokemons = [];
let pokemons_response;

const response_pokemon_api = $.get("https://pokeapi.co/api/v2/pokemon?limit=649", data => {

    const pokemonPromises = data.results.map(pokemon => {
        return $.get(pokemon.url);
    });

    Promise.all(pokemonPromises)
        .then(responses => {
            
            pokemons_response = responses;
            
            responses.forEach( ( pokemon ) => {
                
                pokemons.push( pokemon );
                
                var pokemon_id    = pokemon.id;
                var pokemon_name  = `#${addZero(pokemon_id, 3)} ${captalize(pokemon.species.name)}`;
                var pokemon_img   = pokemon['sprites']['other']['official-artwork']['front_default'];
                var pokemon_types = pokemon.types.map( type => type.type.name );
                
                $('main').append( createPokemonCard(pokemon_id, pokemon_name, pokemon_img, pokemon_types) );
            });
        })
});

