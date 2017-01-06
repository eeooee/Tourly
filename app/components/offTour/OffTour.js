'use strict'

import React, { Component } from 'react';
import {View,Text,Button,
  StyleSheet} from 'react-native'

class OffTour extends Component {
    render(){
        return(
         <View >
        <Text >
          It seems like you're not currently on tour...
        </Text>
        <Button title="Plan a new tour"/>
        <Button title="Edit an existing tour"/>
        <Button title="Edit an existing tour"/>
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