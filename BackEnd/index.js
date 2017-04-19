const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const cors = require('cors')

app.use(cors())
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

const data = [
  {name: "Spencer",id: 0,"age": 3,likesJS:true},
  {name: "Bart",id: 1,"age": 10,likesJS:false},
  {name: "Chevy Chase",id: 2,"age": 73,likesJS:false}
];

// Get all of people
app.get('/people',function(req,res){
  res.json(data);
})

// Get a single person
app.get('/people/:id',function(req,res){
  let id = req.params.id
  const onePerson = data.filter(person=>{
    if(person.id == id) {
      return person
    }
  })
  res.json(onePerson)
})

// Post a new person
app.post('/people',function(req,res){
  let person = {"name":req.body.name,"id":req.body.id,"age":req.body.age,"likesJS":req.body.likesJS}
  data.push(person)
  res.json(data)
})

// Delete a person
app.delete('/people/:id',function(req,res){
  let id = req.params.id
  data.filter(person=>{
    if(person.id == id) {
      var index = data.indexOf(person)
      data.splice(index,1)
    }
  })
  res.json(data)
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
