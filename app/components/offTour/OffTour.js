'use strict'

import React, { Component } from 'react';
import {View,Text,Button,
  StyleSheet,navigator} from 'react-native';
  import realm from "../../realm/models.js";
import PickDates from "./PickDates"


class OffTour extends Component {
     constructor(props) {
    super(props);
  
  }
    render(){
        return(
         <View >
        <Text >
          It seems like you're not currently on tour...
        </Text>
        <Button title="Plan a new tour" 
        onPress={()=>{this.props.navigator.push({name:'PickDates'})

       }}
        
        />
        <Button title="Edit an existing tour"
        onPress={()=>{this.props.navigator.push({name:'SeeTours'})}}/>
      </View>
        )
    }
}

const styles = StyleSheet.create(

    {
        ViewContainer:{
            flex:1, 
            flexDirection: "column",
            justifyContent:"flex-start",
            alignItems:"stretch"
        }
    }
)

module.exports = OffTour