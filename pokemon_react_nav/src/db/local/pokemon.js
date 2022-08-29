import Realm from 'realm';

const pokemon = new Realm({
    path: 'Pokemon.realm',
    schemaVersion: 3,
    schema: [{ 
        name: "Pokemon",
        properties: {
            name: 'string',
            abilities: 'string',
            moves: 'string', 
            small_sprite: 'string', 
            main_sprite: 'string'    
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
            main_sprite: pokeObj.main_sprite    
        });
    });
    return true
    
}

export function getPokemon() {
    return pokemon.objects("Pokemon")
}

export function deleteAllPokemon(){
    const tempRecs = getPokemon()
    tempRecs.forEach(tempRecObj => {
        if(tempRecObj !== undefined){
            pokemon.write(() => {
                pokemon.delete(tempRecObj)
            }); 
        }
    });   
}
