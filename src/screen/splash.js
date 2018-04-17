import React from 'react';
import {
  View
} from 'react-native';
import {RkStyleSheet} from 'react-native-ui-kitten';
import GradientButton from '../components/gradientButton/index'
import Walkthrough from '../components/splash';
import Walkthrough1 from './splash1';
import Walkthrough2 from './splash1';
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

  render() {
    return (
      <View style={styles.screen}>
        <Walkthrough onChanged={(index) => this.changeIndex(index)}>
          <Walkthrough1/>
          <Walkthrough2/>
        </Walkthrough>
        {/* <PaginationIndicator length={2} current={this.state.index}/> */}
        <GradientButton
		  rkType='large'
		  colors={["#089","#088"]}
          style={styles.button}
          text="GET STARTED"
          onPress={() => {
            this.props.navigation.goBack()
          }}/>
      </View>
    )
  }
}

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