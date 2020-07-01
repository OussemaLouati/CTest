const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Question } = require('../models/Question');
var { Test } = require('../models/Test');


router.put('/:id/:score', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);
        var t = {
           
            Score:req.params.score
            
        };
    
    Test.findByIdAndUpdate(req.params.id, { $set: t }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in test Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:category/:idC', (req, res ) => {
    Test.find( {$and : [ {categorieTest:req.params.category}, {idCandidat : req.params.idC}]},(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Question :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:id', (req, res ) => {
    Test.find( { _id: req.params.id }, { Score: 1, _id: 0 } ,(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Question :' + JSON.stringify(err, undefined, 2)); }
    });
});


module.exports = router;