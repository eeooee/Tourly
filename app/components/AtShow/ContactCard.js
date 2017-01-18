'use strict'

import React, { Component } from 'react';
import {View,Text,Button,
  StyleSheet,Navigator,TouchableHighlight,TextInput} from 'react-native';
  import realm from "../../realm/models.js";

  export default class ContactCard extends Component{
constructor(props){
    super(props);
    let tourFromID = realm.objectForPrimaryKey('Tour',this.props.tourID);
    this.state={tour:tourFromID};

}
render(){
   return( 
       <View style={styles.ViewContainer}>
       <View style={styles.card}>
<Text style={{color:'ghostwhite'}}>{this.state.tour.name}</Text>
<Text>{this.state.tour.actName}</Text>
<Text>{this.state.tour.description}</Text>
<Text>{this.state.tour.website}</Text>
<Text>{this.state.tour.email}</Text>
<Text>{this.state.tour.origin}</Text>
  
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