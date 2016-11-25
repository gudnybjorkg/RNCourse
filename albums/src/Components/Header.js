// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
// Skýra componentinn það sama og nafnið á skránni
const Header = (props) => { //Hægt er að búa til Header með því að senda í það property
	//svipaður syntax og í import
	const { textStyle, viewStyle } = styles; // Velur þau eigindi úr styles sem á að nota
	// hér mætti líka sleppa þessu og nota beint í View propertyinu style = style.viewStyle

	return (
		<View style={viewStyle}>
			<Text style={textStyle}> {props.headerText} </Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		alignItems: 'center', //hrizontal
		justifyContent: 'center', //vertical
		height: 60,
		paddingTop: 15, // hversu neðarlega elementið á að vera miðað við efsta hluta containersins
		shadowColor: '#000', //Svartur
		// ekkert til hliðanna, sést bara neðst því þetta er efsta contentið á síðunni.
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2, //Styrkleiki, hversu þéttur skugginn er, skalast frá 0 uppí 1.
		elevation: 2, //
		position: 'relative' // staðsetur sig miðað við skjaínn, skalast því með stærri og minni skjám.
	},
	textStyle: {
		fontSize: 20
	}
};
// Make the component available to other parts of the app
export default Header;
