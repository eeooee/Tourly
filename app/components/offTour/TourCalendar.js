'use strict'
import { ListView } from 'realm/react-native';
import realm from "../../realm/models.js";
import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,NativeModules,TextInput, TouchableHighlight, Navigator,Touch} from 'react-native';
var moment = require('moment');


//for each day on the calendar 
export default class TourCalendar extends Component {

    constructor(props){
    super(props);
    let tours = realm.objectForPrimaryKey('Tour',this.props.tourID);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(tours.shows),
      title:tours.title, 
      tour:tours
    }}

deleteItem= ()=>{
let tour = realm.objectForPrimaryKey('Tour',this.props.tourID);
realm.write(()=>{
    realm.delete(tour);
})
        
        this.props.navigator.replacePreviousAndPop({name:'Splash'})
    }
  render() {
    return (
      <View style={styles.ViewContainer}><View style={styles.topCard}>
      <Text style={{color:'dimgrey', fontSize:30,
     fontWeight:'900',textAlign:'right'}} >{this.state.tour.title}</Text>
     <Text style={{color:'rosybrown', fontSize:20,
     fontWeight:'900',textAlign:'right'}}> {this.state.tour.shows.length} days long</Text>
     <Text style={{color:'dimgrey', fontSize:15,
     fontWeight:'900',textAlign:'right'}}>Update your tour dates to stay organized while on the road. Tap an existing item to edit it. </Text>
    
      </View>
      <View style={styles.bottomCard}>
        <ListView
          dataSource={this.state.dataSource}
         renderRow={(rowData)=> this.renderDays(rowData)}
          
        />

        <View style={styles.buttonWrapper}>
        <Button title="Merch"

        color='rosybrown'
        onPress={()=>{this.props.navigator.push({name:'MerchList', passProps:{tourID:this.props.tourID}})}}/>
         <Button title="Delete Tour"

        color='rosybrown'
        onPress={()=>this.deleteItem()}/>
        <Button title="Go Home"
        color='rosybrown'
        onPress={()=>{this.props.navigator.replace({name:'Splash'})}}/>
</View>
       </View>
      </View>
    );
  }

renderDays(days){
  if(days.edited){
  return(
    <View style={styles.card}>
  <TouchableHighlight onPress={()=>
           this.props.navigator.push({name:'ShowDetails', passProps:{show: days, tour:this.state.tour}})
}>
<Text style={{color:'rosybrown', fontSize:20}}>{days.id+1}

<Text style ={{color:'dimgrey',fontSize:15}}> {moment(days.date).format('dddd MMMM Do')}</Text>
<Text style={{fontSize:17}}> {"\n\t\t\t"}{days.name} {"\n"}Soundcheck: {days.soundchecktime} at {days.address}</Text>
</Text> 
</TouchableHighlight>
</View>
  )
  }
  if(!days.edited){
    return(
    <View style={styles.card}>
  <TouchableHighlight onPress={()=>
           this.props.navigator.push({name:'ShowDetails', passProps:{show: days,tour:this.state.tour}})
}>
<Text style={{color:'rosybrown', fontSize:20}}>{days.id+1}

<Text style ={{color:'dimgrey',fontSize:15}}> {moment(days.date).format('dddd MMMM Do')}</Text>
<Text style={{color:'thistle'}}> {"\n\t\t\t"}Tap to input show details.</Text>
</Text> 
</TouchableHighlight>
</View>
    )}
}


}

const styles = StyleSheet.create(

    {
       ViewContainer:{
            flex:1, 
            flexDirection: "column",
            justifyContent:"space-between",
            alignItems:"stretch",
            backgroundColor:'dimgrey'
        },
        topCard:{
height:150,
backgroundColor:'ghostwhite',
padding:20


        },
        bottomCard:{
         flex:.75,
         flexDirection:"column",
         justifyContent:'space-around',
         paddingLeft:20,
         paddingRight:20
        },
        buttonWrapper:{
          flexDirection:'row',
          alignItems:'stretch',

         justifyContent:'space-between',
            paddingBottom:30,
            paddingRight:20,
            paddingLeft:20,
            paddingTop:5
        },
        textHL:{
          color:'ghostwhite'
        },
        dateString:{
          textAlign:'right',
          color:'darkgrey'
        },
       card:{
          margin:10,
          flex:1,
          flexDirection:'row',
            justifyContent:"space-between",
            alignItems:'center',
backgroundColor:'ghostwhite',
padding:10

        },

    }
)
module.exports = TourCalendar