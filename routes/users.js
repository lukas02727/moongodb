const express = require('express');
const router = express.Router();

const userController = require("../controllers/user")

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

router.post('/', userController.createUser);

router.put('/:id', userController.UpdateUser);

router.patch('/:id', userController.PatchUser);

router.delete('/:id', userController.DeleteUser);


module.exports = router;
