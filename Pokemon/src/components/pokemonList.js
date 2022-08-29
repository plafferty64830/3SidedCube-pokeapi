import React from 'react'
import { StyleSheet, Dimensions, View, Text, TouchableOpacity, Image } from 'react-native'
import { getPokemon } from '../db/local/pokemon'
import { generateRandKey } from '../functions/genRandomKey'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const PokemonList = ({nav}) => {

    const tempPokemon = getPokemon()

    let tempContent = []

    tempPokemon.forEach(element => {

        let tempMoves = ''
        let tempAbilities = ''

        const jsonAbilities = JSON.parse(element.abilities)
        const jsonMoves = JSON.parse(element.moves)

        //limit values to 2
        for (let i = 0; i < 2; i++) {
            //append moves to the tempMoves string for display
            if (jsonMoves[i] !== undefined) {
                tempMoves = tempMoves + jsonMoves[i] + ', '
            }

            //append abilities to the tempAbilities for display
            if (jsonAbilities[i] !== undefined) {
                tempAbilities = tempAbilities + jsonAbilities[i].name + ', '
            }
        }

        //remove trailing comma/space and add ellipses to suggest more data is available 
        tempMoves = tempMoves.substring(0, tempMoves.length - 2) + '...'
        tempAbilities = tempAbilities.substring(0, tempAbilities.length - 2) + '...'


        //push content to the tempContent array so it can easily returned as a component
        tempContent.push(
            <TouchableOpacity 

                key={generateRandKey()} style={styles.contentBox}>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Image style={styles.sprite} source={{ uri: element.small_sprite }}></Image>
                    </View>
                    <View style={styles.contentColumn}>
                        <View style={styles.row}>
                            <Text style={styles.nameText}>{element.name}</Text>
                        </View>
                        <View style={styles.row}>
                            <Text style={styles.bold}>Moves: </Text>
                            <Text>{tempMoves}</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.bold}>Abilities: </Text>
                            <Text>{tempAbilities}</Text>
                        </View>

                    </View>
                </View>
            </TouchableOpacity>
        )
    });

    return tempContent
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: height * 0.01,
    },
    column: {
        flexDirection: 'column',
    },
    contentColumn: {
        flexDirection: 'column',
        marginLeft: width * 0.03
    },
    contentBox: {
        backgroundColor: 'transparent',
        width: width * 0.85,
        padding: height * 0.03,
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'black',
        marginBottom: height * 0.03,
        height: height * 0.2
    },
    sprite: {
        height: height * 0.08,
        width: height * 0.08
    },
    nameText: {
        fontSize: height * 0.02,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    bold: {
        fontWeight: 'bold'
    }

})

export default PokemonList
