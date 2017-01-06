'use strict'

import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native'

class PickDates extends Component {
    render(){
        return(
         <View >
        <Text >
          What date is your first show?
        </Text>
        
        <Text >
          What date is your last show?
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

module.exports = PickDates