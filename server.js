var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.post('/', function(req, res){
  if(!req.body) res.sendStatus(400);
  req.body.data.forEach(function(d){
    console.log(d);
  });
  res.sendStatus(200);
});

app.post('/object', function(req, res){
  if(!req.body) res.sendStatus(400);
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(3000); 