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
import OnTour from "./app/components/onTour/OnTour";
import PickDates from "./app/components/offTour/PickDates";
import ShowDetails from "./app/components/offTour/ShowDetails";
import TourCalendar from "./app/components/offTour/TourCalendar";
import Splash from "./app/components/Splash";
import SeeTours from "./app/components/offTour/SeeTours";
import MerchList from "./app/components/MerchList";
import MerchEdit from "./app/components/MerchEdit";
import AtShow from "./app/components/AtShow/AtShow";
import ContactCard from "./app/components/AtShow/ContactCard";
import SellMerch from "./app/components/AtShow/SellMerch";
import EditContact from "./app/components/offTour/EditContact";
export default class Tourly extends Component {

  renderScene (route, navigator) {
    if(route.name==='Splash'){
      return <Splash navigator={navigator} {...route.passProps} />
    }
    if (route.name === 'OffTour') {
      return <OffTour navigator={navigator} {...route.passProps} />
    }
     if(route.name==='SeeTours'){
      return <SeeTours navigator={navigator} {...route.passProps} />
    }
    if (route.name === 'OnTour') {
      return <OnTour navigator={navigator} {...route.passProps} />
    }
    if(route.name==='AtShow'){
      return <AtShow navigator={navigator} {...route.passProps}/>
    }
    if(route.name==='SellMerch'){
      return <SellMerch navigator={navigator} {...route.passProps}/>
    }
    if(route.name==='ShowDetails'){
      return <ShowDetails navigator={navigator} {...route.passProps}/>
    }
    if(route.name==='EditContact'){
      return <EditContact navigator={navigator} {...route.passProps}
      />
    }
    if(route.name==='ContactCard'){
      return<ContactCard navigator={navigator} {...route.passProps}/>
    }
      if(route.name==='MerchEdit'){
      return<MerchEdit navigator={navigator} {...route.passProps}/>
    }
    if(route.name==='MerchList'){
      return<MerchList navigator={navigator} {...route.passProps}/>
    }
     if (route.name === 'PickDates') {
      return <PickDates navigator={navigator} {...route.passProps} />
    }  if (route.name === 'TourCalendar') {
      return <TourCalendar navigator={navigator} {...route.passProps} {...this.props}/>
    }
  }
configureScene (route) {
  return Navigator.SceneConfigs.FloatFromBottom
}
 render() {
    return (
        <Navigator
        style={{ flex: 1 }}
        initialRoute={{ name: 'Splash' }}
        renderScene={this.renderScene} />
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
