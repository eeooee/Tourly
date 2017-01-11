'use strict'

import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput,Button,Navigator} from 'react-native'
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
    });
    this.forceUpdate();
    this.props.navigator.pop();
}

    render(){
        return(
         <View >
         <Text>{moment(this.props.show.date).format("dddd, MMMM Do YYYY")}</Text>
           <TextInput
          placeholder={"name for show"}
          onChangeText={(name)=>this.setState({name})}
    >{this.props.show.name}</TextInput>

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"door time"}
          onChangeText={(time)=>this.setState({time})}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"soundcheck/load in"}
          onChangeText={(soundchecktime)=>this.setState({soundchecktime})}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"address of show"}
          onChangeText={(address)=>this.setState({address})}
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
        title="Done"
        onPress={() => this.onCheck('nah')}
        />
        <Text>{this.state.name.split(' ').map((word) => word && '🍕').join(' ')}</Text>
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

module.exports = ShowDetails