'use strict'
import { ListView } from 'realm/react-native';
import realm from "../../realm/models.js";
import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,NativeModules,TextInput, TouchableHighlight, Navigator,Touch} from 'react-native';
var moment = require('moment');

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
      <View style={styles.ViewContainer}>
      <Text>{this.state.title}</Text>
        <ListView
          dataSource={this.state.dataSource}
         renderRow={(rowData)=> this.renderTours(rowData)}
          
        />
        <View style={styles.buttonWrapper}>
        <Button title="Back"
        color='rosybrown'
        onPress={()=>{this.props.navigator.pop()}}/>
        </View>
      </View>
    );
  }

renderTours(tour){
  return(

    <View style={styles.card}>
  <TouchableHighlight onPress={()=>
           this.props.navigator.push({name:'TourCalendar', passProps:{tourID: tour.id}})
}>
<Text style={{color:'rosybrown', fontSize:20}}> {tour.title} <Text style ={{color:'dimgrey',fontSize:15}}>{"\n\t\t\t"}{tour.shows.length} days long {"\n\t\t\t"} {moment(tour.beginning).format('dddd MMMM Do')} to {"\n\t\t\t"} {moment(tour.end).format('dddd MMMM Do')}</Text></Text>
</TouchableHighlight>
</View>
  )
}
}

const styles = StyleSheet.create({

        buttonWrapper:{
            paddingBottom:30,
            paddingRight:20,
            paddingLeft:20,
            paddingTop:5
        },
       ViewContainer:{
            flex:1, 
            flexDirection: "column",
            justifyContent:"space-between",
            alignItems:"stretch",
            backgroundColor:'dimgrey'
        },
       card:{
          margin:14,
          flex:1,
          flexDirection:'row',
            justifyContent:"space-between",
            alignItems:'center',
backgroundColor:'ghostwhite',
padding:14

        }
});
module.exports = SeeTours