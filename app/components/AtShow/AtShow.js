'use strict'

import React, { Component } from 'react';
import {View,Text,Button,
  StyleSheet,navigator} from 'react-native';
  import realm from "../../realm/models.js";

  export default class AtShow extends Component{
constructor(props){
    super(props)
}
render(){
   return( 
       <View><Text>at show!</Text>
    <Button title="Back"
    onPress={()=>this.props.navigator.pop()}
   />
   </View>)
}
  }


  module.exports = AtShow