'use strict'

import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput,Button,Navigator,NativeModules} from 'react-native'
import realm from "../../realm/models.js";
var moment = require('moment');

export default class ShowDetails extends Component {
constructor(props){
    super(props);
    this.state= {name:'', time:'',soundchecktime:'',address:'',host:'',guarantee:'',bands:'',notes:''};
   
}

onCheck(){
    realm.write(()=>{
         this.props.show.name = this.state.name;
         this.props.show.time = this.state.time;
         this.props.show.soundchecktime = this.state.soundchecktime;
         this.props.show.address = this.state.address;
         this.props.show.host = this.state.host;
         this.props.show.bands = this.state.bands;
         this.props.show.notes = this.state.notes;
         this.props.show.guarantee = this.state.guarantee;
         this.props.show.edited = true;
    });
    this.forceUpdate();
    this.props.navigator.pop();
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
    >{this.props.show.name}</TextInput>
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
          onEndEditing={(address)=>this.addressValidator(address)}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"host of show"}
          onChangeText={(host)=>this.setState({host})}
      />

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"guarantee"}
          onChangeText={(guarantee)=>this.setState({guarantee})}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"supporting acts"}
          onChangeText={(bands)=>this.setState({bands})}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"notes"}
          onChangeText={(notes)=>this.setState({notes})}
      />

      
        <Button 
        title="Save Your Changes"
        color='rosybrown'
        onPress={() => this.onCheck('nah')}
        />
        <Text>{this.state.name.split(' ').map((word) => word && '🍕').join(' ')}</Text>
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