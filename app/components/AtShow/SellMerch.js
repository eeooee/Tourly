'use strict'

import React, { Component } from 'react';
import {View,Text,Button,
  StyleSheet,Navigator,TouchableHighlight,ListView} from 'react-native';
  import realm from "../../realm/models.js";

  export default class SellMerch extends Component{
constructor(props){
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       let merch = realm.objectForPrimaryKey('Tour',this.props.tourID);
    this.state = {
      ds: ds,
      dataSource: ds.cloneWithRows(merch.merch),
merch: merch.merch
    };

 

   
    
}
render(){
   return( 
       <View style={styles.ViewContainer}>
       <View style={styles.ViewContainer}>
            <ListView
          dataSource={this.state.dataSource}
         renderRow={(rowData)=> this.renderMerch(rowData)}
         enableEmptySections={true}
          
        />
        </View>
        <View style={styles.buttonWrapper}>
         <Button title="Back"
         color='rosybrown'
    onPress={()=>this.props.navigator.pop()}
   />
   </View>
   </View>)
}

renderMerch(items){
  return(
      <View style={styles.card}>
<Text>{items.initialStock-items.sold} / {items.initialStock}</Text>
<View style={{flex:4, padding:5}}>
<Text style={styles.textLight}>{items.name}</Text><Text>{items.description}</Text>
</View>
<Button title="sell one"
color='rosybrown'
onPress={()=>{this.sellItem(items);}}/>
</View>
  )
}

sellItem = (item) =>{
    if(item.sold>=item.initialStock){
return;
    }
    else{
realm.write(()=>{
item.sold+=1;
})
let ds = this.state.ds;
this.setState({dataSource:ds.cloneWithRows(this.state.merch) });
}

}
  }

const styles = StyleSheet.create(
  {
     textLight:{
          color:'ghostwhite'
        },
       ViewContainer:{
            flex:1, 
            flexDirection: "column",
            justifyContent:"center",
            alignItems:"stretch",
            backgroundColor:'black'
        },
           buttonWrapper:{
             
            paddingBottom:30,
            paddingRight:20,
            paddingLeft:20,
            paddingTop:5
        },
        card:{
          margin:10,
          flex:1,
          flexDirection:'row',
            justifyContent:"space-between",
            alignItems:'center',
backgroundColor:'dimgrey',
padding:20

        },
        sellButton:{
          flexDirection:'column',
          justifyContent:'center',
height:50,
   width:90,
   backgroundColor:'rosybrown',
    borderRadius: 5,
        }
  }
)
  module.exports = SellMerch;