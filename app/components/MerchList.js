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
      <View style={styles.ViewContainer}><View style={styles.topCard}>
      <Text>{this.state.merch.title}</Text>
      </View>
        <ListView
          dataSource={this.state.dataSource}
         renderRow={(rowData)=> this.renderMerch(rowData)}
         enableEmptySections={true}
          
        />

      <View style={styles.bottomCard}>
        <Button title="Add Merch"
        onPress={()=>{
            this.props.navigator.push({name:'MerchEdit',passProps:{tourID:this.props.tourID}})
        }}/>
        <Button title="Go Back"
           onPress={()=>{
            this.props.navigator.pop();
        }}/>
  </View>
      </View>
      
    );
  }

renderMerch(items){
  return(
    <View style={styles.listItems}>
  <TouchableHighlight onPress={()=>
      
           this.props.navigator.push({name:'MerchEdit', passProps:{merch: items, tourID:this.props.tourID}})
}>
<Text>{items.name}</Text>
</TouchableHighlight>
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
padding:20


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
        },
        listItems:{
          height:80,
          flex:1,
          flexDirection:"row"

        }

    }
)
module.exports = MerchList;