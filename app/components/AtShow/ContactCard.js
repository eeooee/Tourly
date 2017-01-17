'use strict'

import React, { Component } from 'react';
import {View,Text,Button,
  StyleSheet,Navigator,TouchableHighlight,TextInput} from 'react-native';
  import realm from "../../realm/models.js";

  export default class ContactCard extends Component{
constructor(props){
    super(props)
    let tour = realm.objectForPrimaryKey('Tour',this.props.tourID);
    this.state={tour:tour};
}
render(){
   return( 
       <View style={styles.ViewContainer}>
       <View style={styles.card}>
       <Text>contact info!!! </Text>
   <TextInput placeholder={"Your Band's Name"}></TextInput>
   <TextInput placeholder={"Websites"}></TextInput>
   <TextInput placeholder={"Email"}></TextInput>
   <TextInput placeholder={"Origin"}></TextInput>
   <TextInput placeholder={"About"}></TextInput>
  
   </View>
   <View style={styles.buttonWrapper}>
     <Button title="Back"
     color="rosybrown"
    onPress={()=>this.props.navigator.pop()}
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
       ViewContainer:{
            flex:1, 
            flexDirection: "column",
            justifyContent:"center",
            alignItems:"stretch",
            backgroundColor:'black'
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
  module.exports = ContactCard