'use strict'

import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput,Button,Navigator,NativeModules} from 'react-native'
import realm from "../../realm/models.js";
var moment = require('moment');

export default class ShowDetails extends Component {
constructor(props){
    super(props);
    this.state= {name:'', time:'',soundchecktime:'',address:'',host:'',guarantee:'',bands:'',notes:'', show: this.props.show, tour:this.props.tour};
     if(this.state.show.edited){
        this.state ={name:this.props.show.name, time:this.props.show.time,soundchecktime:this.props.show.soundchecktime,address:this.props.show.address,host:this.props.show.host,guarantee:this.props.show.guarantee,bands:this.props.show.bands,notes:this.props.show.notes,show: this.props.show, tour:this.state.tour};
     }
          
   
}

onCheck(){
    realm.write(()=>{
         this.state.show.name = this.state.name;
         this.state.show.time = this.state.time;
         this.state.show.soundchecktime = this.state.soundchecktime;
         this.state.show.address = this.state.address;
         this.state.show.host = this.state.host;
         this.state.show.bands = this.state.bands;
         this.state.show.notes = this.state.notes;
         this.state.show.guarantee = this.state.guarantee;
         this.state.show.edited = true;
    });
    this.forceUpdate();
        this.props.navigator.replacePreviousAndPop({name:'TourCalendar', passProps:{tourID: this.state.tour.id}});
}

parseTime(hour,minute){
if(hour>12){
return ((hour%12) + ':' + minute + ' pm')
}
else{

return(hour + ':' + minute + ' am')
}
}
    render(){
        return(
         <View style={styles.ViewContainer} >
         <View style={styles.topCard}>
         <Text style={{textAlign:'right'}}>{moment(this.props.show.date).format("dddd, MMMM Do YYYY")}</Text>
           <TextInput
          placeholder={"name for show"}
          onChangeText={(name)=>this.setState({name})}
    >{this.state.name}</TextInput>
    <View style={styles.buttonWrapper}>
    <Text>{'\n'}{this.state.time}</Text>
    <Text>{'\n'}{this.state.soundchecktime}</Text>
    </View>
</View>
<View style={styles.bottomCard}>
      <View style={styles.buttonWrapper}>
      <Button 
        title='door time'
        color='rosybrown'
        onPress={() =>NativeModules.DateAndroid.showTimepicker(function() {}, (hour,minute)=> {
           let timeString= this.parseTime(hour,minute);
           this.setState({time:timeString});
        })
          
  }
        />
        <Button 
        title='soundcheck'
        color='rosybrown'
        onPress={() =>NativeModules.DateAndroid.showTimepicker(function() {}, (hour,minute)=> {
          
           let timeString= this.parseTime(hour,minute);
           this.setState({soundchecktime:timeString});
        })
          
  }
        />
    </View>
      
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"venue address"}
          onChangeText={(input)=>this.setState({address:input})}
      >{this.state.address}</TextInput>
      
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"host of show"}
          onChangeText={(host)=>this.setState({host:host})}
      >{this.state.host}</TextInput>

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"guarantee"}
        keyboardType={"numeric"}
          onChangeText={(guarantee)=>this.setState({guarantee:guarantee})}
      >{this.state.guarantee}</TextInput>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"supporting acts"}
          onChangeText={(bands)=>this.setState({bands:bands})}
      >{this.state.bands}</TextInput>
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"notes"}
          onChangeText={(notes)=>this.setState({notes:notes})}
     >{this.state.notes}</TextInput>

      
        <Button 
        title="Save Your Changes"
        color='rosybrown'
        onPress={() => this.onCheck('nah')}
        />
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
        bottomCard:{
         flex:.75,
         flexDirection:"column",
         justifyContent:'space-around',
         paddingLeft:20,
         paddingRight:20
        },
        buttonWrapper:{
            flexDirection:'row',
            justifyContent:'space-between'
          
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

module.exports = ShowDetails