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
         <View style={styles.ViewContainer} ><View style={styles.topCard}>
        <View style={{}}>
        <Text style={{color:'dimgrey', fontSize:30,
     fontWeight:'900',textAlign:'right'}} >
         It seems like you're...
         
        </Text>
        </View>
        </View>
        <View style={styles.bottomCard}>
        <View>
        <Text style={{color:'ghostwhite', fontSize:30,
     fontWeight:'900',textAlign:'center'}}>
        not on tour right now.
        </Text>
        </View>
        </View>
        <View style={styles.buttonWrapper}>
        <Button 
            color="rosybrown" title="Plan a new tour" 
        onPress={()=>{this.props.navigator.push({name:'PickDates'})

       }}
        
        />
        </View>
        <View style={styles.buttonWrapper}>
        <Button 
            color="rosybrown"title="Edit an existing tour"
        onPress={()=>{this.props.navigator.push({name:'SeeTours'})}}/>
        
        </View>
      </View>
        )
    }
}

const styles = StyleSheet.create(

    {
        ViewContainer:{
            flex:1, 
            flexDirection: "column",
            justifyContent:"space-between",
            alignItems:"stretch",
            backgroundColor:'dimgrey'
        },
        topCard:{
height:150,
backgroundColor:'ghostwhite',
flexDirection:"row",
            alignItems:"flex-end",
            paddingLeft:20,

        },
        bottomCard:{
         flex:.75,
         flexDirection:"column",
         alignItems:'flex-end',
         paddingRight:20,
         paddingLeft:20
        },
        buttonWrapper:{
            paddingBottom:30,
            paddingRight:20,
            paddingLeft:20,
        }
    }
)

module.exports = OffTour