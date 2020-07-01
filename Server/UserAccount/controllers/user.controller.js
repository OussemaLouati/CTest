const mongoose = require('mongoose');
const passport = require('passport');
// const router = express.Router();
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    
    user.email = req.body.email;
    user.password = req.body.password;
    user.typeUser=req.body.typeUser;
    user.save((err,doc) => {
        
            if(!err){
            res.send(doc);}
            else{ res.send('adresse email déja utilisée')}

    });

}

module.exports.authenticate = (req, res, next) => {

    passport.authenticate('local', (err, user, info) => {       

        if (err) return res.status(400).json(err);

        else if (user) return res.status(200).json({ "token": user.generateJwt() });

        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userId = (req, res, next) =>{

    let _id = req.params.id;

    User.findById(_id)
        .then((user) =>{
            res.json(user);
        })
        .catch(err => console.log(err))
}

module.exports.userEmail = (req, res, next) =>{

    let email = req.params.email;

    User.findOne({email:email})
        .then((user) =>{
            res.json(user);
        })
        .catch(err => console.log(err))
}

module.exports.getAllUsers = (req, res, next) =>{
    User.find()
        .then((QCMCollections) =>{
            res.json(QCMCollections);
        })
        .catch(err => console.log(err))
}

module.exports.getTypeUser = (req, res, next) =>{

    let email = req.params.email;

    User.findOne({email:email})
        .then((user) =>{
            res.json(user.typeUser);
        })
        .catch(err => console.log(err))
}