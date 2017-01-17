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
          <Text style={{color:'rosybrown', fontSize:20,
     fontWeight:'900',textAlign:'right'}}>
         Day {this.state.show.id} of {this.state.tour.shows.length}
        </Text>
        <Text style={{color:'dimgrey', fontSize:15,
     fontWeight:'900',textAlign:'right'}}>{"\n"}Your host is {this.state.show.host}</Text>
         </View>
       <View style={styles.bottomCard}>
       <View style={styles.card}>
        <Text><Text style={{fontWeight:'900', color:'rosybrown'}}>
Location:</Text> {this.state.show.address} 
</Text>
<Text><Text style={{fontWeight:'900', color:'rosybrown'}}>
Soundcheck:</Text> {this.state.show.soundchecktime}. 
</Text>
<Text><Text style={{fontWeight:'900', color:'rosybrown'}}>
Door:</Text> {this.state.show.time}. 
</Text>
        
        </View>
        
       <View style={styles.card}>
       
        <Text><Text style={{fontWeight:'900', color:'rosybrown'}}>
        Guarantee:</Text> {this.state.show.guarantee}</Text>
        <Text><Text style={{fontWeight:'900', color:'rosybrown'}}>
        Supporting Acts:</Text> {this.state.show.bands}</Text>
        <Text><Text style={{fontWeight:'900', color:'rosybrown'}}>
        Notes:</Text> {this.state.show.notes}</Text>
</View>
</View>

<View style={{paddingBottom:5, paddingRight:20,paddingLeft:20,
paddingTop:5}}>
 <Button title="At Show!"
 color='rosybrown'
         onPress={()=>{
             realm.write(()=>{this.state.show.atShow=true});
             this.props.navigator.push({name:'AtShow', passProps:{tourID:this.state.tour.id, show:this.state.show}})}}/>
</View>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<View style={styles.buttonWrapper}>
 <Button title="Edit your Merch"
 color='rosybrown'
         onPress={()=>{this.props.navigator.push({name:'MerchList', passProps:{tourID:this.state.tour.id}})}}/>
</View>
<View style={styles.buttonWrapper}>
<Button title="Edit your tour"

 color='rosybrown'
onPress={()=>{this.props.navigator.push({name:'TourCalendar', passProps:{tourID: this.state.tour.id}})}}/>

      </View>
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
paddingTop:20,
            paddingLeft:20,
            paddingRight:15,

        },
          card:{
          margin:10,
          flex:1,
          flexDirection:'column',
            justifyContent:"space-around",
backgroundColor:'ghostwhite',
padding:10

        },
        bottomCard:{
         flex:.75,
         flexDirection:"column",
         justifyContent:'space-around',
         paddingLeft:20,
         paddingRight:20
        },
        buttonWrapper:{
            flex:.5,
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