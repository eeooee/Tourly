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
       <View style={{flex:1,flexDirection:'column'}}>
       <Text>contact info!!! </Text>
   <TextInput placeholder={"Your Band's Name"}></TextInput>
   <TextInput placeholder={"Websites"}></TextInput>
   <TextInput placeholder={"Email"}></TextInput>
   <TextInput placeholder={"Origin"}></TextInput>
   <TextInput placeholder={"About"}></TextInput>
    <Button title="Back"
    onPress={()=>this.props.navigator.pop()}
   />
   </View>)
}
  }


  module.exports = ContactCard