'use strict'

import React, { Component } from 'react';
import {View,Text,StyleSheet,Button,NativeModules,TextInput} from 'react-native';
import realm from "../../realm/models.js";
var moment = require('moment');


export default class PickDates extends Component {

  constructor(props) {
    super(props);
  this.state = {tourID:'0',tourName:'  ',beginning: new Date(),end: new Date()};
  
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
         
           alert(this.state.tourID)
           this.props.navigator.push({name:'TourCalendar', passProps:{tourID: tourCount}});
        }
  
    render(){
        return(
         <View >

        <TextInput
        onChangeText ={ (name) => {this.setState({tourName:name});} }>
          Number One Tour Tour
        </TextInput>
        <Text >
          What date is your first show?
        </Text>
         <Button 
        title="pick a date"
        onPress={() =>NativeModules.DateAndroid.showDatepicker(function() {}, (year, month,day)=> {
            let date = new Date(year,month,day)
          this.setState({beginning:date});
        alert(this.state.beginning);})}
        />
        <Text >
          What date is your last show?
        </Text>
        <Button 
        title="pick a date"
        onPress={() =>NativeModules.DateAndroid.showDatepicker(function(){}, (year, month,day)=> {
            let date = new Date(year,month,day)
          this.setState({end:date});
        alert(this.state.end);})}
        />
        <Button 
        title="done"
        onPress={this.addTour}
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

module.exports = PickDates