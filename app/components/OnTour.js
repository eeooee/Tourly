'use strict'

import React, { Component } from 'react';
import {View,Text,
  StyleSheet} from 'react-native'

class OnTour extends Component {
    render(){
        return(
         <View >
        <Text >
         Day 1 of 5
        </Text>
        <Text>

        </Text>
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

module.exports = OnTour