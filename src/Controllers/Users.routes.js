const express = require('express');
const UserRoutes = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Get all the Users Data from the Database
UserRoutes.get('/',(req,res) => {


});

//Add Users data in the Database [ Sign UP users ]
UserRoutes.post('/register',(req,res) => {


});

// verify users credientials and send jwt-token in the response;
UserRoutes.post('/login',(req,res) => {


});

// Delete users from the Database, only admin can do this operation
UserRoutes.delete('/delete/:id',(req,res) => {


});


module.exports = {UserRoutes};