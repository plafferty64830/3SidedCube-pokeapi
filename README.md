# Technical assignment for 3 Sided Cube

## Projects

#### Pokemon
- An incompleted attempt at the project utilising the react native native navigation library from WIX. Unfortunately as the redux documentation appeared to be under contruction I didn't quite manage to include this in the soltion. Instead, I have utilised Realm from MongoDB.
 
#### Pokemon_react_nav
- A completed project utilising react-navigation and Realm as the local database from MongoDB for persisting data.

## How to compile and run the projects?

These steps are assuming you have a react-native development environment setup on an apple mac with XCode and Android Studio installed.
If this is not the case, a development environment can be setup using the following instructions: ***https://reactnative.dev/docs/environment-setup***

 1. Clone the project using - 
***git clone https://github.com/plafferty64830/3SidedCube-pokeapi.git***
 2. cd into either Pokemon or Pokemon_react_nav
 3. Run ***npm install***

***For IOS***

 5.  cd into the ios directory and run ***pod install*** to install the associated cocoapods
 6. Open up the .xcworkspace file from the ios directory.
 7. Ensure the both the test project and the project have been signed with a valid development license - the project will fail to build if the license is not valid.

***For Android***

 8. From the same terminal, you executed ***npm install*** execute ***adb devices***. Assuming you have plugged in your android and it is setup for USB debugging you should get a response. If you get "command not found", you may need to download the SDK Platform Tools from ***https://developer.android.com/studio/releases/platform-tools***. This is normally downloaded with Android Studio but it can be accidently skipped.
 9. Assuming you now have a response from ***adb devices*** run ***npx react-native run-android***. This command may differ slightly depending on your development environment.


## Demo Video

- ***Pokemon_react_nav*** - https://drive.google.com/file/d/1nd9sKPZ-TgFqvqwSgl37LUrlUGFN25xU/view?usp=sharing 
