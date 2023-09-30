function createPokemonCard( id, name, img, array_types ) {
    return `
        <a id="${id}" class="card-pokemon">
            <h4>${name}</h4>
            <img class="pokemon-img" src="${img}" alt="${name}">
            
            ${createPokemonTypes( array_types )}
        </a>
    `;
}

function createPokemonTypes( array_types ) {
    return `
        <div class="div-types">
            ${array_types.map( type => `<span class="type ${type}">${captalize(type)}</span>` ).join('')}
        </div>
    `;
}