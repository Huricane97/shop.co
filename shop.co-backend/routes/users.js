const express = require('express');
const router = express.Router();

const userController = require('../controller/users.js')


router
.get('/', userController.getUsers)
.get('/:id', userController.singleUser );

exports.routes = router;