const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const testController = require('../controllers/testController');


router.get("/test", testController.testGet);
router.post("/test", testController.testPost);

router.post('/register', userController.createUser);
router.post('/get', userController.getUser);
router.post('/update', userController.updateUser);
router.post('/delete', userController.deleteUser);


module.exports = router;