
import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput,Button,Navigator} from 'react-native'
import realm from "../realm/models.js";
var moment = require('moment');

export default class MerchEdit extends Component{
    constructor(props){
        super(props);
        this.state={name:'', cost:'', description:'', initialStock:'', saveFunction:this.saveNew, tourID:this.props.tourID};
        if(this.props.merch!==undefined){
            
            this.state={merch:this.props.merch, name:this.props.merch.name, cost:this.props.merch.cost,description:this.props.merch.description, initialStock:this.props.merch.initialStock,saveFunction:this.saveExisting, deleteFunction:this.deleteItem }
        }
    }

deleteItem= ()=>{
var merch=this.state.merch;
realm.write(()=>{
    realm.delete(merch);
})
        
        this.props.navigator.replacePreviousAndPop({name:'MerchList', passProps:{tourID:this.props.tourID}})
    }


    saveNew = ()=> {  
    let tour = realm.objectForPrimaryKey('Tour',this.state.tourID);
        realm.write(()=>{
tour.merch.push({name:this.state.name, cost:this.state.cost, description:this.state.description, initialStock:parseInt(this.state.initialStock,10)})
        })
        this.props.navigator.replacePreviousAndPop({name:'MerchList', passProps:{tourID:this.props.tourID}})
    }

    saveExisting= ()=>{
var merch=this.state.merch;
realm.write(()=>{
merch.name=this.state.name;
merch.cost=this.state.cost;
merch.description=this.state.description;})
        
        this.props.navigator.replacePreviousAndPop({name:'MerchList', passProps:{tourID:this.props.tourID}})
    }
    render(){
        return(
         <View style={styles.ViewContainer}>
       <View style={styles.card}>
        <TextInput
        placeholder={"Item name"}
          onChangeText={(name)=>this.setState({name})}
        >
        {this.state.name}</TextInput>
        <TextInput
        
        placeholder={"Cost"}
        keyboardType={"numeric"}
        onChangeText={(cost)=>this.setState({cost})}>{this.state.cost}</TextInput>
        <TextInput
        placeholder={"Description"}
        multiline={true} 
        numberOfLines={3}
        onChangeText={(description)=>this.setState({description})}>{this.state.description}</TextInput>
        <TextInput 
        placeholder={"Quantity"}
        keyboardType={"numeric"}
        onChangeText={(initialStock)=>this.setState({initialStock})}
        >{this.state.initialStock}</TextInput>
        </View>
        <View style={{flexDirection:'row' }}>
        <View style={styles.buttonWrapper}>
        <Button
        title="Save"
        color="rosybrown"
        onPress={()=>this.state.saveFunction()}
        />
      </View>
        <View style={styles.buttonWrapper}>
  
          <Button
        title="delete"
        color="rosybrown"
        onPress={()=>this.state.deleteFunction()}
        />
        
        
        </View>
        </View>
        </View>
        )
    }
}

const styles = StyleSheet.create(
  {
     textLight:{
          color:'ghostwhite'
        },
          bigLight:{
          color:'ghostwhite',
          fontSize:20,
          fontWeight:'bold'
        },
       ViewContainer:{
            flex:1, 
            flexDirection: "column",
            justifyContent:"center",
            alignItems:"stretch",
            backgroundColor:'ghostwhite'
        },
           buttonWrapper:{
               flex:1,
            paddingBottom:30,
            paddingRight:20,
            paddingLeft:20,
            paddingTop:5
        },
        card:{
          margin:10,
          flex:1,
            flexDirection: "column",
            justifyContent:"space-between",
backgroundColor:'dimgrey',
padding:30

        }
  }
)
module.exports = MerchEdit