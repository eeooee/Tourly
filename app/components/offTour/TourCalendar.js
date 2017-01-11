'use strict'
import { ListView } from 'realm/react-native';
import realm from "../../realm/models.js";
import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,NativeModules,TextInput, TouchableHighlight, Navigator,Touch} from 'react-native';


//for each day on the calendar 
export default class TourCalendar extends Component {

    constructor(props){
    super(props);
    let tours = realm.objectForPrimaryKey('Tour',this.props.tourID);
    this.state = {title:tours.title};

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(tours.shows)
    }}

deleteItem= ()=>{
let tour = realm.objectForPrimaryKey('Tour',this.props.tourID);
realm.write(()=>{
    realm.delete(tour);
})
        
        this.props.navigator.replacePreviousAndPop({name:'SeeTours'})
    }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
      <Text>{this.state.title}</Text>
        <ListView
          dataSource={this.state.dataSource}
         renderRow={(rowData)=> this.renderDays(rowData)}
            renderHeader={() => <Text>{this.state.title}</Text>}
          
        />
       
        <Button title="Merch"
        onPress={()=>{this.props.navigator.push({name:'MerchList', passProps:{tourID:this.props.tourID}})}}/>
         <Button title="Delete Tour"
        onPress={()=>this.deleteItem()}/>

      </View>
    );
  }

renderDays(days){
  return(
  <TouchableHighlight onPress={()=>
           this.props.navigator.push({name:'ShowDetails', passProps:{show: days}})
}>
<Text>Day {days.id} - {days.date.toString()}</Text>
</TouchableHighlight>
  )
}
}
module.exports = TourCalendar