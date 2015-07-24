var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.json());

app.post('/array', function(req, res){
  if(!req.body) res.sendStatus(400);
  req.body.data[0].forEach(function(d){
    console.log(d);
  });
  res.sendStatus(200);
});

app.post('/string', function(req, res){
  if(!req.body) res.sendStatus(400);
  console.log.apply(console, req.body.data);
  res.sendStatus(200);
});

app.listen(3000); 
