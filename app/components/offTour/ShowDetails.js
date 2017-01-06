'use strict'

import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native'
import realm from "../../realm/models.js";

class ShowDetails extends Component {
constructor(props){
    super(props);
    console.log('WHAT IS PROPSSSSS');
    console.log(this.props);
}

// _checkBox(text){
//     realm.write(()=>{
//         this.text = text;
//     });
//     this.forceUpdate();
// }

    render(){
        return(
         <View >
         <Text>Date of Show</Text>
           <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"name for show"}
      />
     <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"time of Show"}
      />

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"door time"}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"soundcheck/load in"}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"address of show"}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"host of show"}
      />

      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"guarantee"}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"supporting acts"}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder={"notes"}
      />
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