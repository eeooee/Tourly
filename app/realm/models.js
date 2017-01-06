import Realm from 'realm';

class Schedule {}
Schedule.schema = {
  name: 'Schedule',
  properties: {
    tours: {type: 'list', objectType:'Tour'}
  }
};
class Tour{}
Tour.schema = {
    name: 'Tour',
    properties:{
        dates: {type: 'list', objectType:'Show'},
        merch: {type: 'list', objectType:'Merchandise'}
    }
}
class Show {}
Show.schema = {
  name: 'Show',
  primaryKey:'id',
  properties: {
      id:{type:'int'},
    date: {type: 'date'},
    name:    {type: 'string'},
    time:    {type: 'string'},
    soundchecktime:    {type: 'string',optional:true},
    address:    {type: 'string'},
    directions:{type:'string',optional:true},
    host: {type:'string', optional: true},
    bands: {type:'string', optional:true},
    notes:{type: 'string'},
    guarantee: {type:'string',optional:true}
  }
};

class Merchandise{}
Merchandise.schema = {
name:'Merchandise',
properties: {
name:{type:'string'},
cost:{type:'string'},
description: {type:'string'},
initialStock:{type:'int'},
sold:{type:'int'},
image: {type: 'data', option:true}
}
};

export default new Realm({schema:[Schedule,Tour,Merchandise,Show]});