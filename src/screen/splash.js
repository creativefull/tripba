import React from 'react';
import {
  View
} from 'react-native';
import {RkStyleSheet, RkButton, RkTabView, RkTheme} from 'react-native-ui-kitten';
import GradientButton from '../components/gradientButton/index'
import Walkthrough from '../components/splash';
import Walkthrough1 from './splash1';
import Walkthrough2 from './splash2';
// import {PaginationIndicator} from '../../components';

export default class WalkthroughScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {index: 0};
  }

  changeIndex(index) {
    this.setState({index})
  }

   changeDashboard(guide_category) {
    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.screen}>
        <Walkthrough onChanged={(index) => this.changeIndex(index)}>
          <Walkthrough1/>
          <Walkthrough2/>
        </Walkthrough>
        {/* <PaginationIndicator length={2} current={this.state.index}/> */}
        <RkButton rkType="rounded primary large" onPress={this.changeDashboard.bind(this)}>
          NEXT
        </RkButton>
      </View>
    )
  }
}

RkTheme.setType('RkButton', 'large', {
	width : 300
})

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    paddingVertical: 28,
    alignItems: 'center',
    flex: 1,
  },
  button: {
    marginTop: 25,
    marginHorizontal: 16,
  }
}));