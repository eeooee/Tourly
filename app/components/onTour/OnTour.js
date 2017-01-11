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
         <View >
         <Text>{this.state.tour.title}</Text>
        <Text >
         Day {this.state.show.id} of {this.state.tour.shows.length}
        </Text>
        <Text>
you need to get to {this.state.show.address} by {this.state.show.soundchecktime}
        show starts at {this.state.show.time}
        </Text>
        
        <Text>other bands... {this.state.show.bands}</Text>
        <Text>Notes! {this.state.show.notes}</Text>

 <Button title="At Show!"
         onPress={()=>{this.props.navigator.push({name:'AtShow', passProps:{tourID:this.state.tour.id}})}}/>

 <Button title="Merch"
         onPress={()=>{this.props.navigator.push({name:'MerchList', passProps:{tourID:this.state.tour.id}})}}/>
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