const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

// services user
router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userId/:id', ctrlUser.userId);
router.get('/userEmail/:email', ctrlUser.userEmail);
router.get('/getAllUsers', ctrlUser.getAllUsers);
router.get('/getTypeUser/:email', ctrlUser.getTypeUser);

module.exports = router;
