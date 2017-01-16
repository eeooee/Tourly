'use strict'

import React, { Component } from 'react';
import {View,Text,Button,
  StyleSheet,Navigator,TouchableHighlight,ListView} from 'react-native';
  import realm from "../../realm/models.js";

  export default class SellMerch extends Component{
constructor(props){
    super(props);
    
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    realm.addListener('change',()=>{this.setState({dataSource:ds.cloneWithRows(realm.objectForPrimaryKey('Tour',this.props.tourID).merch) })})
    let merch = realm.objectForPrimaryKey('Tour',this.props.tourID);

    this.state = {
      dataSource: ds.cloneWithRows(merch.merch),
merch: merch
    };
   
    
}
render(){
   return( 
       <View style={{flex:1,flexDirection:'column'}}>
            <ListView
          dataSource={this.state.dataSource}
         renderRow={(rowData)=> this.renderMerch(rowData)}
         enableEmptySections={true}
          
        />
         <Button title="Back"
    onPress={()=>this.props.navigator.pop()}
   />
   </View>)
}

renderMerch(items){
  return(
      <View style={{ height: 50, backgroundColor: 'powderblue', flexDirection:'row', justifyContent:'space-around'}}>
<Text>{items.initialStock-items.sold} / {items.initialStock}</Text>
<Text>{items.name}{"\n"}{items.description}</Text>
<View style={{height:50, width:50,backgroundColor:'red'}}>
  <TouchableHighlight onPress={()=>{this.sellItem(items);}
}>

       <Text> SELL ONE </Text>
</TouchableHighlight>
</View>
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
}
}
  }


  module.exports = SellMerch;