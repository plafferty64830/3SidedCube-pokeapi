import React from 'react'
import { StyleSheet, Dimensions, View, Text, TouchableOpacity, Image } from 'react-native'
import { generateRandKey } from '../functions/genRandomKey'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const PokemonDetail = ({ name, abil, moves, experience, height, weight, sprite}) => {

    let abilitiesList = ''
    let abilCount = 0

    //loop through the abilities and process them as a string list limitied to 9 items
    JSON.parse(abil).forEach(element => {
        abilCount = abilCount + 1
        if(abilCount < 10){
            abilitiesList = abilitiesList + element.name + ', '
        } 
    });
    abilitiesList = abilitiesList.substring(0, abilitiesList.length - 2)

    let movesList = ''
    let moveCount = 0

    //loop through the moves and process them as a string list limited to 9 items
    JSON.parse(moves).forEach(element => {
        moveCount = moveCount + 1
        if(moveCount < 10) {
            movesList = movesList + element + ', '
        }
    });
    movesList = movesList.substring(0, movesList.length - 2)

    return (
        <View key={generateRandKey()} style={styles.contentBox}>
            <View style={styles.center}>
                <View style={styles.row}>
                    <Image style={styles.sprite} source={{ uri: sprite }}></Image>
                </View>
                <View style={styles.row}>
                    <Text style={styles.nameText}>{name}</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.labelColumn}>
                    <Text style={styles.bold}>Abilities</Text>
                </View>
                <View style={styles.contentColumn}>
                    <Text>{abilitiesList}</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.labelColumn}>
                    <Text style={styles.bold}>Moves</Text>
                </View>
                <View style={styles.contentColumn}>
                    <Text>{movesList}</Text>
                </View>
            </View>

            <View style={styles.row}>
                <View style={styles.labelColumn}>
                    <Text style={styles.bold}>Base Experience</Text>
                </View>
                <View style={styles.contentColumn}>
                    <Text>{experience}</Text>
                </View>
            </View>
            

            <View style={styles.row}>
                <View style={styles.labelColumn}>
                    <Text style={styles.bold}>Height</Text>
                </View>
                <View style={styles.contentColumn}>
                    <Text>{height}</Text>
                </View>
            </View>
            
            <View style={styles.row}>
                <View style={styles.labelColumn}>
                    <Text style={styles.bold}>Weight</Text>
                </View>
                <View style={styles.contentColumn}>
                    <Text>{weight}</Text>
                </View>
            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: height * 0.01,
    },
    column: {
        flexDirection: 'column',
    },
    center: {
        alignContent: 'center',
        alignItems: 'center'
    },
    labelColumn: {
        flexDirection: 'column',
        marginLeft: width * 0.03
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
        marginBottom: height * -0.02,
        height: height * 0.75
    },
    sprite: {
        height: width * 0.5,
        width: width * 0.5
    },
    nameText: {
        fontSize: height * 0.03,
        fontWeight: 'bold',
        marginTop: height * 0.05
    },
    bold: {
        fontWeight: 'bold'
    }

})

export default PokemonDetail
