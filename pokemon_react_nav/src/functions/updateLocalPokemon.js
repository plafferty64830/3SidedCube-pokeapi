import { editGen } from "../db/local/general";
import { createPokemon, deleteAllPokemon } from "../db/local/pokemon";
import { capsFirst } from "./capFirstLetter";

export function updateLocalPokemon() {
    //first delete the current local pokemon records so we can retrieve a fresh dump from the cloud
    deleteAllPokemon()

    //fetch the pokemon data from the cloud
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then((response) => response.json())
        .then((data) => {
            data.results.forEach((pokemon) => {
                let currPokemon = { name: capsFirst(pokemon.name)}
                getPokemonDetails(pokemon.url).then((specDet) => {
                    currPokemon = {
                        ...currPokemon, 
                        abilities: specDet.abilities,
                        moves: specDet.moves, 
                        small_sprite: specDet.small_sprite, 
                        main_sprite: specDet.main_sprite    
                    }

                    createPokemon(currPokemon)
                })
      

            });
        });
    
    editGen({pokeLastUpdDt: new Date()})
}

function getPokemonDetails(url){
    return new Promise(function (resolve, reject) {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            //reformat abilities and put the required data into a new object array
            let abilities = []
            data.abilities.forEach((element) => {
                abilities.push({name: capsFirst(element.ability.name), hidden: element.is_hidden})
            });

            //reformat the moves in an array
            let moves = []
            data.moves.forEach((element) => {
                moves.push(capsFirst(element.move.name))
            })

            let processedObj = {
                                abilities: abilities, 
                                moves: moves, 
                                small_sprite: data.sprites.front_default, 
                                main_sprite: data.sprites.other.home.front_default
                            }


            resolve(processedObj)
        });
    });
}