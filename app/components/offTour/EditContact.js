'use strict'

import React, { Component } from 'react';
import {View,Text,Button,
  StyleSheet,Navigator,TouchableHighlight,TextInput} from 'react-native';
  import realm from "../../realm/models.js";

  export default class EditContact extends Component{
constructor(props){
    super(props)
    let tour = realm.objectForPrimaryKey('Tour',this.props.tourID);
    this.state={tour:tour, name:tour.name,actName:tour.actName,description:tour.description,website:tour.website,email:tour.email,origin:tour.origin};
}

saveContact=()=>{
  realm.write(()=>{
  
    this.state.tour.name=this.state.name;
    this.state.tour.actName=this.state.actName;
    this.state.tour.description=this.state.description;
    this.state.tour.website=this.state.website;
    this.state.tour.email=this.state.email;
    this.state.tour.origin=this.state.origin;
    });
           this.props.navigator.push({name:'TourCalendar', passProps:{tourID: this.state.tour.id}})
}
render(){
   return( 
       <View style={styles.ViewContainer}>
       <View style={styles.card}>
       <Text style={styles.bigLight}>{this.state.tour.title}</Text>
       <Text style={styles.textLight}>{"\t"}Fill out some information about your act so it's easy to share information on the road. </Text>
       
   <TextInput placeholder={"Your Name"}>
  { this.state.name}</TextInput>
   <TextInput placeholder={"Your Act's Name"}>
    { this.state.actName}</TextInput>
   <TextInput placeholder={"A brief description of your act... \n\t 'we like to play the greatest jams in the midwest.'"}
   multiline={true} numberOfLines={2}>
    { this.state.description}</TextInput>
   <TextInput placeholder={"Websites i.e. bandcamp, twitter"}>
    { this.state.website}</TextInput>
   <TextInput placeholder={"Email"}>
    { this.state.email}</TextInput>
   <TextInput placeholder={"Place of origin"}>
    { this.state.origin}</TextInput>
   </View>
   <View style={styles.buttonWrapper}>
     <Button title="Save"
     color="rosybrown"
    onPress={()=>this.saveContact()}
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