'use strict'
import { ListView } from 'realm/react-native';
import realm from "../../realm/models.js";
import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,NativeModules,TextInput, TouchableHighlight, Navigator,Touch} from 'react-native';


//for each day on the calendar 
export default class SeeTours extends Component {

    constructor(props){
    super(props);
    let tours = realm.objects('Tour');
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(tours)
    }}

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
      <Text>{this.state.title}</Text>
        <ListView
          dataSource={this.state.dataSource}
         renderRow={(rowData)=> this.renderTours(rowData)}
          
        />
        
      </View>
    );
  }

renderTours(tour){
  return(
  <TouchableHighlight onPress={()=>
           this.props.navigator.push({name:'TourCalendar', passProps:{tourID: tour.id}})
}>
<Text>Tour {tour.title} - {tour.shows.length}</Text>
</TouchableHighlight>
  )
}
}
module.exports = SeeTours