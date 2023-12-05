const express = require('express');
const router = express.Router();
const {getNameController, postNameController, deleteNameController} = require('../controllers/nameControllers');

router.route('/get').get(getNameController);
router.route('/post').post(postNameController);
router.route('/delete').delete(deleteNameController);

module.exports = router;