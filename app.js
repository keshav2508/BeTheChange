const express = require('express');
const bodyParser = require("body-parser");
const db = require("./util/database");
const app = express();

const volunteers = require('./controllers/volntr');
const requesters = require('./controllers/requester');
// const assigned = require('./controllers/assign');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/",function(req,res){
  res.render('home',{
    pageTitle: 'Humanity'
  });
});
app.get('/ask-List/:ask_id', requesters.getRequest);
app.get("/vol-List",volunteers.getVolunteers);
app.get("/ask-List",requesters.getRequests);
app.get("/Buddies",function(req,res){
  res.render('buddies',{
    pageTitle: 'My Buddies'
  });
});
app.get("/vol-form",function(req,res){
  res.render('volForm',{
    pageTitle: 'Add Volunteer',
    editing: false
  });
});
app.get("/ask-form",function(req,res){
  res.render('askForm',{
    pageTitle: 'Ask Help',
    editing: false
  });
});
app.post("/vol-form",volunteers.postAddVolunteers);
app.post("/ask-form",requesters.postAddRequest);
// app.post("/buddies",assigned.getVolBuddies);


app.listen(3000,function(){
  console.log("server started on  port 3000");
});
