// Index.ios.js - place code here for iOS

// Import a library to help create a component, þarf ekki .js endinguna en það má
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';

// Create a component
const App = () => (
  //<Text> Some text </Text> // JSX útgáfan sem compilast yfir í JS element.
  // sendir inn propertyið headerText með textanum Albums í header componentið!
  //Má ekk returna 2 hlutum, ef það eru 2 hlutir sem þarf að skila þarf að setja þa
  //saman í einn, t.d. view
  <View>
    <Header headerText={'Albums!'} />
    <AlbumList />
  </View>
);

//Render it to the device, registerComponent is only used here.
AppRegistry.registerComponent('albums', () => App);
