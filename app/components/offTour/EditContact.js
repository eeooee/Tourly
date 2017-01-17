'use strict'

import React, { Component } from 'react';
import {View,Text,Button,
  StyleSheet,Navigator,TouchableHighlight,TextInput} from 'react-native';
  import realm from "../../realm/models.js";

  export default class EditContact extends Component{
constructor(props){
    super(props)
    let tour = realm.objectForPrimaryKey('Tour',this.props.tourID);
    this.state={tour:tour};
}
render(){
   return( 
       <View style={styles.ViewContainer}>
       <View style={styles.card}>
       <Text style={styles.bigLight}>{this.state.tour.title}</Text>
       <Text style={styles.textLight}>\tFill out some information about your act so it's easy to share information on the road. </Text>
       
   <TextInput placeholder={"Your Name"}></TextInput>
   <TextInput placeholder={"Your Act's Name"}></TextInput>
   <TextInput placeholder={"A brief description of your act... \n\t 'we like to play the greatest jams in the midwest.'"}
   multiline={true} numberOfLines={2}></TextInput>
   <TextInput placeholder={"Websites i.e. bandcamp, twitter"}></TextInput>
   <TextInput placeholder={"Email"}></TextInput>
   <TextInput placeholder={"Place of origin"}></TextInput>
   </View>
   <View style={styles.buttonWrapper}>
     <Button title="Save"
     color="rosybrown"
    onPress={()=>
           this.props.navigator.push({name:'TourCalendar', passProps:{tourID: this.state.tour.id}})}
   />
   
   </View>
   </View>)
}
  }

const styles = StyleSheet.create(
  {
     textLight:{
          color:'ghostwhite'
        },
          bigLight:{
          color:'ghostwhite',
          fontSize:20,
          fontWeight:'bold'
        },
       ViewContainer:{
            flex:1, 
            flexDirection: "column",
            justifyContent:"center",
            alignItems:"stretch",
            backgroundColor:'ghostwhite'
        },
           buttonWrapper:{
             
            paddingBottom:30,
            paddingRight:20,
            paddingLeft:20,
            paddingTop:5
        },
        card:{
          margin:10,
          flex:1,
            flexDirection: "column",
            justifyContent:"space-between",
backgroundColor:'dimgrey',
padding:30

        }
  }
)
  module.exports = EditContact