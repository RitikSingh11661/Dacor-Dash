const {Router}= require('express');
const userRouter=Router();
const {getData} = require('../controllers/user.controller')

userRouter.get('/',getData)
