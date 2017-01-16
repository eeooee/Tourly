'use strict'

import React, { Component } from 'react';
import {View,Text,
  StyleSheet,Navigator,Button} from 'react-native'
  import realm from "../../realm/models.js";
var moment = require('moment');

class OnTour extends Component {
    constructor(props){
        super(props);
    
        this.state = {tour:this.props.tour, show:this.props.show};
       
    }

    render(){
        return(
         <View style={styles.ViewContainer} >
         <View style={styles.topCard}>
         <Text style={{color:'dimgrey', fontSize:30,
     fontWeight:'900',textAlign:'right'}}>{this.state.tour.title}</Text>
          <Text style={{color:'dimgrey', fontSize:20,
     fontWeight:'900',textAlign:'right'}}>
         Day {this.state.show.id} of {this.state.tour.shows.length}
        </Text>
         </View>
       
        <Text>
you need to get to {this.state.show.address} by {this.state.show.soundchecktime}.  
         show starts at {this.state.show.time}
        </Text>
        
        <Text>other bands... {this.state.show.bands}</Text>
        <Text>Notes: {this.state.show.notes}</Text>

 <Button title="At Show!"
         onPress={()=>{this.props.navigator.push({name:'AtShow', passProps:{tourID:this.state.tour.id}})}}/>

 <Button title="Merch"
         onPress={()=>{this.props.navigator.push({name:'MerchList', passProps:{tourID:this.state.tour.id}})}}/>
<Button title="Edit your tour dates"
onPress={()=>{this.props.navigator.push({name:'TourCalendar', passProps:{tourID: this.state.tour.id}})}}/>
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
paddingTop:20,
            paddingLeft:20,
            paddingRight:15,

        },
        bottomCard:{
         flex:.75,
         flexDirection:"column",
         justifyContent:'space-around',
         paddingLeft:20,
         paddingRight:20
        },
        buttonWrapper:{
            paddingBottom:30,
            paddingRight:20,
            paddingLeft:20,
            paddingTop:5
        },
        textHL:{
          color:'ghostwhite'
        },
        dateString:{
          textAlign:'right',
          color:'darkgrey'
        }

    }
)

module.exports = OnTour