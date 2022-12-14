//generic react-native import for frontend and navigation
import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, StatusBar, Dimensions, SafeAreaView, ScrollView } from 'react-native';

//components
import PokemonList from '../components/pokemonList';


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const HomeScreen = ({ navigation, route }) => {

  StatusBar.setBarStyle('dark-content', true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.mainView}>

          <View style={styles.content}>

            <PokemonList nav={navigation}/>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>



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
  content: {
    backgroundColor: 'white',
    marginTop: height * 0.03,
    marginLeft: width * 0.07,
    marginRight: width * 0.07
  },
  mainText: {
    fontSize: height * 0.02,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'bold'
  },
  title: {
    fontSize: height * 0.04,
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: width * 0.07,
    marginRight: width * 0.07,
    marginTop: height * 0.12
  },
  mainView: {
    backgroundColor: 'white',
    flex: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
  blackButton: {
    backgroundColor: '#000000',
    height: height * 0.0625,
    width: width * 0.8,
    marginTop: height * 0.05,
    marginLeft: width * 0.03,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
  },
  clearButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    height: height * 0.0625,
    width: width * 0.8,
    marginTop: height * 0.05,
    marginLeft: width * 0.03,
    alignItems: 'center',
    borderRadius: 50,
    justifyContent: 'center',
  },
  blackBtnText: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: height * 0.01,
    fontSize: height * 0.02
  },
  clearBtnText: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: height * 0.01,
    fontSize: height * 0.02
  },
});

export default HomeScreen