const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
const { mongoose } = require('./db.js');

var questionControllers = require('./controllers/QuestionControllers.js');
var TestControllers = require('./controllers/TestController.js');
var choiceControllers = require('./controllers/choiceController.js');

app.use(cors({origin: 'http://localhost:4200'}));
var app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.use('/questions', questionControllers);
app.use('/test', TestControllers);
app.use('/choix', choiceControllers);

