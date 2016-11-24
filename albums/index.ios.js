// Index.ios.js - place code here for iOS

// Import a library to help create a component
import React from 'react';  
import { AppRegistry } from 'react-native'; 
import Header from './src/Components/Header'; // Import Header skránni sem á svo að render-a. 

// Create a component
const App = () => (
  //<Text> Some text </Text> // JSX útgáfan sem mun compilast yfir í JS element. 
  <Header headerText={'Albums!'} />  // sendir inn propertyið headerText með textanum Albums!
);

//Render it to the device
AppRegistry.registerComponent('albums', () => App);

