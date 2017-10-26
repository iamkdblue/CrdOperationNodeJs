var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongooseConnection');
var {people} = require('./model/personModel');


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

var Person = mongoose.model('Person',people);


//Insert Data into Db

app.post('/insert',(req,res)=>{
    var name = req.body.name;
    var age = req.body.age;

    var newPerson = new Person({
      Data:{
        name:name,
        age:age
      }
    });

    newPerson.save().then((doc)=>{
      res.send(doc);
    },(err)=>{
      console.log('error');
    });

});

//fetch data from Db
app.get('/fetch',(req,res)=>{
  Person.find((err,people)=>{
    if(err)
    console.log('error occured while fetching');
    else
    res.send(people);
  });
});


//delete from Db through passing id

app.get('/delete/:id',(req,res)=>{
  var id = req.params.id;
  Person.findByIdAndRemove(id,(err,doc)=>{
    if(err)
    console.log('error occured while deleting');
    else
    res.send(doc);
  });

});



app.listen(3000,()=>{
  console.log('Server is up');
});
