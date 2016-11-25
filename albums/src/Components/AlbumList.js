// Import
import React, { Components } from 'react'; // til þess að þurfa ekki að yfirskrifa React
import { View, Text } from 'react-native';


//const AlbumList = () => { þetta er gamla eins og það væri sem functional component
//Þarf að importa Component
// þarf alltaf að útfæra renderfallið þegar átt er við class
// þegar kallað er á Album list þá mun þetta render fall keyra til að birta á skjá
class AlbumList extends Components {
  //kallast automatiskt í þetta áður en það er renderað
  componentWillMount() {
    console.log('componentWillMount in AlbumList');
  }

  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  } //notar ekki semikommu í class
}

export default AlbumList;
