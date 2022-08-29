/**
 * @format
 */

 import { Navigation } from 'react-native-navigation';
 import { HomeScreen } from './src/screens/home';


Navigation.registerComponent('Home', () => HomeScreen);

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

