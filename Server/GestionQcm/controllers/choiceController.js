const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Question } = require('../models/Question');
var { Test } = require('../models/Test');







router.get('/:id', (req, res) => {
    
    Question.findById({ _id: req.params.id }, { choix: 1, _id: 0 }, (err, doc) => {
           if (!err) { res.send(doc); }
           else { console.log('Error in Retriving  :' + JSON.stringify(err, undefined, 2)); }
       });
   
   });

   module.exports = router;