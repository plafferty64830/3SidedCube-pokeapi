import Realm from 'realm';

const pokemon = new Realm({
    path: 'Pokemon.realm',
    schemaVersion: 1,
    schema: [{
        name: "Pokemon",
        properties: {
            name: 'string',
            abilities: 'string',
            moves: 'string',
            small_sprite: 'string',
            main_sprite: 'string',
            base_experience: 'string',
            height: 'string',
            weight: 'string'
        }
    }]
});

export function createPokemon(pokeObj) {
    pokemon.write(() => {
        pokemon.create('Pokemon', {
            name: pokeObj.name,
            abilities: JSON.stringify(pokeObj.abilities),
            moves: JSON.stringify(pokeObj.moves),
            small_sprite: pokeObj.small_sprite,
            main_sprite: pokeObj.main_sprite,
            base_experience: pokeObj.base_experience,
            height: pokeObj.height,
            weight: pokeObj.weight
        });
    });
    return true

}

export function getPokemon() {
    return pokemon.objects("Pokemon")
}

export function deleteAllPokemon() {
    const tempRecs = getPokemon()
    
    //loop through all the records and delete each one
    tempRecs.forEach(tempRecObj => {
        if (tempRecObj !== undefined) {
            pokemon.write(() => {
                pokemon.delete(tempRecObj)
            });
        }
    });
}

export function isDuplicate(name) {
    //filter the pokemon data for the pokemon with name supplied
    const filtered = getPokemon().filtered("name == '" + name + "'")

    //if length of filtered array is greater than 0 then its a duplicate
    if (filtered.length > 0) {
        return true
    } else {
        return false
    }
}
