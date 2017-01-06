/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text, Navigator,
  View
} from 'react-native';
import OffTour from "./app/components/offTour/OffTour";
import PickDates from "./app/components/offTour/PickDates";
import ShowDetails from "./app/components/offTour/ShowDetails";

export default class Tourly extends Component {

  renderScene (route, navigator) {
    if (route.name === 'OffTour') {
      return <OffTour navigator={navigator} {...route.passProps} />
    }
    if (route.name === 'OnTour') {
      return <OnTour navigator={navigator} {...route.passProps} />
    }
    if(route.name==='AtShow'){
      return <OnTour navigator={navigator} {...route.passProps}/>
    }
    if(route.name==='ShowDetails'){
      return <ShowDetails navigator={navigator} {...route.passProps}/>
    }
  }
configureScene (route) {
  return Navigator.SceneConfigs.FloatFromBottom
}
 render() {
    return (
        <Navigator
        configureScene={this.configureScene.bind(this)}
        style={{ flex: 1, backgroundColor: 'white' }}
        initialRoute={{ name: 'ShowDetails' }}
        renderScene={this.renderScene.bind(this)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Tourly', () => Tourly);
