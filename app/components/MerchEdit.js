
import React, { Component } from 'react';
import {View,Text,StyleSheet,TextInput,Button,Navigator} from 'react-native'
import realm from "../realm/models.js";
var moment = require('moment');

export default class MerchEdit extends Component{
    constructor(props){
        super(props);
        this.state={name:'', cost:'', description:'', initialStock:0, saveFunction:this.saveNew, tourID:this.props.tourID};
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
        <View>
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
        onChangeText={(description)=>this.setState({description})}>{this.state.description}</TextInput>
        <TextInput 
        placeholder={"Quantity"}
        keyboardType={"numeric"}
        onChangeText={(initialStock)=>this.setState({initialStock})}
        >{this.state.initialStock}</TextInput>
        <Button
        title="Save"
        onPress={()=>this.state.saveFunction()}
        />
          <Button
        title="delete"
        onPress={()=>this.state.deleteFunction()}
        />
        </View>
        )
    }
}

module.exports = MerchEdit