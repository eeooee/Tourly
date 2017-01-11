'use strict'
import { ListView } from 'realm/react-native';
import realm from "../realm/models.js";
import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,NativeModules,TextInput, TouchableHighlight, Navigator,Touch} from 'react-native';


//for each day on the calendar 
export default class MerchList extends Component {

    constructor(props){
    super(props);
    let merch = realm.objectForPrimaryKey('Tour',this.props.tourID);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(merch.merch),
merch: merch
    }}

  render() {
    return (
      <View style={{flex: 1, paddingTop: 22}}>
      <Text>{this.state.merch.title}</Text>
        <ListView
          dataSource={this.state.dataSource}
         renderRow={(rowData)=> this.renderMerch(rowData)}
         enableEmptySections={true}
          
        />

        <Button title="Add Merch"
        onPress={()=>{
            this.props.navigator.push({name:'MerchEdit',passProps:{tourID:this.props.tourID}})
        }}/>
        <Button title="Go Back"
           onPress={()=>{
            this.props.navigator.pop();
        }}/>
  
      </View>
      
    );
  }

renderMerch(items){
  return(
  <TouchableHighlight onPress={()=>
      
           this.props.navigator.push({name:'MerchEdit', passProps:{merch: items, tourID:this.props.tourID}})
}>
<Text>{items.name}</Text>
</TouchableHighlight>
  )
}
}
module.exports = MerchList;