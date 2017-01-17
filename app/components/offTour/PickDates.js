'use strict'

import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,NativeModules,TextInput,StatusBar} from 'react-native';
import realm from "../../realm/models.js";
var moment = require('moment');


export default class PickDates extends Component {

  constructor(props) {
    super(props);
  this.state = {tourID:'0',tourName:'  ',beginning: ' ',end: ' ',beginningString:'',endString:''};
  
  }
  static get defaultProps() {
    return {
      title: 'PickDates'
    };
  }

 getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    while (currentDate <= stopDate) {
        dateArray.push(currentDate.toDate());
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}
  addTour= ()=>
    {
        let tourCount = realm.objects('Tour').length+1;
            realm.write(() => {
            let dates = this.getDates(this.state.beginning, this.state.end);
            let tour = realm.create('Tour',{id: tourCount ,title:this.state.tourName, beginning:this.state.beginning, end:this.state.end});
            dates.forEach(function(showDate,index){tour.shows.push({
              id:index, date:showDate})})
            }
             );
              this.setState({tourID:tourCount});
         
           this.props.navigator.push({name:'EditContact', passProps:{tourID: tourCount}});
        }


        isEmpty = (date)=>
        {
          if(date===' '){
            return ' '
          }
          else return moment(date).format('dddd MMMM Do YYYY');
        }
  
    render(){
        return(
         <View style={styles.ViewContainer}>
         
<View style={styles.topCard}>
<Text>
Name your tour....
</Text>
        <TextInput
        onChangeText ={ (name) => {this.setState({tourName:name});} }>
        
        </TextInput>
        </View>
        <View style={styles.bottomCard}>
        <View>
        <Text style={styles.textHL}>
          What date is your first show?
           </Text >
  <Text style={styles.dateString} >
          {this.state.beginningString}
        </Text>

        <View style={styles.buttonWrapper}>
         <Button 
        title='starts'
        color='rosybrown'
        onPress={() =>NativeModules.DateAndroid.showDatepicker(function() {}, (year, month,day)=> {
            let date = new Date(year,month,day)
          this.setState({beginning:date, beginningString:moment(date).format('dddd MMMM Do YYYY')});
          
  
        })}
        /></View>
        <Text style={styles.textHL} >
          What date is your last show?
 </Text >
  <Text style={styles.dateString} >
          {this.state.endString}
        </Text>

        <View style={styles.buttonWrapper}>
        <Button 
        title='ends'
        color='rosybrown'
        onPress={() =>NativeModules.DateAndroid.showDatepicker(function(){}, (year, month,day)=> {
            let date = new Date(year,month,day)
          this.setState({end:date, endString:moment(date).format('dddd MMMM Do YYYY')});
        })}
        /></View>
        </View>
        <View style={styles.buttonWrapper}><Button 
        title="done"
        onPress={this.addTour}
        color='rosybrown'
        /></View>
        </View>
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
paddingTop:20,
            paddingLeft:20,

        },
        bottomCard:{
         flex:.75,
         flexDirection:"column",
         justifyContent:'space-around',
         paddingLeft:20,
         paddingRight:20
        },
        buttonWrapper:{
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
        }

    }
)

module.exports = PickDates