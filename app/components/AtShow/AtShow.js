'use strict'

import React, { Component } from 'react';
import {View,Text,Button,
  StyleSheet,Navigator,TouchableHighlight,TextInput} from 'react-native';
  import realm from "../../realm/models.js";

  export default class AtShow extends Component{
constructor(props){
    super(props)
}
render(){
   return( 
       <View style={styles.ViewContainer}> 
       <View style={styles.ViewContainer}> 
        <View style={styles.card}>
       <Text style={styles.textLight}>Take notes</Text>
       <TextInput>some placeholder note stuff right here</TextInput></View >
        <View style={styles.card}>
        <Text style={styles.textLight}>Sell Merch</Text>

        <View style={styles.buttonWrapper}>
         <Button title="Merch"
        color='rosybrown'
         onPress={()=>{this.props.navigator.push({name:'SellMerch', passProps:{tourID:this.props.tourID}})}}/></View></View>
        <View style={styles.card}>
        <Text style={styles.textLight}>Contact Card</Text>

        <View style={styles.buttonWrapper}>
        <Button title="Contact Card"

        color='rosybrown'
         onPress={()=>{this.props.navigator.push({name:'ContactCard', passProps:{tourID:this.props.tourID}})}}/></View></View>
   </View>

        <View style={styles.buttonWrapper}>
    <Button title="Back"

        color='rosybrown'
    onPress={()=>this.props.navigator.pop()}
   /></View>
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
            backgroundColor:'dimgrey'
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
backgroundColor:'black',
paddingTop:20,
            paddingLeft:20,
            paddingRight:15,

        }
  }
)
  module.exports = AtShow;