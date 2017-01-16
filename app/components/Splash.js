'use strict'
import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,NativeModules,TextInput,Navigator} from 'react-native';
import realm from "../realm/models.js";

var moment = require('moment');

class Splash extends Component{
    constructor(props){
        super(props);
    }
componentDidMount(){
       setTimeout (() => {
            this.pickScreen();
        }, 1200); 

}
pickScreen= ()=>{
    let tours = realm.objects('Tour');
    let today = moment({hour:0}).toDate();
    let tomorrow = moment({hour:24}).toDate();
    let currentTour = tours.slice(0,1);
    let filteredTour = tours.filtered('beginning <= $0 ', today);
    if(currentTour[0]===undefined){
       return this.props.navigator.replace({name:'OffTour'});
    }
    else {
            let filteredShows = currentTour[0].shows.filtered('date >= $0&&date<=$1 ', today,tomorrow);
        return this.props.navigator.replace(
            {name:'OnTour', passProps:{tour : currentTour[0], show: filteredShows[0]}
    });
    }
    


}
render(){
    return(
        <View style={styles.splash}>
        <View style={styles.logoBox}><Text style={styles.logo}>SPLASH</Text></View>
        </View>
    );

}
}
const styles = StyleSheet.create({
 splash:{
     backgroundColor:'dimgrey',
     flex:1,
     flexDirection: 'column',
justifyContent:'center',
alignItems:'center'
 }  , 
 logoBox:{
borderColor:'ghostwhite',
borderWidth:2,
padding:30,
 },
 logo:{
     color:'ghostwhite',
     fontSize:20,
     fontWeight:'900'
 }
 
})
module.exports = Splash;