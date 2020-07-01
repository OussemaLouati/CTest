const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Question } = require('../models/Question');
var { Test } = require('../models/Test');

router.get('/', (eq, res) => {
    Question.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Question :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id/:idC', (req, res) => {
    var n =  0 ; 
    if (!ObjectId.isValid(req.params.id))
     Question.aggregate([  
        { $sample: {size: 20} }, 
        { $match:  {categorie: req.params.id} }], (err, doc) => {
         { res.send(doc); }
        
    });
    var test = new Test({ categorieTest:req.params.id , score : n , idCandidat : req.params.idC
    });
    test.save();
       Question.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving  :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.post('/', (req, res) => {
    
    var ques = new Question({
       categorie: req.body.categorie,
       question: req.body.question,
       choix:req.body.choix,
       reponse:req.body.reponse
       
    });
    ques.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Question Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var emp = {
        categorie: req.body.categorie,
        question: req.body.question,
        choix:req.body.choix,
        reponse:req.body.reponse
        
    };
    Question.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Produit Update :' + JSON.stringify(err, undefined, 2)); }
    });
});
module.exports = router;