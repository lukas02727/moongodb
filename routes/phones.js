const express = require('express');
const router = express.Router();

const phonesController = require("../controllers/phones")

router.get('/', phonesController.getAllPhones);

router.get('/:id', phonesController.getPhoneById);

router.post('/', phonesController.createPhone);

router.put('/:id', phonesController.UpdatePhone);

router.patch('/:id', phonesController.PatchPhone);

router.delete('/:id', phonesController.DeletePhone);


module.exports = router;
