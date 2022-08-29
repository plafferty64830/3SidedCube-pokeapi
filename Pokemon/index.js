/**
 * @format
 */

import { Navigation } from 'react-native-navigation';
import { HomeScreen } from '../Pokemon/src/screens/home'
import { DetailsScreen } from '../Pokemon/src/screens/details'
import { getGen, createGen } from '../Pokemon/src/db/local/general'
import { updateLocalPokemon } from '../Pokemon/src/functions/updateLocalPokemon'
import { within24Hours } from '../Pokemon/src/functions/within24Hours'


Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Details', () => DetailsScreen);

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

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home'
            }
          }
        ]
      }
    }
  });
});

