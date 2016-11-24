// Import libraries for making a component
import React from 'react';
import { Text } from 'react-native';

// Make a component
// Skýra componentinn það sama og nafnið á skránni
const Header = () => {
	//svipaður syntax og í import
	const { textStyle } = styles;

	//textStyle er notað hér sem property á Text
	return <Text style = {textStyle}>Albums!</Text>;
};

const styles = {
	textStyle: {
		fontSize: 20
	}
};
// Make the component available to other parts of the app
export default Header;
