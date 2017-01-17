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
      
      <Text style={{color:'rosybrown', fontSize:30,
     fontWeight:'900',textAlign:'right'}}>{this.state.merch.title}</Text>
     
    <Text style={{color:'dimgrey', fontSize:18,
     fontWeight:'900',textAlign:'right'}}>Create merch for your tour.  Tap an existing item to edit it. </Text>
      </View>
      

      <View style={styles.bottomCard}>
        <ListView
          dataSource={this.state.dataSource}
         renderRow={(rowData)=> this.renderMerch(rowData)}
         enableEmptySections={true}
          
        />
        <View style={styles.buttonWrapper}>
        <Button color='rosybrown'
        title="Add Merch"
        onPress={()=>{
            this.props.navigator.push({name:'MerchEdit',passProps:{tourID:this.props.tourID}})
        }}/>
        </View>
        <View style={{
            paddingBottom:30,
            paddingRight:20,
            paddingLeft:20,
           }}>
        <Button 
        color='rosybrown'
        title="Go Back"
           onPress={()=>{
            this.props.navigator.pop();
        }}/>
        </View>
  </View>
      </View>
      
    );
  }

renderMerch(items){
  return(
  <TouchableHighlight onPress={()=>
      
           this.props.navigator.push({name:'MerchEdit', passProps:{merch: items, tourID:this.props.tourID}})
}>

<View style={styles.card}>
<View style={{flex:4, padding:5}}>
<Text style={styles.textLight}>{items.name}</Text>
<Text>{"\t"}{items.description}</Text>
</View>
</View>
</TouchableHighlight>
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
        textLight:{
          color:'rosybrown',
          fontSize:18,
          fontWeight:'bold'
        },
        topCard:{
height:150,
backgroundColor:'ghostwhite',
padding:20


        },
        
        card:{
          margin:10,
          flex:1,
          flexDirection:'row',
            justifyContent:"space-between",
            alignItems:'center',
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
            paddingBottom:10,
            paddingRight:20,
            paddingLeft:20,
            paddingTop:10
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