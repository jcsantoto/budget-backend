const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const testController = require('../controllers/testController');


router.get("/test", testController.testGet);
router.post("/test", testController.testPost);

router.post('/register', userController.createUser);

module.exports = router;