var mongoose = require('mongoose');

var Question= mongoose.model('Question', {

  type:{type: String,
  default : "Question" },         
  categorie: {
            type: String
          },
          question: {
            type: String
          },
          choix: [
          {
          id:{
                type: Number
            } ,
          choix:{
                 type: String
             }
          }
        ],
        reponse: [
            {
                type: Number
            }
        ],

     /*  static findbyCategorie(categoriii) {
            Question
              .find({ categorie: categoriii})
              .next()
              .then(cat=> {
                return cat;
              })
              
          }*/
       
});

module.exports = { Question };
