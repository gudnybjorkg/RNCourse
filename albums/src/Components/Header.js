// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
// Skýra componentinn það sama og nafnið á skránni
const Header = () => {
	//svipaður syntax og í import
	const { textStyle, viewStyle } = styles; // Velur þau eigindi úr styles sem á nota
	// hér mætti líka sleppa þessu og nota beint í View propertyinu style = style.viewStyle 

	return (
		//View er utan um Text elementið
		//textStyle og viewStyle  er notað hér sem property á Text
		<View style={viewStyle}>
			<Text style={textStyle}> Albums! </Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		alignItems: 'center',
		justifyContent: 'center', 
		height: 60,
		paddingTop: 15
	},
	textStyle: {
		fontSize: 20
	}
};
// Make the component available to other parts of the app
export default Header;
