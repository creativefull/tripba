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
		let image = RkTheme.current.name === 'light'
		? <Image source={require('../assets/images/splash1.png')}/>
		: <Image source={require('../assets/images/splash1.png')}/>;
		return (
			<View style={styles.screen}>
				{image}
				<RkText rkType='header2' style={styles.text}>Welcome to Kitten Tricks</RkText>
			</View>
		)
	}
}

let styles = RkStyleSheet.create(theme => ({
	screen: {
	  backgroundColor: theme.colors.screen.base,
	  alignItems: 'center',
	  justifyContent: 'center',
	  flex: 1
	},
	text: {
	  marginTop: 20
	}
  }));