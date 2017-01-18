import Realm from 'realm';

class Tour{}
Tour.schema = {
    name: 'Tour',
    
  primaryKey:'id',
    properties:{
      
        id: {type:'int'},
        title: {type:'string'},
        beginning: {type:'date'},
        end:{type:'date'},
        currentlyOn:{type:'bool', optional:true},
        shows: {type: 'list', objectType:'Show'},
        merch: {type: 'list', objectType:'Merchandise'},
    name:{type:'string',default:''},
    actName:{type:'string',default:''},
    description:{type:'string',default:''},
    website:{type:'string',default:''},
    email:{type:'string',default:''},
    origin:{type:'string',default:''},
        


      
    }
}
class Show {}
Show.schema = {
  name: 'Show',
  properties: {
    atShow: {type:'bool',optional:true},
    edited:{type:'bool', default:false } ,
      id: {type:'int'},
    date: {type: 'date',},
    name:    {type: 'string',optional:true},
    time:    {type: 'string',optional:true},
    soundchecktime:    {type: 'string',optional:true},
    address:    {type: 'string',optional:true},
    directions:{type:'string',optional:true},
    host: {type:'string', optional: true},
    bands: {type:'string', optional:true},
    notes:{type: 'string',optional:true},
    guarantee: {type:'string',optional:true}
  }
};

class Merchandise{}
Merchandise.schema = {
name:'Merchandise',
properties: {
name:{type:'string'},
cost:{type:'string',optional:true},
description: {type:'string',optional:true},
initialStock:{type:'int'},
sold:{type:'int',optional:true},
image: {type: 'data', optional:true}
}
};

export default new Realm({schema:[Tour,Merchandise,Show]});