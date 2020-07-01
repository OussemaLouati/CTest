var mongoose = require('mongoose');
var { Question } = require('./Question');

//const Schema = mongoose.Schema;
var Test = mongoose.model('Test', {


          categorieTest: {
            type: String
          },
          Score:{
            type: Number,
            default: 0 
          },

          idCandidat:{
            type: String,
            default: ""
          }

        
       
});

module.exports = { Test}
