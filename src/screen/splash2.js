import React, {Component} from 'react'
import {
	View,
	Text,
	Image
} from 'react-native'

import {
	RkText,
	RkStyleSheet,
	RkTheme
} from 'react-native-ui-kitten';

export default class Splash extends Component {
    static navigationOptions = {
        header: null
	}
	render() {
		let image = <Image style= {styles.imgC} source={require('../assets/images/splash1.png')}/>;
		return (
			<View style={styles.screen}>
			<Image style={styles.img} source={require('../assets/images/trip-logo.png')}/>				
				{image}
				<RkText rkType='header2' style={styles.text}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text the 1500s industry's standard dummy text ever since the 1500s,
				</RkText>
			</View>
		)
	}
}

let styles = RkStyleSheet.create(theme => ({
	screen: {
	  backgroundColor: theme.colors.screen.base,
	  alignItems: 'center',
	  justifyContent: 'center',
	  flex: 1,
		padding: 40
	},
	text: {
	  marginTop: 4,
		justifyContent: 'center',
		textAlign: 'center',
		marginBottom: 50

	},
	imgC: {
		width: 200,	
		marginTop: 40	
	},
	img: {
		width: 220,
		height: 30,
		
	}
  }));