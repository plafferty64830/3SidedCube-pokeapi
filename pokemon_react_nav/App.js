//core react-native packages
import React, { Component } from 'react';
import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native"



//screens
import HomeScreen from './src/screens/home';
import DetailsScreen from './src/screens/details';

//local db imports
import { createGen, getGen } from './src/db/local/general';

//functions/services
import { within24Hours } from './src/functions/within24Hours';
import { updateLocalPokemon } from './src/functions/updateLocalPokemon';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
let initialRoute = ""

const Stack = createStackNavigator()

StatusBar.setBarStyle('light-content', true);



const checkRunDailyUpd = () => {
  //retieve the general record from the local database
  const genRecs = getGen()[0]
  
  //if a record exist - i.e. not the first run
  if(genRecs > 0) {
    const lastUpdDt = genRecs[0].pokeLastUpdDt

    //if the pokemon db has not been updated in the last 24 hours run the update process
    if(within24Hours(lastUpdDt) === false){
      updateLocalPokemon()
    }
    
  //otherwiswe, create a general record and update the local pokemon table
  } else {
    createGen()
    updateLocalPokemon()
  }
}

export default class App extends Component {

  constructor(props) {

    super(props);

    initialRoute = 'Home'

    checkRunDailyUpd()

  }

  render() {

      return (

        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRoute}>
            <Stack.Screen name="Home"
              component={HomeScreen}
              options={{
                headerShown: true,
                gestureEnabled: false,
                presentation: 'card',
                animation: 'slide_from_right',
                animationTypeForReplace: 'push'
              }} />

            <Stack.Screen name="Details"
              component={DetailsScreen}
              options={{
                headerShown: true,
                gestureEnabled: false,
                presentation: 'card',
                animation: 'slide_from_right',
                animationTypeForReplace: 'push'
              }} />

          </Stack.Navigator>
        </NavigationContainer>
      )
    
  }
}


const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 0.07,
    marginRight: width * 0.07
  },
  image: {
    width: width * 0.80,
    height: height * 0.42,
    marginVertical: 32,
  },
  text: {
    color: 'white',
    textAlign: 'left',
    fontSize: height * 0.02
  },
  title: {
    fontSize: height * 0.04,
    color: 'white',
    textAlign: 'left'
  },
  row: {
    flexDirection: 'row',
    marginTop: height * 0.01,
  }
});



