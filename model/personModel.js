var mongoose= require('mongoose');

var Schema = mongoose.Schema;

var people =new Schema({
  Data:{
    name:String,
    age:Number
  }
});

module.exports = {people};
